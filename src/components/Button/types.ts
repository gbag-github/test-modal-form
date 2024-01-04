import { ClassValue } from 'clsx';
import React from 'react';

import type { Except } from 'type-fest';

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit'
}

type HTMLButtonProps = Except<React.HTMLProps<HTMLButtonElement>, 'className'>;

export interface ButtonProps extends HTMLButtonProps {
  className?: ClassValue;
  badge?: JSX.Element;
  display?: 'inline';
  form?: string;
  hasPulseAnimation?: boolean;
  hoverText?: string;
  id?: string;
  intent?: 'primary' | 'secondary' | 'text' | 'tertiary' | 'quaternary';
  isDisabled?: boolean;
  isDisabledForAgent?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  trackingDisabled?: boolean;
  type?: 'button' | 'submit';
  name?: string;
  children?: React.ReactNode;
}
