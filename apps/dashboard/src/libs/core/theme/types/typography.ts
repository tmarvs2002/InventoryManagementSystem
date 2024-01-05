

interface SizeVariant {
    fontSize: string;
    letterSpacing: string;
}

interface TypographySize {
    xs: SizeVariant;
    sm: SizeVariant;
    md: SizeVariant;
    lg: SizeVariant;
    xl: SizeVariant;     
}

interface DefaultScheme {
    lineHeight: string;
    fontWeight: string;
    fontFamily: string;   
    sizes: TypographySize; 
}

interface ThemeTypography {
    display: DefaultScheme;
    headline: DefaultScheme;
    title: DefaultScheme;
    body: DefaultScheme;
    bodyStrong: DefaultScheme;
}

export type TypographyVariant = keyof ThemeTypography;
export default ThemeTypography;