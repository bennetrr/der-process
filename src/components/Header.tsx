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
            <MenuEntry text={"Entstehungskontext"} link={"/entstehungskontext"}/>
            <MenuEntry text={"Kapitelübersicht"} link={"/kapiteluebersicht"} matchBases={["lesetagebuch"]}/>
            <MenuEntry text={"Figurentableau"} link={"/figuren/overview"} matchBases={["figuren"]}/>
            <MenuEntry text={"Themen"} link={"/themen"}/>
            <MenuEntry text={"Textsprache"} link={"/textsprache"}/>
            <MenuEntry text={"Interpretationsansätze"} link={"/interpretationsansaetze"}/>

            <div className={styles.leftRightSep}/>
            <MenuEntry link={"/about"} icon={faInfo}/>
        </div>
    );
}
