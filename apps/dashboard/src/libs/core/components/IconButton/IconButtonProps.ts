import { ColorVariant } from '@core/theme';
import { SVGProps, FC, ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: string | FC<SVGProps<SVGSVGElement>>;
    variant?: 'filled' | 'outlined';
    color?: ColorVariant;
    size?: 'md' | 'lg';
}

export default IconButtonProps;