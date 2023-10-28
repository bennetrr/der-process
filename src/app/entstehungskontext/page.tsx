import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";
import {BackgroundImage} from "$/components/Images";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Entstehungskontext | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <BackgroundImage uri={"/img/Der_Process_Manuskript.png"}
                             desc={"Die erste Seite des Manuskriptes zu Der Process"}/>
            <Header/>

            <div className={styles.pageContent}>
                <div className={styles.textOnlyContent}>
                    <h1>Entstehungskontext</h1>
                    <ul>
                        <li>
                            <b>Ereignisse im Leben Kafkas:</b>
                            <p className={styles.seamlessParagraph}>
                                Kafka fängt im Sommer 1914 an, den Roman <i> Der Process </i> zu schreiben. Im Juli 1914
                                fand die Auflösung
                                der Verlobung mit Felice Bauer statt, die den Roman maßgeblich prägte (siehe
                                biografischer Interpretationsansatz). Außerdem wohnte Kafka ab Herbst das erste Mal
                                unabhängig von seinen Eltern.
                            </p>
                        </li>
                        <li>
                            <b>1. Weltkrieg:</b>
                            <p className={styles.seamlessParagraph}>
                                Am 28. Juli 1914 erklärte Österreich-Ungarn Serbien den Krieg, aus dem der Erste
                                Weltkrieg wurde. Kafka wurde wegen seiner wichtigen beruflichen Stellung im Gegensatz zu
                                vielen anderen nicht eingezogen, was zu seiner Isolation beigetragen hat.
                            </p>
                        </li>
                        <li>
                            <b>Fragment:</b>
                            <p className={styles.seamlessParagraph}>
                                Nach ein paar Monaten zog Kafka andere Werke dem Roman vor. Ab dann schrieb Kafka <i>Der
                                Process</i> nicht-linear. Als Erstes wurden Anfangs- und Schlusskapitel geschrieben, an
                                den anderen Kapiteln wurde parallel weitergearbeitet. Deshalb schrieb Kafka die Kapitel
                                von <i>Der Process</i> auch in Hefte, in denen er auch andere Texte schrieb. Kafka legte
                                keine bestimmte Reihenfolge der Kapitel fest, weshalb es mehrere Ausgaben mit
                                unterschiedlichen Aufteilungen und Reihenfolgen gibt. Anfang 1915 brach Kafka die
                                Arbeiten endgültig ab und ließ mehrere Kapitel unvollständig, die in manchen Ausgaben
                                als Fragmente angehangen sind.
                            </p>
                        </li>
                        <li>
                            <b>Postum veröffentlicht:</b>
                            <p className={styles.seamlessParagraph}>
                                Der Roman wurde ein Jahr nach Kafkas Tod von seinem Freund Max Brod veröffentlicht,
                                obwohl Kafka in seinem Testament verlangte, die Manuskripte zu verbrennen.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
