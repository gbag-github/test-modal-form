// Globals
import './styles.scss';
import React, { useContext, useState } from 'react';

// Components
import { InputText } from './Text';

// Misc
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { TEST_IDS } from './types';

// Constants
const Types = {
  text: InputText
};

const CHECKBOXES = {
  checkbox: true,
  toggle: true
};

// Component
const Input = (props) => {
  const {
    className,
    disabled,
    format,
    id,
    inputId,
    inputMode,
    isFormattedValue,
    label,
    mask,
    name,
    onBlur,
    onChange,
    onFocus,
    onInput,
    pattern,
    placeholderIsDisabled,
    prefix,
    readOnly,
    thousandSeparator,
    type,
    ...otherProps
  } = props;

  // Vars
  let errors = [];
  let isSubmitted = false;
  let values = {};
  let setValues = () => null;

  // Hooks
  const [focus, setFocus] = useState(false);


  // Handlers
  const handleOnFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
    setFocus(true);
  };

  const handleOnBlur = (event) => {
    // Connected to form - trim input value
    if (onBlur) {
      onBlur(event);
    }
    setFocus(false);
  };

  // Handlers - onChange, non-number inputs
  const handleOnChange = (event) => {

    if (onChange) {
      onChange(event);
    }
  };

  // Handlers - onChange, number input
  const handleOnValueChange = (data) => {
    // Connected to form - set input value in form
  };

  // Handlers
  // Use onInput as autocomplete value change does not trigger onChange
  const handleOnInput = (event) => {

    if (onInput) {
      onInput(event);
    }
  };

  // Vars
  const Component = Types[type];
  const value = values[name] ?? '';
  const error = errors?.length > 0 ? errors[0] : '';
  const isError = isSubmitted && error;
  const classes = clsx('app-input', className, {
    'app-input-focus': focus,
    'app-input-error': isError
  });
  const inputLabel = `input-label-${label}`;
  const inputProps = {
    className: 'app-input-control',
    disabled,
    format,
    id: inputId,
    inputLabel,
    inputMode,
    name,
    readOnly,
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
    onInput: handleOnInput, // Capture autocomplete value change in InputSelect
    onValueChange: handleOnValueChange, // onChange for react-number-format inputs
    placeholderIsDisabled,
    prefix,
    thousandSeparator,
    value,
    ...otherProps
  };

  // Render
  return (
    <div className={classes} id={id}>
      <label>
        {label && (
          <div className="app-input-label" id={inputLabel}>
            {label}
          </div>
        )}
        <div className="app-input-container">
          <Component {...inputProps} />
          {isError && (
            <div className="app-input-error" data-test={TEST_IDS.INPUT_ERROR}>
              {error}
            </div>
          )}
          {name === 'email' && (
            <div className="app-input-info">Connected email address cannot be changed.</div>
          )}
        </div>
      </label>
    </div>
  );
};

Input.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  checked: PropTypes.bool,
  children: PropTypes.node,
  'data-value': PropTypes.string,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  isDisabledForAgent: PropTypes.bool,
  isShowCardsPreview: PropTypes.bool,
  id: PropTypes.string,
  inputId: PropTypes.string,
  inputMode: PropTypes.string,
  readOnly: PropTypes.bool,
  format: PropTypes.string,
  isFormattedValue: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  mask: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  maxLength: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  onKeyUp: PropTypes.func,
  onValueChange: PropTypes.func,
  options: PropTypes.array,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderIsDisabled: PropTypes.bool,
  prefix: PropTypes.string,
  rows: PropTypes.string,
  type: PropTypes.oneOf(['text']),
  value: PropTypes.string
};

Input.defaultProps = {
  autoComplete: '',
  autoFocus: false,
  className: '',
  children: null,
  'data-value': '',
  defaultChecked: false,
  disabled: false,
  readOnly: false,
  format: null,
  isDisabledForAgent: false,
  isFormattedValue: false,
  label: '',
  mask: [],
  maxLength: '',
  onInput: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  onKeyUp: null,
  pattern: '',
  placeholder: undefined,
  placeholderIsDisabled: false,
  prefix: '',
  rows: null,
  thousandSeparator: false,
  type: 'text'
};

export { Input };
