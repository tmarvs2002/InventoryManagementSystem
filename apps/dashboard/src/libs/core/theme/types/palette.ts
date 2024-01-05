interface PaletteColor {
    10: string;
    20: string;
    25: string;
    30: string;
    35: string;
    40: string;
    50: string;
    60: string;
    70: string;
    80: string;
    90: string;
    95: string;
    98: string;    
}


interface ThemePalette {
    primary: PaletteColor;
    secondary: PaletteColor;
    neutral: PaletteColor;
    red: PaletteColor;
    yellow: PaletteColor;
    green: PaletteColor;
    blue: PaletteColor;
    common: {
        dark: string;
        light: string;
    }
}

export default ThemePalette;