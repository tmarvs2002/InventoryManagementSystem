

export function hexToRgb(hex: string): string {
    const cleanHex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b);
    return cleanHex
        ? 'rgb(' + cleanHex.substring(1).match(/.{2}/g)?.map(x => parseInt(x, 16)).join(',') + ')'
        : ''
}

export default function paletteOpacity(color: string, opacity: number): string{
    const _opacity = Math.min(Math.max(0, opacity), 1);
    const rgbString = color.includes('#') ? hexToRgb(color) : color;
    return rgbString.replace(')', `, ${_opacity})`).replace('rgb', 'rgba');
}