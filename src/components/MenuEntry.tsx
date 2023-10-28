"use client";
import React from "react";
import styles from "$/styles/Header.module.scss";
import MenuEntryProps from "$/types/MenuEntryProps";

import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {usePathname} from "next/navigation";

export default function MenuEntry({text, icon, link, matchBases}: MenuEntryProps) {
    if (text === undefined && icon === undefined)
        throw new Error("MenuEntry: text or icon (or both) must be given!");

    // Check if this route is active
    const pathName = usePathname();
    let styleName;

    if (pathName == link) styleName = styles.itemActive;
    else if ((matchBases || []).includes(pathName.split("/")[1])) styleName = styles.itemActiveChild;
    else styleName = styles.item;

    return (
        <Link href={link}>
            <div className={styleName}>
                {icon === undefined ? <></> : <FontAwesomeIcon icon={icon} className={styles.menuItemIcon}/>}
                {text === undefined ? <></> : <span className={styles.itemText}>{text}</span>}
            </div>
        </Link>
    );
}
