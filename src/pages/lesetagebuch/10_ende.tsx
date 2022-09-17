import React from "react";
import styles from "../../styles/Page.module.scss";

import Head from "next/head";
import Header from "../../components/Header";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lesetagebuch: Kap. 10 | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <div className={styles.page_content} style={{background: '#1a1a1a'}}>
                <div className={styles.text_only_content}>
                    <h1>Kapitel 10: Ende</h1>
                    <h2>Inhaltswiedergabe</h2>
                    <p>
                        An K.&apos;s 31. Geburtstag, genau ein Jahr nach dem Start des Prozesses, kommen zwei Beamte
                        Abends in seine Wohnung und schleppen ihn auf ein Feld außerhalb der Stadt. K. hatte den Besuch
                        schon erwartet, denn er saß voll angezogen in seinem Zimmer. Auf dem Feld wird K. umgebracht,
                        indem ihm ein Messer ins Herz gestochen wird.
                    </p>

                    <h2>Personen</h2>
                    <ul>
                        <li>Josef K.</li>
                        <li>2 Strafvollzieher</li>
                    </ul>

                    <h2>Orte</h2>
                    <p>
                        Das Kapitel spielt am Anfang in K.&apos;s Wohnung und später auf einem Feld bei einem Steinbruch
                        abseits der Stadt.
                    </p>
                </div>
            </div>
        </div>
    );
}
