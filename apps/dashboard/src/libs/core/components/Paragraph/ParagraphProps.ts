import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TypographyVariant } from '@core/theme/types/extendedTheme';

interface ParagraphProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, 'ref'> {
    variant: TypographyVariant;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}


export default ParagraphProps
