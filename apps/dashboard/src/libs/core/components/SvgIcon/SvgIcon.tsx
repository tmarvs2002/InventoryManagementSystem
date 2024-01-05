'use client';

import SvgIconProps from "./SvgIconProps";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { SVGProps } from "react";
import React from "react";


export const SvgIconBase = styled('div')({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: '0',
  gap: '4px',
  borderRadius: '1em',
})

const SvgIcon: React.FC<SvgIconProps> = ({
  icon: Icon_,
  size,
  ...props
}) => {
  const Icon = typeof Icon_ === 'string'
    ? dynamic<SVGProps<SVGSVGElement>>(() => import(`/public/assets/icons/${Icon_}.svg`))
    : ({...props}) => <Icon_ {...props}/>;

  const sizePx = `${size}px`;
  return (
    <SvgIconBase>
      <Icon width={sizePx} height={sizePx} {...props} />
    </SvgIconBase>
  )
};

export default SvgIcon;