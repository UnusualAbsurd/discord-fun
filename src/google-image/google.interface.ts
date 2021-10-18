export interface GoogleInt {
    message: object,
    slash: boolean,
    api?: {
        cx: string,
        key: string
    }
    query: string,
    embed?: {
        color?: string
    },
}