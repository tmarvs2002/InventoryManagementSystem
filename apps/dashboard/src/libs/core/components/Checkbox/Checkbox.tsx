'use client';

import styled from "styled-components";
import React from "react";

import { CheckboxProps } from "./CheckboxProps";
import Typography from "../Typography";

const CheckboxInput = styled('input')({
    width: '20px',
    height: '20px',

    '&:checked': {
        // backgroundImage: `url('/assets/icons/on.png')`,        
    },
})


const CheckboxContainer = styled('div')({
  display: 'flex',
  minWidth: '100%',
  alignItems: 'center',
  justifyContent: 'left',
  gap: '16px',
  margin: '12px 0'
})


const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {

  return (
    <CheckboxContainer>
        <CheckboxInput {...props} type="checkbox" />
        <Typography variant='bodyStrong' size="lg">{label}</Typography>
    </CheckboxContainer>
  )
}

export default Checkbox;