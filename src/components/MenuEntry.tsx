import React from "react";
import styles from "../styles/Header.module.scss";
import MenuEntryProps from "../types/MenuEntryProps";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export default function MenuEntry({text, icon, link}: MenuEntryProps) {
    if (text === undefined && icon === undefined)
        throw new Error("MenuEntry: text or icon (or both) must be given!");

    // Check if this route is active
    const router = useRouter();
    const styleName = (router.pathname == link) ? styles.menuItemActive : styles.menuItem;

    return (
        <Link href={link}>
            <div className={styleName}>
                {icon === undefined ? <></> : <FontAwesomeIcon icon={icon} className={styles.menuItemIcon}/>}
                {text === undefined ? <></> : <span className={styles.menuItemText}>{text}</span>}
            </div>
        </Link>
    );
}
