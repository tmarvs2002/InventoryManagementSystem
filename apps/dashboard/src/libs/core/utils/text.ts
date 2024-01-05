

export function capitilise(entry: string): string {
    const split = entry.split(' ');
    return split.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
}