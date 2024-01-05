'use client';

import IconButtonProps from "./IconButtonProps";
import styled from "styled-components";
import { getAttrs } from "@core/helpers/defaultStyles";
import dynamic from "next/dynamic";
import { SVGProps } from "react";
import { Style } from "@core/theme/types/extendedTheme";

interface BaseProps {
  size: 'md' | 'lg';
  default: Style;
  hovered: Style;
  focused: Style;
  pressed: Style;
  _disabled: Style
}


export const IconButtonBase = styled('button')<BaseProps>(({ default: _default, hovered, focused, pressed, _disabled, size, theme }) => ({
  ..._default,
  '&:hover': {
    color: theme.palette.neutral[70],
  },
  '&:focus': {
    outline: `2px solid ${focused.outline}`,
    outlineOffset: '-4px',
    border: `2px solid ${focused.border}`
  },
  '&.pressed': {
    background: pressed.background,
  },
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: '0',
  gap: '4px',
  padding: `${size === 'md' ? 6 : 8}px`,
  borderRadius: '5em',
  cursor: 'pointer',
  '& svg': {
    alignSelf: 'center',
    pointerEvents: 'none',
    height: `${size === 'md' ? 28 : 36}px`,
    width: `${size === 'md' ? 28 : 36}px`,
  }
}))

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon_,
  size = 'md',
  color = 'primary',
  variant = 'filled',
  ...props
}) => {

  const Icon = typeof Icon_ === 'string'
    ? dynamic<SVGProps<SVGSVGElement>>(() => import(`/public/assets/icons/${Icon_}.svg`))
    : ({ ...props }) => <Icon_ {...props} />;
  const styles = getAttrs(color, variant);

  return (
    <IconButtonBase {...styles} size={size} {...props}>
      <Icon />
    </IconButtonBase>
  )
};

export default IconButton;