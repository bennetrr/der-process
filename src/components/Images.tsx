import React from "react";
import styles from "$/styles/Page.module.scss";
import {BackgroundImageProps, bgImgProps, ImageProps} from "$/types/ImageProps";

import {default as NextImage} from "next/image";
import {calculateImageSizes} from "$/utils/CalculateImageSizes";

function bgImg({uri, desc, filterClassName}: bgImgProps) {
    return (
        <>
            <div className={filterClassName}/>
            <div className={styles.backgroundImage}>
                <NextImage src={uri} alt={desc} layout={"fill"} objectFit={"cover"} quality={100}/>
            </div>
        </>
    );
}

export function BackgroundImage({uri, desc}: BackgroundImageProps) {
    return bgImg({uri, desc, filterClassName: styles.backgroundImageFilterBW});
}

export function BackgroundImageColor({uri, desc}: BackgroundImageProps) {
    return bgImg({uri, desc, filterClassName: styles.backgroundImageFilterColor});
}

export function Image({uri, alt, height, width, originalWidth, originalHeight}: ImageProps) {
    const {
        width: calculatedWidth,
        height: calculatedHeight
    } = calculateImageSizes(width, height, originalWidth, originalHeight);

    return <NextImage src={uri} alt={alt} width={calculatedWidth} height={calculatedHeight}/>;
}
