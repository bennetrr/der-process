import React from "react";
import styles from "../styles/Header.module.scss";

import MenuEntry from "./MenuEntry";
import { faHome, faInfo } from "@fortawesome/free-solid-svg-icons";

function MenuProductEntry() {
    return (
        <div className={styles.menuItemNonInteractive}>
            <span className={styles.menuProductEntryTextLine1}>Franz Kafka</span><br/>
            <span className={styles.menuProductEntryTextLine2}><b>Der Process</b></span> <br/>
            <span className={styles.menuProductEntryTextLine3}>Lesetagebuch</span><br/>
        </div>
    )
}

export default function Header() {
    return (
        <div className={styles.header}>
            <MenuProductEntry/>
            <MenuEntry link={"/"} icon={faHome}/>
            <MenuEntry text={"Franz Kafka"} link={"/autor"}/>

            <div className={styles.leftRightSep}/>
            <MenuEntry link={"/about"} icon={faInfo}/>
        </div>
    );
}
