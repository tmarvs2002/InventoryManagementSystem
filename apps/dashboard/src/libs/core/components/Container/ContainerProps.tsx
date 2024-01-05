import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type horizontalAlign = 'left' | 'center' | 'right';
export type verticalAlign = 'top' | 'center' | 'bottom';
export type width = 'full' | '25%' | '33%' | 'half' | '66%' | '75%';

interface ContainerBaseProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    width?: width;
    direction?: 'row' | 'column';
    gap?: string;    
    horizontal?: horizontalAlign;
    vertical?: verticalAlign;
}

export type SetContainerProps = (newProps: Partial<ContainerBaseProps>) => void;

export interface ContainerProps extends ContainerBaseProps {
    handleHover?: (setProps: SetContainerProps) => void;
}

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & 
    {[K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>}[Keys]



export default ContainerBaseProps
