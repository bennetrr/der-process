import React from "react";
import styles from "../styles/Page.module.scss";
import { BackgroundImageProps, ImageProps } from "../types/ImageProps";

import { default as NextImage } from "next/image";
import { calculateImageSizes } from "../utils/CalculateImageSizes";

export function BackgroundImage({uri, desc}: BackgroundImageProps) {
    return (
        <>
            <div className={styles.backgroundImageFilter}/>
            <div className={styles.backgroundImage}>
                <NextImage src={uri} alt={desc} layout={"fill"} objectFit={"cover"} quality={100}/>
            </div>
        </>
    )
}

export function BackgroundImageColor({uri, desc}: BackgroundImageProps) {
    return (
        <>
            <div className={styles.backgroundImageFilterColor}/>
            <div className={styles.backgroundImage}>
                <NextImage src={uri} alt={desc} layout={"fill"} objectFit={"cover"} quality={100}/>
            </div>
        </>
    )
}

export function Image({uri, alt, height, width, originalWidth, originalHeight}: ImageProps) {
    const {
        width: calculatedWidth,
        height: calculatedHeight
    } = calculateImageSizes(width, height, originalWidth, originalHeight);

    return <NextImage src={uri} alt={alt} width={calculatedWidth} height={calculatedHeight}/>;
}