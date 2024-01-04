// Globals
import './styles.scss';
import React from 'react';

// Types
import { FieldValues, FormProps, TEST_IDS } from './types';

// Misc
import FormContext, { FormContextProps } from './context';
import clsx from 'clsx';

export type FormValue = string | boolean | number | any[] | Record<string, unknown> | null;
export type FormValueEntries = Record<string, FormValue>;

// Custom Hooks
function useHandleErrors(
  values: FormProps['data'],
  schema: FormProps['schema']
): Record<string, string[]> {
  const [errors, setErrors] = React.useState<Record<string, string[]>>({});

  React.useEffect(() => {
    // Track lifecycle of component
    let isSubscribed = true;

    async function handleErrors(): Promise<Record<string, unknown> | void> {
      try {
        // If no schema, skip validation
        if (!schema) {
          return {};
        }
        // Validate schema
        await schema.validate(values, { abortEarly: false });
        if (isSubscribed) {
          setErrors({});
        }
      } catch (error: any) {
        if (error?.inner?.length > 0) {
          // Keep track of errors by field
          const fieldErrors = (error.inner as Array<Record<'path' | 'message', string>>).reduce<
            Record<string, string[]>
          >((object, { path, message }) => {
            object[path] = object[path] || [];
            object[path].push(message);
            return object;
          }, {});
          if (isSubscribed) {
            setErrors(fieldErrors);
          }
        }
      }
    }

    void handleErrors();

    // Prevent setting state if component unmounted
    return () => {
      isSubscribed = false;
    };
  }, [schema, values]);
  return errors;
}

// Component
const Form = <Values extends FieldValues = FieldValues>(
  props: FormProps<Values>
): ReturnType<React.FunctionComponent> => {
  const {
    className = '',
    data = {},
    defaultValuesAsync = {},
    error = '',
    isSynced = false,
    onError,
    onSubmit,
    pending = '',
    schema,
    staticContext = {} as Values, // BrowserRouter prop
    success = '',
    ...otherProps
  } = props;

  // API Status
  const status = pending || error || success;

  // Key prop is not accessible, so use defaultValuesAsync as 'key' since it is the value passed as key prop to force re-render
  // Non-primitives need to be memoized to prevent unnecessary re-renders in useEffect, but need a way to do "deep equality check," so stringify-ing for referential comparison
  const key = JSON.stringify(defaultValuesAsync);

  // Hooks - state
  const [values, setValues] = React.useState<Partial<Values>>(data);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Hooks - ref
  const statusRef = React.useRef<HTMLDivElement>(null);

  // Hooks - effects
  React.useEffect(() => {
    // Some forms need default values that are async. Since Form component is controlled, need to use key to trigger re-render and manually set input values
    // Length check on values won't suffice as they may have defaults coming from global state, instead check for any non-undefined value
    const isRequestResolved = Object.values(defaultValuesAsync).some(
      (value) => value !== undefined
    );
    if (isRequestResolved) {
      setValues({ ...values, ...defaultValuesAsync });
    }
  }, [key]);

  const errors = useHandleErrors(values, schema);

  // Handlers
  const handleSubmit: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >['onSubmit'] = (event) => {
    event.preventDefault();

    if (!isSubmitted) {
      setIsSubmitted(true);
    }

    if (Object.keys(errors).length > 0) {
      // Track schema errors
      if (onError) {
        onError();
      }
      return;
    }

    onSubmit(values as Required<Values>);

    // Sync on submit
    if (isSynced) {
      let undefinedValues: FormValueEntries = {};
      // @ts-expect-error
      schema?._nodes.forEach((node) => {
        undefinedValues = { ...undefinedValues, [node]: null };
      });
    }
  };

  // Vars
  const classes = clsx('form', className);
  const toastClasses = clsx('form-toast', {
    'form-toast-error': error,
    'form-toast-pending': pending || success,
    'form-toast-hide':
      typeof status !== 'string' && (status?.type as any)?.displayName?.startsWith('Modal')
  });
  const formProps: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > = {
    onSubmit: handleSubmit,
    ...otherProps
  };

  // Render
  return (
    <FormContext.Provider
      value={{
        errors,
        isSubmitted,
        values: [values, setValues as FormContextProps['values'][1]]
      }}
    >
      <div className={classes}>
        {status && (
          <div className={toastClasses} data-test={TEST_IDS.ERROR} ref={statusRef}>
            {status}
          </div>
        )}
        <form {...formProps} />
      </div>
    </FormContext.Provider>
  );
};

export { Form };
