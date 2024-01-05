import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface SwitchProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref' | 'type'> {
  label?: string;
}

export default SwitchProps
