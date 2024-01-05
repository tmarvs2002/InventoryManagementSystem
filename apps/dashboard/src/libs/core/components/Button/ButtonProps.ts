import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ColorVariant, StyleVariant } from '@core/theme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    color: ColorVariant;
    variant: StyleVariant;
    href?: string;
    disabled?: boolean;
    startDecorator?: ReactNode;
    endDecorator?: ReactNode;
    fullWidth?: boolean;
    size?: 'md' | 'lg'
}


export default ButtonProps
