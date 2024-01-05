'use client';

import ButtonProps from "./ButtonProps";
import styled from "styled-components";
import Link from "next/link";
import { defaultStyles } from "@core/helpers/defaultStyles";
import { PropsWithChildren } from "react";


export const ButtonBase = styled('button')<ButtonProps>(({ disabled, variant, size, color }) => ({
    ...(defaultStyles(color, variant)),
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: '0',
    gap: '4px',
    borderRadius: '40px',
    fontFamily: `'Inter', sans-serif`,
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    height: `${size === 'md' ? 44 : 56}px`,
    padding: `0 ${size === 'md' ? 16 : 20}px`,
    cursor: `${disabled ? 'default' : 'pointer'}`,
    transition: 'all 0.2s ease-in',
    '& span.label': {
        display: 'flex',
        padding: `0 ${size === 'md' ? 8 : 12}px`,
        alignItems: 'flex-start',
        fontSize: `${size === 'md' ? 16 : 18}px`,
        lineHeight: `${size === 'md' ? 132 : 140}%`,
        letterSpacing: `0 ${size === 'md' ? 0.2 : 0.06}px`,
    }
}))


interface ButtonWrapper extends PropsWithChildren {
    href?: string;
}

const ButtonLink = ({ href, children }: ButtonWrapper) => {
    return (
        href ? (<Link style={{display: 'contents'}} href={href}>{children}</Link>)
            : (<>{children}</>)
    );
}


const Button: React.FC<ButtonProps> = ({
    color = 'primary',
    variant = 'filled',
    size = 'md',
    href,
    children,
    startDecorator,
    endDecorator,
    fullWidth,
    ...props
}) => {

    return (
        <ButtonLink href={href}>
            <ButtonBase color={color} variant={variant} size={size} {...props}>
                {startDecorator}
                <span className="label">
                    {children}
                </span>
                {endDecorator}
            </ButtonBase>
        </ButtonLink>
    )
};

export default Button;