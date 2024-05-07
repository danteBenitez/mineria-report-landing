export function capitalize(str: string) {
    return str.replace('_', ' ').split(' ').filter(s => s != "").map(s => s[0].toUpperCase() + s.slice(1)).join(' ');
}