
import { theme } from "./theme";
import { ExtendedTheme, StateStyles, ColorSchemeStyles } from "./types/extendedTheme";

const palette = theme.palette;


const ColorScheme: ColorSchemeStyles = {
    primary: {
        default: {
            color: palette.common.light,
            background: palette.primary[50],
            border: 'none',
            outline: 'none',          
        },
        hovered: {
            color: palette.neutral[98],
            background: palette.primary[40],
        },
        focused: {
            color: palette.neutral[98],
            background: palette.primary[40],
        },
        pressed: {
            color: palette.common.light,
            background: palette.primary[50],
        },
        disabled: {
            background: palette.neutral[25],
            color: palette.neutral[60]
        }
    },
    light: {
        default: {
            color: palette.common.dark,
            background: palette.common.light,
            border: palette.common.dark
        },
        hovered: {
            color: palette.common.light,
            background: palette.common.dark,
        },
        focused: {
            color: palette.common.light,
            background: palette.common.dark,
            border: palette.common.light,
            outline: palette.common.dark,
        },
        pressed: {
            color: palette.neutral[10],
            background: palette.neutral[90],
        },
        disabled: {
            background: palette.neutral[25],
            color: palette.neutral[60]
        }
    },
    dark: {
        default: {
            color: palette.common.light,
            background: palette.neutral[20],
            border: palette.common.light
        },
        hovered: {
            color: palette.common.dark,
            background: palette.common.light,
            border: palette.common.light,
        },
        focused: {
            color: palette.common.dark,
            background: palette.common.light,
            border: palette.common.dark,
            outline: palette.common.dark,
        },
        pressed: {
            color: palette.common.dark,
            background: palette.common.light,
            outline: palette.common.dark,
        },
        disabled: {
            background: palette.neutral[25],
            color: palette.neutral[60]
        }
    }
}



function filledVariant(colorVariant: StateStyles): StateStyles {
    const { default: _default, hovered, focused, disabled } = colorVariant;
    return {
        default: {
            color: _default.color,
            background: _default.background,
            border: 'none',
        },
        hovered: {
            background: hovered.background,
            color: hovered.color,
        },
        focused: {
            background: focused.background,
            color: focused.color,
            outline: focused.outline,
        },
        pressed: {},
        disabled: {
            background: disabled.background,
            color: disabled.color
        }
    }
}
function outlinedVariant(colorVariant: StateStyles): StateStyles {
    const { default: _default, disabled } = colorVariant;
    return {
        default: {
            color: _default.color,
            border: `2px solid ${_default.border}`,
            background: 'transparent',
        },
        hovered: {
            border: '2px solid transparent'
        },
        focused: {},
        pressed: {
            border: '2px solid transparent'
        },
        disabled: {
            border: disabled.border,
            color: disabled.color
        }
    }
}

function textVariant(colorVariant: StateStyles): StateStyles {
    const { default: _default, hovered, focused, pressed, disabled } = colorVariant;

    return {
        default: {
            color: _default.color,
            border: `solid 2px transparent`,
            background: 'transparent',
        },
        hovered: {
            border: `solid 2px ${hovered.border}`,
        },
        focused: {
            background: focused.background,
            color: focused.color,
            outline: `solid 2px ${focused.outline}`,
            outlineOffset: '-4px',
        },
        pressed: {
            background: pressed.background,
            color: pressed.color,
            outline: `solid 2px ${pressed.outline}`,
            outlineOffset: '-4px',
        },
        disabled: {
            color: disabled.color,
            background: disabled.background,
            borderColor: 'transparent',
            outline: `solid 2px ${pressed.outline}`,
            outlineOffset: '-4px',            
        }
    }
}

export const extendedTheme: ExtendedTheme = {
    ...theme,
    colorSchemes: ColorScheme,
    styleVariants: {
        filled: filledVariant,
        outlined: outlinedVariant,
        text: textVariant
    },
}