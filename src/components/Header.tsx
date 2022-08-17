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
            <MenuEntry text={"Franz Kafka"} link={"/autor"}/>
            <MenuEntry text={"Historischer Kontext"} link={"/historischer-kontext"}/>
            <MenuEntry text={"Kapitelübersicht"} link={"/kapitelübersicht"}/>
            <MenuEntry text={"Inhaltswiedergabe"} link={"/inhalt"}/>
            <MenuEntry text={"Figurentableau"} link={"/figuren"}/>
            <MenuEntry text={"Sprachliche Mittel"} link={"/sprachliche-mittel"}/>
            <MenuEntry text={"Themen"} link={"/themen"}/>
            <MenuEntry text={"Lesetagebuch"} link={"/lesetagebuch"}/>
            <MenuEntry text={"Interpretationsansätze"} link={"/interpretationsansätze"}/>

            <div className={styles.leftRightSep}/>
            <MenuEntry link={"/about"} icon={faInfo}/>
        </div>
    );
}
