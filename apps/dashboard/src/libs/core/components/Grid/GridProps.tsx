import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface GridBaseProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    rows?: number | 'auto';
    columns?: number | 'auto';
    gap?: string;
}

export default GridBaseProps
