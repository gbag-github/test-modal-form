// Globals
import React from 'react';

// Misc
import PropTypes from 'prop-types';

// Component
const InputText = (props) => {
  // Props
  const {
    inputLabel, // Destructure from being passed to input element
    isDisabledForAgent, // Destructure from being passed to input element
    onValueChange, // Destructure handlers not used in this component
    placeholderIsDisabled, // Destructure from being passed to input element
    thousandSeparator,
    ...restProps
  } = props;

  // Render
  return <input {...restProps} />;
};

InputText.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  isDisabledForAgent: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  placeholderIsDisabled: PropTypes.bool,
  thousandSeparator: PropTypes.bool,
  value: PropTypes.string.isRequired
};

InputText.defaultProps = {
  autoComplete: '',
  autoFocus: false,
  isDisabledForAgent: false,
  placeholder: '',
  placeholderIsDisabled: false
};

export { InputText };
