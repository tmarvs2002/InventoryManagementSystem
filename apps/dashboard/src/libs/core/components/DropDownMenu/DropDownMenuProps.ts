import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ColorVariant, StyleVariant } from '@core/theme';

interface DropDownMenuProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    color: ColorVariant;
    variant: StyleVariant;
    href?: string;
    disabled?: boolean;
    startDecorator?: ReactNode;
    endDecorator?: ReactNode;
    fullWidth?: boolean;
    size?: 'md' | 'lg';
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
    menuContent: ReactNode;
}


export default DropDownMenuProps
