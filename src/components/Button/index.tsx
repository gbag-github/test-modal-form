// Globals
import React from 'react';
import clsx from 'clsx';

// Components
import { ButtonText } from './Text';

// Types
import { ButtonProps, ButtonType } from './types';

// Constants
const ButtonTypes = {
  submit: ButtonText,
  button: ButtonText
};

// Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    hasPulseAnimation = false,
    hoverText,
    isDisabled,
    isDisabledForAgent,
    onClick,
    type = ButtonType.BUTTON,
    isFullWidth,
    ...passedProps
  } = props;

  // Vars
  const Component = ButtonTypes[type];
  // eslint-disable-next-line no-negated-condition
  const widthProp = { isFullWidth };
  const cssClass = clsx(className);

  // Render
  return (
    <Component
      className={cssClass}
      hoverText={hoverText}
      type={type}
      ref={ref}
      {...passedProps}
      {...widthProp}
    >
      {children}
    </Component>
  );
});

export { Button };
