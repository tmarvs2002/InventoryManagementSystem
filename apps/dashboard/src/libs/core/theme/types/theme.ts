import ThemePalette from "./palette";
import ThemeBreakpoints from "./breakpoints";
import ThemeShadows from "./shadows";
import ThemeTypography from "./typography";
import ThemeParagraphs from "./paragraphs";



export interface Theme {
    name: string;
    palette: ThemePalette;
    breakpoints: ThemeBreakpoints;
    shadows: ThemeShadows;
    typography: ThemeTypography;
    paragraphs: ThemeParagraphs;
};