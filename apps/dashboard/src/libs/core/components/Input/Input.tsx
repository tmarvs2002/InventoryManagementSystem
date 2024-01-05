'use client';

import React from "react";

import InputProps from "./InputProps";
import Typography from "../Typography";
import Container from "../Container";

import styled from "styled-components";



export const FieldGroup = styled(Container)({
    gap: '4px',
    marginBottom: '12px'
})

export const FieldLabel = styled('div')({

})

export const InputFieldRoot = styled('div')<{start?: string, end?: string}>(({ start, end }) => ({
    width: '100%',
    display: 'flex',
    position: 'relative',
    height: '40px',
    alignItems: 'center',
    alignSelf: 'stretch',
    'input': {
        paddingLeft: start ? '50px' : 'auto',
        paddingRight: end ? '50px' : 'auto',
    }
}));

export const InputField = styled('input')<InputProps>({
    display: 'flex',
    height: '100%',
    minWidth: '100%',
    position: 'relative',
    borderRadius: '8px',
    border: '2px solid var(--neutral-80, #C6C6C9)',
    padding: '0 10px',
    background: 'transparent',
    color: '#FFFFFF'
})

export const InputDecorator = styled('div')<{ position: 'start' | 'end' }>(({ position }) => ({
    ...(position === 'start' ? {left: '15px'} : {right: '15px'}),
    position: 'absolute',
    height: '20px',
    top: 'calc(50% - 10px)',
}))


export const FieldError = styled('div')({

})




export const Input: React.FC<InputProps> = ({ fieldname, label, helperText, errorMessage, isValid, startDecorator, endDecorator, ...props }) => {

  return (
    <FieldGroup direction="column" width="full" horizontal="left">
        <FieldLabel>
            <Typography variant='bodyStrong' size="lg">{label}</Typography>
        </FieldLabel>
        <InputFieldRoot start={startDecorator ? '1' : undefined} end={endDecorator ? '1' : undefined}>
            { startDecorator && <InputDecorator position="start">{startDecorator}</InputDecorator> }
            <InputField {...props} />
            { endDecorator && <InputDecorator position="end">{endDecorator}</InputDecorator> }
        </InputFieldRoot>
    </FieldGroup>
  )
}