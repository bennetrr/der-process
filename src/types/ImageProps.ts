export interface BackgroundImageProps {
    uri: string
    desc: string
}

export interface ImageProps {
    uri: string
    desc: string
    originalWidth?: number
    originalHeight?: number
    width: number | "auto"
    height: number | "auto"
}

export interface calculatedImageSizes {
    width: number
    height: number
}