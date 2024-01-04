/* eslint react/button-has-type: 0 */

// Globals
import './styles.scss';
import React from 'react';

// Components
import { Loading } from 'components/Loading';

// Misc
import clsx from 'clsx';
import { ButtonTextProps } from './types';

// Component
const ButtonText: React.FunctionComponent<ButtonTextProps> = ({
  children,
  className,
  disabled,
  display,
  hoverText, // Destructure unnecessary props
  intent = 'primary',
  isFullWidth,
  isLoading,
  type,
  ...otherProps
}) => {
  // Vars
  // native HTML <button> "type" attribute does not take value "icon";
  // default to "button" for everything other than "submit"
  const buttonType = type === 'submit' ? 'submit' : 'button';

  // TODO: intent type tertiary temporarily added for ButtonIcon on Family page - not meant to be used in ButtonText
  const classes = clsx('app-button_text', className, `app-button_text-${intent}`, {
    'app-button_text-display-inline': display === 'inline',
    'app-button_text-full-width': isFullWidth,
    'app-button_text-loading': isLoading,
    'app-button_text-loading-secondary': isLoading && intent === 'secondary'
  });

  // Render
  return (
    <button className={classes} {...otherProps} disabled={disabled || isLoading} type={buttonType}>
      {/* Icon always on the left per design system */}
      {!isLoading && <>{children}</>}
      {isLoading && <Loading />}
    </button>
  );
};

export { ButtonText };
