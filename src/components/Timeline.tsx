import React from "react";
import styles from "../styles/Timeline.module.scss";
import { TimelineItemImageProps, TimelineItemProps, TimelineProps } from "../types/TimelineProps";

import { calculateImageSizes, Image } from "./Images";

export default function Timeline({children, width}: TimelineProps) {
    return (
        <div className={styles.timeline_container} style={{width: width}}>
            <div className={styles.timeline_line}/>
            <div className={styles.timeline_items}>
                {children}
            </div>
        </div>
    );
}

export function TimelineItem({date, children, image}: TimelineItemProps) {
    return (
        <div className={styles.timeline_item}>
            {image !== undefined ? <TimelineImage image={image}/> : <></>}
            <div className={styles.timeline_text}>
                <span className={styles.date}>{date}</span>
                <p>
                    {children}
                </p>
            </div>
        </div>
    );
}

export function TimelineImage({image: {uri, alt, width, height, originalWidth, originalHeight}}: TimelineItemImageProps) {
    const {
        width: calculatedWidth
    } = calculateImageSizes(width, height, originalWidth, originalHeight);

    return (
        <div className={styles.timeline_image} style={{width: calculatedWidth}}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image uri={uri} alt={alt} width={width} height={height} originalWidth={originalWidth}
                   originalHeight={originalHeight}/>
            <br/>
            <span className={styles.timeline_image_desc}>{alt}</span>
        </div>
    )
}