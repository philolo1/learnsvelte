export interface Level {
    label: string;
    size: number;
    duration: number;
    emojis: string[];
}

export const levels: Level[] = [
    {
        label: 'easy',
        size: 4,
        duration: 1 * 60 * 1000,
        emojis: ["😄", "🌸", "🍕", "🎉", "🐳", "🌈", "🍦", "🔥"]
    }
]