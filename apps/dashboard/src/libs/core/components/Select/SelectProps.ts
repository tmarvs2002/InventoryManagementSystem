import { Props } from 'react-select';
import { SingleValue } from 'react-select';

export type Option = { label?: string; value?: string };
export type NewOption = SingleValue<Option>

export interface OptionTypeBase {
    [key: string]: any;
}

export interface SelectProps extends Props { 
    title: string;
}

export interface OptionType {
    value: string | number;
    label: string;
    isDisabled?: boolean;
}