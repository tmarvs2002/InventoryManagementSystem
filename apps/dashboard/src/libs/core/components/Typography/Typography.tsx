'use client';

import styled from "styled-components";
import TypographyProps from "./TypographyProps";
import { theme as defaultTheme } from '@core/theme';


function getTypographyAttrs({ size, variant }: TypographyProps) {
  const { sizes, ...rest } = defaultTheme.typography[variant];
  return { ...rest, ...sizes[size] };
}

const Typography = styled('div')<TypographyProps>(({ size, variant }) => ({
  fontFeatureSettings: `'clig' off, 'liga' off`,
  ...getTypographyAttrs({size: size, variant: variant}),
}))


export default Typography;