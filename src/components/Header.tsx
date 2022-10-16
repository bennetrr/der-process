import React, {useEffect} from "react";
import styles from "../styles/Header.module.scss";

import MenuEntry from "./MenuEntry";
import {faHome, faInfo} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import isBrowserCompatible from "../utils/CheckBrowserCompatibility";

function AppName() {
    return (
        <div className={styles.itemNonInteractive}>
            <span className={styles.appName}><b>Der Process</b></span>
        </div>
    );
}

export default function Header() {
    const router = useRouter();

    useEffect(() => {
        if (isBrowserCompatible()) return;
        if (router.pathname == "/incompatible") return;
        void router.push("/incompatible");
    });

    return (
        <div className={styles.header}>
            <AppName/>
            <MenuEntry link={"/"} icon={faHome}/>
            <MenuEntry text={"Biografie"} link={"/biografie"}/>
            <MenuEntry text={"Entstehungskontext"} link={"/entstehungskontext"}/>
            <MenuEntry text={"Kapitelübersicht"} link={"/kapiteluebersicht"} matchBases={["lesetagebuch"]}/>
            <MenuEntry text={"Figurentableau"} link={"/figuren"}/>
            <MenuEntry text={"Themen"} link={"/themen"}/>
            <MenuEntry text={"Textsprache"} link={"/textsprache"}/>
            <MenuEntry text={"Interpretationsansätze"} link={"/interpretationsansaetze"}/>

            <div className={styles.leftRightSep}/>
            <MenuEntry link={"/about"} icon={faInfo}/>
        </div>
    );
}
