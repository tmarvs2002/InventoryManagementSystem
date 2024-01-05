'use client';

import styled from "styled-components";
import ParagraphProps from "./ParagraphProps";
import { theme as defaultTheme } from '@core/theme';


function getParagraphAttrs({ size, variant }: ParagraphProps) {
  const { sizes, ...rest } = defaultTheme.paragraphs[variant];
  return { ...rest, ...sizes[size] };
}

const Paragraph = styled('div')<ParagraphProps>(({ size, variant }) => ({
  fontFeatureSettings: `'clig' off, 'liga' off`,
  ...getParagraphAttrs({size: size, variant: variant}),
}))


export default Paragraph;