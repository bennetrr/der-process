import React from "react";
import styles from "../styles/Page.module.scss";

import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Historischer Kontext | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <div className={styles.page_content} style={{background: '#1a1a1a'}}>
                <h1>Entstehungskontext</h1>
            </div>
        </div>
    );
}
