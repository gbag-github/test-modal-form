import React from 'react';
import { ClassValue } from 'clsx';
import { object } from 'yup';

export enum TEST_IDS {
  ERROR = 'ERROR'
}

export type FieldValues = Record<string, any>;

export interface FormProps<Values = FieldValues> {
  children?: React.ReactNode;
  className?: ClassValue;
  data?: Partial<Values>;
  defaultValuesAsync?: Partial<Values>;
  error?: Exclude<React.ReactChild, number>;
  isSynced?: boolean;
  name: string;
  onError?: () => void;
  onSubmit: (values: Values) => any;
  pending?: string;
  schema?: ReturnType<typeof object>;
  staticContext?: Values; // BrowserRouter prop
  success?: string;
  id?: string;
  label?: string;
}
