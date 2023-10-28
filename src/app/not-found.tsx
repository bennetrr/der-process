import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>404: Not found | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <Header/>
            <div className={styles.pageContent404}>
                <h1>404 - Ressource not found</h1>
                <h2>
                    Wir wissen nicht, wie du hierher gefunden hast, aber normalerweise solltest du das hier nicht sehen.
                </h2>
                <p>
                    Wenn du meinst, das der Fehler an uns liegt, erstelle gerne einen Fehlerbericht:<br/>
                    <a href="https://github.com/bennetrr/der-process/issues/new?labels=44x">
                        bennetrr/der-process (Issues)
                    </a>
                </p>
            </div>
        </div>
    );
}
