import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";
import {Image} from "$/components/Images";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Interpretationsansätze | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <Header/>

            <div className={styles.pageContentGray}>
                <div className={styles.textOnlyContent}>
                    <h1>Interpretationsansätze</h1>
                    <h2>Biografischer Ansatz</h2>
                    <ul>
                        <li>Viele Anspielungen und Bezüge auf Kafkas Leben</li>
                        <li>Autorität und Willkür des Gerichts ≙ Symbol für das Verhältnis Kafka / Vater</li>
                        <li>K.&apos;s Onkel ≙ Kafkas Vater</li>
                        <li>Auflösung der Verlobung mit Felice Bauer = Gerichtsprozess für Kafka
                            <ul>
                                <li>Gerichtssaal auf dem Dachboden ≙ Hotelzimmer</li>
                                <li>Bedrückende Atmosphäre (&quot;Schlechte Gerüche&quot;)</li>
                                <li>Verhöre</li>
                                <li>Schuldig ohne Aktion</li>
                            </ul></li>
                        <li>Der Name &quot;Josef K.&quot;
                            <ul>
                                <li>K. lässt auf Kafka schließen</li>
                                <li>Josef ist der Name des damaligen Kaisers von Österreich, Franz Joseph I.</li>
                                <li>Die Namen Josef und Franz wurden als Synonym verwendet, sodass Leser bei Josef K.
                                    aus an Franz K. gedacht haben
                                </li>
                            </ul>
                        </li>
                        <li>Josef K. lebt zurückgezogen und hat kaum Kontakt zu seiner Familie, genauso wie Kafka nach
                            der Trennung
                        </li>
                        <li>Kafkas Beruf (Jurist bei einer Unfallversicherung) ist vergleichbar mit K.&apos;s (Prokurist
                            bei einer Bank)
                        </li>
                        <li>Die Initialen von Felice Bauer (F.B.) finden sich in Fräulein Bürstner wieder
                            <ul>
                                <li>Bürstner tritt in den ersten und dem letzten Kapitel auf ⇒ bildet einen Rahmen um
                                    die Handlung
                                </li>
                            </ul></li>
                        <li>&quot;Der Process&quot; kann auch ein psychologischer Verarbeitungsprozess sein, den Kafka
                            beim Schreiben widerfährt
                        </li>
                        <li>Erneute Verlobung / Trennung mit Felice ≙ K.&apos;s wiederholtes scheitern, einen Ausweg aus
                            dem Prozess zu finden
                        </li>
                        <li>Verfassung der ersten Eingabe ≙ Verfassung des Prozesses
                            <ul>
                                <li>Kapitel &quot;Im Dom&quot;: K. merkt, der Prozess geht schlecht voran ≙ Kafka merkt,
                                    er kann den Roman nicht fertigstellen
                                </li>
                            </ul></li>
                    </ul>
                    <h2>Tiefenpsychologischer Ansatz (nach Freud)</h2>
                    <ul>
                        <li>Neurotische Störungen</li>
                        <div style={{margin: "10px 0px"}}>
                            <Image uri={"/img/Es_Ich_Ueber_Ich.drawio.svg"}
                                   alt={"Strukturmodell der Psyche von Sigmund Freud"} width={700} height={"auto"}
                                   originalWidth={591} originalHeight={217}/>
                        </div>
                        <li>Wie in einer Traumwelt</li>
                        <li>Dunkelheit → Unterbewusstsein</li>
                    </ul>
                    <h2>Religiöser Ansatz</h2>
                    <ul>
                        <li>K.&apos;s Schuld als Erbsünde</li>
                        <li>Gericht als göttliche Instanz</li>
                        <li>Unbestimmte Schuld / Schuldbewusstsein</li>
                        <li>Beziehung zu Gott</li>
                        <li>Bilderwelt der Kabbala
                            <ul>
                                <li>Ununterbrochen tagende himmlische Gerichte</li>
                            </ul></li>
                    </ul>
                    <h2>Roman der Moderne</h2>
                    <ul>
                        <li>Beginn 20. Jahrhundert</li>
                        <li>&quot;Moderne in voller Entfaltung&quot; (gewohnte Lebenskonzepte werden infrage gestellt)
                        </li>
                        <li>Theologische Erklärungsmodelle werden zunehmend abgelehnt</li>
                        <li>Ablehnung christlicher Moral (Nietzsche: &quot;Gott ist tot!&quot;)</li>
                        <li>Gesellschaftliche Veränderungen</li>
                        <li>Industrialisierung → Großstädte</li>
                        <li>Veränderte Rolle der Frau</li>
                        <li>Gericht als überdimensionaler / hierarchischer undurchschaubarer Apparat, in dem sich die
                            Menschen nicht zurechtfinden
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
