import React from "react";
import genericStyles from "../styles/Page.module.scss";
import styles from "../styles/About.module.scss"

import Head from "next/head";
import Header from "../components/Header";
import { Image } from "../components/Images";
import ClearLink from "../components/ClearLink";

export default function Home() {
    return (
        <div className={genericStyles.container}>
            <Head>
                <title>Info | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <div className={styles.pageContent}>
                <div className={styles.aboutContainer}>
                    <h1>Über diese Website</h1>
                    <p>
                        Erstellt von Bennet Ranft im Rahmen eines Schulprojektes.
                    </p>
                    <p>
                        Der Source Code dieses Projekts ist auf GitHub verfügbar und steht unter der GNU General Public
                        License v3.0. Den Lizenztext finden Sie im GitHub-Repository.
                    </p>
                    <a href="https://github.com/bennetrr/kafka-der-process" className={styles.GitHubLink} target={"_blank"} rel="noreferrer">
                        <Image uri={"/img/GitHub-Mark-Light-120px-plus.png"} alt={"GitHub Logo"} height={50} width={"auto"} originalWidth={120} originalHeight={120}/>
                        <span className={styles.GitHubLinkText}>Open the Project on GitHub</span>
                    </a>
                </div>
                <div className={styles.sourcesContainer}>
                    <h1>Quellen</h1>
                    <h2>Biografie</h2>
                    <h3>Textquellen</h3>
                    <ul>
                        <li><a href="https://github.com/bennetrr/kafka-der-process/blob/72894feec8dd0e6eddf6c66b0710ce8e23882bf5/material/1%20Kafka%20und%20Prag.pdf">bennetrr/kafka-der-process@72894f/material/1 Kafka und Prag.pdf</a></li>
                        <li><ClearLink>https://www.inhaltsangabe.de/autoren/kafka/</ClearLink></li>
                        <li><ClearLink>https://de.wikipedia.org/wiki/Franz_Kafka#Leben</ClearLink></li>
                    </ul>

                    <h3>Hintergrundbild</h3>
                    <p>
                        Geburtshaus Franz Kafkas<br/>
                        <ClearLink>https://commons.wikimedia.org/wiki/File:Geburtshaus_Kafkas.JPG</ClearLink><br/>
                        Autor: Christoph Radtke (via Wikimedia Commons)<br/>
                        Lizenz: <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>
                    </p>

                    <h3>Bilder</h3>
                    <ul>
                        <li>
                            Kafka im Alter von ca. 5 Jahren<br/>
                            <ClearLink>https://commons.wikimedia.org/wiki/File:Kafka5jahre.jpg</ClearLink><br/>
                            Autor: Atelier Moritz Klempfner (via Wikimedia Commons); Leicht verändert<br/>
                            Lizenz: Gemeinfrei
                        </li><br/>

                        <li>
                            Kafka als Schüler (vor 1900)<br/>
                            <ClearLink>https://commons.wikimedia.org/wiki/File:Kafka-as-pupil.jpg</ClearLink><br/>
                            Autor: Unbekannt (via Wikimedia Commons); Leicht verändert<br/>
                            Lizenz: Gemeinfrei
                        </li><br/>

                        <li>
                            Franz Kafka und Felice Bauer (1917)<br/>
                            <a href="https://github.com/bennetrr/kafka-der-process/blob/c7de0575a321e561e9d7cc60bfd25822c815a593/material/1%20Kafka%20und%20Prag.pdf">bennetrr/kafka-der-process@c7de05/material/1 Kafka und Prag.pdf</a><br/>
                            Autor: Unbekannt (via Schule)<br/>
                            Lizenz: Unbekannt
                        </li><br/>

                        <li>
                            Erste Seite von <i>Brief an den Vater</i><br/>
                            <ClearLink>https://commons.wikimedia.org/wiki/File:De_Kafka_Brief_an_den_Vater_001.jpg</ClearLink><br/>
                            Autor: Franz Kafka (via Wikimedia Commons)<br/>
                            Lizenz: Gemeinfrei
                        </li><br/>

                        <li>
                            Franz Kafkas Grab auf dem Neuen jüdischen Friedhof in Prag-Žižkov<br/>
                            <ClearLink>https://commons.wikimedia.org/wiki/File:Grab_von_franz_kafka.jpg</ClearLink><br/>
                            Autor: Nightwish62 (via Wikimedia Commons)<br/>
                            Lizenz: <a href="https://www.gnu.org/licenses/fdl-1.3.html">GNU FDL</a> und <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">CC BY-SA 3.0</a>
                        </li><br/>
                    </ul>

                    <h2>Textsprache</h2>
                    <h3>Hintergrundbild</h3>
                    <p>
                        Die erste Seite des Manuskriptes zu <i>Der Process</i><br/>
                        <ClearLink>https://commons.wikimedia.org/wiki/File:Kafka_process.png</ClearLink><br/>
                        Autor: Literaturarchiv Marbach (via Wikimedia Commons)<br/>
                        Lizenz: Gemeinfrei
                    </p>

                    <h2>Kapitelübersicht</h2>
                    <h3>Hintergrundbilder</h3>
                    <ul>
                        <li>
                            <b>Kapitel 1: Verhaftung</b><br/>
                            <i>Der Prozess</i> (Ausschnitt)<br/>
                            <ClearLink>https://deutsch.radio.cz/tschechische-buecher-die-sie-lesen-muessen-8683027/8#&gid=asset&pid=7</ClearLink><br/>
                            Autoren: Chantal Montellier und David Mairowitz<br/>
                            Erschienen in: BB art 2009<br/>
                            Lizenz: Unbekannt
                        </li><br/>
                    </ul>
                </div>
            </div>
        </div>
    );
}
