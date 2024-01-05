
interface SizeVariant {
    fontSize: string;
    letterSpacing?: string;
    lineHeight?: string;
}

interface ParagraphSize {
    xs: SizeVariant;
    sm: SizeVariant;
    md: SizeVariant;
    lg: SizeVariant;
    xl: SizeVariant;     
}

interface DefaultScheme {
    fontWeight: string;
    fontFamily: string;  
    sizes: ParagraphSize;  
}


interface ThemeParagraphs {
    display: DefaultScheme;
    headline: DefaultScheme;
    title: DefaultScheme;
    body: DefaultScheme;
    bodyStrong: DefaultScheme;
}

export default ThemeParagraphs;