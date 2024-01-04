import { Dispatch, SetStateAction, createContext } from 'react';
import { FieldValues } from 'components/Form/types';

export interface FormContextProps<Values extends FieldValues = FieldValues> {
  errors: Record<string, any[]>;
  isSubmitted: boolean;
  values: [Values, Dispatch<SetStateAction<unknown | FieldValues>>];
}

const defaultProps: FormContextProps = { errors: {}, isSubmitted: false, values: [{}, () => ({})] };

const FormContext = createContext<FormContextProps>(defaultProps);

export default FormContext;
