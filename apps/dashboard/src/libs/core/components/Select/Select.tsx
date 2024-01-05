'use client';

import React from "react";
import { OptionTypeBase } from "./SelectProps";
import Typography from "../Typography";
import Container from "../Container";
import BaseSelect, { Props, StylesConfig } from 'react-select';
import styled from "styled-components";



export const FieldGroup = styled(Container)({
    gap: '4px',
    fontFeatureSettings: `'clig' off,'liga' off`,
    lineHeight: '140%',
    fontWeight: 700,
    fontFamily: `'Inter',sans-serif`,
    fontSize: '16px',
})


export const FieldLabel = styled('div')({})

const applyStyles = <OptionType extends OptionTypeBase, IsMulti extends boolean>(
    selectStyles?: StylesConfig<OptionType, IsMulti>
): StylesConfig<OptionType, IsMulti> => ({
    ...selectStyles,
    container: (styles: any) => ({
        ...styles,
        width: '100%',
    }),
    input: (styles: any) => ({
        ...styles,
        color: '#FFFFFF'
    }),
    control: (styles: any) => ({
        ...styles,
        display: 'flex',
        height: '100%',
        width: '100%',
        borderRadius: '8px',
        border: '2px solid var(--neutral-80, #C6C6C9)',
        padding: '3px 10px',
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'left',
        color: 'red'
    }),
    singleValue: (styles: any) => ({
        ...styles,
        color: '#FFFFFF'
    }),
    option: (styles: { [x: string]: any; }, { isDisabled, isFocused, isSelected }: any) => ({
        ...styles,
        backgroundColor: isDisabled
            ? undefined
            : isSelected
                ? '#009AFF'
                : isFocused
                    ? '#74b9ff'
                    : undefined,
        color: isDisabled
            ? '#ccc'
            : isFocused
                ? '#FFFFFF'
                : isSelected
                    ? '#FFFFFF'
                    : '#2d3436',
        cursor: isDisabled ? 'not-allowed' : 'pointer',

        ':active': {
            ...styles[':active'],
            backgroundColor: !isDisabled
                ? isSelected
                    ? '#0984e3'
                    : '#0984e3'
                : '#dfe6e9',
        },
    })
})



export const Select = <OptionType extends OptionTypeBase = { label: string; value: string }, IsMulti extends boolean = false>({ title, styles, ...props }: Props<OptionType, IsMulti> & { title?: string; }): JSX.Element => (
    <FieldGroup direction="column" width="full" horizontal="left">
        <FieldLabel>
            <Typography variant='bodyStrong' size="lg">{title}</Typography>
        </FieldLabel>
        <BaseSelect styles={applyStyles(styles)} {...props} />
    </FieldGroup>
);


export default Select