import { DetailedHTMLProps, InputHTMLAttributes } from 'react';


interface InputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> {
  value?: any;
  fieldname?: string;
  isValid?: boolean;
  label?: string;
  helperText?: string;
  errorMessage?: string; 
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
}

export default InputProps