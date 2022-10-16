import React from "react";
import styles from "../styles/Page.module.scss";

import Head from "next/head";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Inkompatibler Browser | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.pageContentIncompatible}>
                <h1>Inkompatibler Browser</h1>
                <h2>
                    Der Browser, den du gerade nutzt, ist veraltet und unterstützt wichtige Features dieser Website
                    nicht.
                </h2>
                <p>
                    Bitte aktualisiere diesen Browser oder benutze einen anderen, aktuelleren Browser!
                </p>
            </div>
        </div>
    );
}
