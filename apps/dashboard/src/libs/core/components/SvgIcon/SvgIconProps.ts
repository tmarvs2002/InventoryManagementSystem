import { DetailedHTMLProps, HTMLAttributes, SVGProps, FC } from 'react';

interface SvgIconProps extends Omit<DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement>, 'ref'> {
    icon: string | FC<SVGProps<SVGSVGElement>>;
    size: number;
}

export default SvgIconProps;