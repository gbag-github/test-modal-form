import React from 'react';

export interface ButtonTextProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  display?: 'inline';
  form?: string;
  hoverText?: string;
  intent?: 'primary' | 'secondary' | 'text' | 'tertiary' | 'quaternary';
  isFullWidth?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit';
}
