export interface BackgroundImageProps {
    uri: string;
    desc: string;
}

export interface bgImgProps extends BackgroundImageProps {
    filterClassName: string;
}

export interface ImageProps {
    uri: string;
    alt: string;
    originalWidth?: number;
    originalHeight?: number;
    width: number | "auto";
    height: number | "auto";
}

export interface calculatedImageSizes {
    width: number;
    height: number;
}
