import React from "react";
import styles from "../styles/Timeline.module.scss";
import { TimelineItemImageProps, TimelineItemProps, TimelineProps } from "../types/TimelineProps";
import Image from "next/future/image";

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
            {image?.align === 'left' ? <TimelineImage image={image}/> : <></>}
            <div className={styles.timeline_text}>
                <span className={styles.date}>{date}</span>
                <p>
                    {children}
                </p>
            </div>
            {image?.align === 'right' ? <TimelineImage image={image}/> : <></>}
        </div>
    );
}

export function TimelineImage({image: {uri, desc, align, height, width}}: TimelineItemImageProps) {
    return (
        <div className={styles.timeline_image} style={{width: width}}>
            <Image src={uri} alt={desc} width={width} height={height}/>
            <br/>
            <span className={styles.timeline_image_desc}>{desc}</span>
        </div>
    )
}