import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref' | 'type'> {
  label?: string;
}