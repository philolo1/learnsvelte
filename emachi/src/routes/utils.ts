export function getEmojiUrl(emoji: string): string {
    const code = [...emoji].map(char => char.codePointAt(0)!.toString(16)).join('-');
    return `/mysvg/${code}.svg`;
}