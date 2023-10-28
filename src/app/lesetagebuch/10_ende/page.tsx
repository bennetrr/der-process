import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";
import {BackgroundImage} from "$/components/Images";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lesetagebuch: Kap. 10 | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <BackgroundImage uri={"/img/kapiteluebersicht/Kap10_Zeichnung.jpg"} desc={"Zeichnung fon K.'s Entführung"}/>
            <Header/>

            <div className={styles.pageContent}>
                <div className={styles.textOnlyContent}>
                    <h1>Kapitel 10: Ende</h1>
                    <h2>Inhaltswiedergabe</h2>
                    <p>
                        An K.&apos;s 31. Geburtstag, genau ein Jahr nach dem Start des Prozesses, kommen zwei Beamte
                        abends in seine Wohnung und schleppen ihn auf ein Feld außerhalb der Stadt. K. hatte den Besuch
                        schon erwartet und saß voll angezogen in seinem Zimmer. Auf dem Feld wird K. umgebracht,
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
                    <h2>Gedanken / Fragen / Eindrücke / Widersprüche</h2>
                    <ul>
                        <li>Es bleibt offen, was man K. vorwirft.</li>
                        <li>Mit welcher Begründung wird die Todesstrafe vollstreckt?</li>
                        <li>Stand der Ausgang des Prozesses für alle außer K. von Anfang an fest?</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
