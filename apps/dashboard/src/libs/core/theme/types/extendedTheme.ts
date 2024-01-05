import { Theme } from "./theme";
import type { Properties, Pseudos } from 'csstype';

export type { TypographyVariant } from "./typography";
export type CSSProperties = Properties<string | number>;
export type CSSPseudos = { [K in Pseudos]?: Style };

export interface Style extends CSSProperties, CSSPseudos {
    [key: string]: Style | string | number | undefined;
}

export interface StateStyles {
    default: Style;
    hovered: Style;
    focused: Style;
    pressed: Style;
    disabled: Style;
}

export interface ColorSchemeStyles {
    primary: StateStyles;
    secondary?: StateStyles;
    danger?: StateStyles;
    warning?: StateStyles;
    info?: StateStyles;
    light: StateStyles;
    dark: StateStyles;
}


export type ColorVariant = keyof ColorSchemeStyles;
export type StateVariant = keyof StateStyles;
export type StyleVariant = 'filled' | 'outlined' | 'text';


export interface ExtendedTheme extends Theme {
    colorSchemes: ColorSchemeStyles;
    styleVariants: {    
        filled: (color: StateStyles) => StateStyles;
        outlined: (color: StateStyles) => StateStyles;
        text: (color: StateStyles) => StateStyles;
    }
}