'use client';

import DropDownMenuProps from "./DropDownMenuProps";
import styled from "styled-components";
import { defaultStyles } from "@core/helpers/defaultStyles";
import { MouseEvent, Ref, useEffect, useRef } from "react";


export const DropDownMenuBase = styled('div')<Omit<DropDownMenuProps, 'isVisible' | 'setIsVisible' | 'menuContent'>>(({ disabled, variant, size, color }) => ({
    ...(defaultStyles(color, variant)),
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: '0',
    gap: '4px',
    position: 'relative',
    overflow: 'visible',
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


const DropDownMenu: React.FC<DropDownMenuProps> = ({
    color = 'primary',
    variant = 'filled',
    size = 'md',
    children,
    startDecorator,
    endDecorator,
    fullWidth,
    menuContent,
    isVisible,
    setIsVisible,
    ...props
}) => {

    const Content = () => menuContent;
    const ref = useRef<HTMLDivElement>(null);

    function handleClick(e: Event | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, toggle?: boolean) {
        const target = e.target as HTMLElement;
        if (toggle) {
            setIsVisible(!isVisible)
        }
        else if (!ref.current.contains(target)) setIsVisible(false);
    }

    useEffect(() => {
        if (isVisible) {
            window.addEventListener("mousedown", handleClick);
        } else {
            window.removeEventListener("mousedown", handleClick)
        }
    }, [isVisible])


    return (
        <DropDownMenuBase ref={ref} color={color} variant={variant} size={size} {...props} onClick={(e) => handleClick(e, true)}>
            {startDecorator}
            <span className="label">
                {children}
            </span>
            {endDecorator}
            {isVisible && (<Content />)}
        </DropDownMenuBase>
    )
};

export default DropDownMenu;