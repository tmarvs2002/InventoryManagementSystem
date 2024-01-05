import { ColorVariant, StyleVariant, extendedTheme } from '../theme';

export function defaultStyles(color: ColorVariant, variant: StyleVariant) {
    const _color = extendedTheme.colorSchemes[color] || extendedTheme.colorSchemes['primary'];
    const getVariant = extendedTheme.styleVariants[variant];
    const style = getVariant(_color);
    
    return {
        ...style.default,
        '&:hover': style.hovered,
        '&:focus': style.focused,
        '&.pressed': style.pressed,
        '&.disabled': style.disabled,
    };
}

export function getAttrs(color: ColorVariant, variant: StyleVariant) {
    const _color = extendedTheme.colorSchemes[color] || extendedTheme.colorSchemes['primary'];
    const getVariant = extendedTheme.styleVariants[variant];
    const {disabled, ...style} = getVariant(_color);
    return {
        ...style,
        _disabled: disabled,
    }
}