import React from "react";
import styles from "../styles/Timeline.module.scss";
import { TimelineItemProps, TimelineProps } from "../types/TimelineProps";

export default function Timeline({ children, width }: TimelineProps) {
    return (
        <div className={styles.timeline_container} style={{width: width}}>
            <div className={styles.timeline_line} />
            <div className={styles.timeline_items}>
                {children}
            </div>
        </div>
    );
}

export function TimelineItem({date, children, image}: TimelineItemProps) {
    return (
        <div className={styles.timeline_item}>
            <span className={styles.date}>{date}</span>
            <div className={styles.timeline_text}>
                <p>
                    {children}
                </p>
            </div>
        </div>
    );
}