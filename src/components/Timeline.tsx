import React from "react";
import styles from "$/styles/Timeline.module.scss";
import {TimelineItemImageProps, TimelineItemProps, TimelineProps} from "$/types/TimelineProps";

import {Image} from "./Images";
import {calculateImageSizes} from "$/utils/CalculateImageSizes";

export default function Timeline({children}: TimelineProps) {
    return (
        <div className={styles.container}>
            <div className={styles.line}/>
            <div className={styles.timeline_items}>
                {children}
            </div>
        </div>
    );
}

export function TimelineItem({date, children, image}: TimelineItemProps) {
    return (
        <div className={styles.item}>
            {image !== undefined ? <TimelineImage image={image}/> : <></>}
            <div className={styles.text}>
                <span className={styles.date}>{date}</span>
                <p>
                    {children}
                </p>
            </div>
        </div>
    );
}

export function TimelineImage({image: {uri, alt, width, height, originalWidth, originalHeight}}: TimelineItemImageProps) {
    const {width: calculatedWidth} = calculateImageSizes(width, height, originalWidth, originalHeight);

    return (
        <div className={styles.image} style={{width: calculatedWidth}}>
            <Image uri={uri} alt={alt} width={width} height={height} originalWidth={originalWidth}
                   originalHeight={originalHeight}/>
            <br/>
            <span className={styles.imageDescription}>{alt}</span>
        </div>
    );
}
