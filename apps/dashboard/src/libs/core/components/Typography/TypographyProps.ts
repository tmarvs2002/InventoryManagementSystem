import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TypographyVariant } from '@core/theme';

interface TypographyProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, 'ref'> {
    variant: TypographyVariant;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}


export default TypographyProps
