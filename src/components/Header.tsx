import React from "react";
import styles from "../styles/Header.module.scss";

import MenuEntry from "./MenuEntry";
import { faHome, faInfo } from "@fortawesome/free-solid-svg-icons";

function MenuProductEntry() {
    return (
        <div className={styles.menuItemNonInteractive}>
            <span className={styles.menuProductEntryTextLine2}><b>Der Process</b></span>
        </div>
    )
}

export default function Header() {
    return (
        <div className={styles.header}>
            <MenuProductEntry/>
            <MenuEntry link={"/"} icon={faHome}/>
            <MenuEntry text={"Biografie"} link={"/biografie"}/>
            <MenuEntry text={"Historischer Kontext"} link={"/historischer-kontext"}/>
            <MenuEntry text={"Kapitelübersicht"} link={"/kapiteluebersicht"}/>
            <MenuEntry text={"Figurentableau"} link={"/figuren"}/>
            <MenuEntry text={"Themen"} link={"/themen"}/>
            <MenuEntry text={"Interpretationsansätze"} link={"/interpretationsansaetze"}/>

            <div className={styles.leftRightSep}/>
            <MenuEntry link={"/about"} icon={faInfo}/>
        </div>
    );
}
