import React from "react";
import genericStyles from "../styles/Page.module.scss";
import styles from "../styles/About.module.scss"

import Head from "next/head";
import Header from "../components/Header";
import { Image } from "../components/images";

export default function Home() {
    return (
        <div className={genericStyles.container}>
            <Head>
                <title>Info | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <div className={styles.pageContent} style={{background: '#1a1a1a'}}>
                <div className={styles.aboutContainer}>
                    <h1>Über diese Website</h1>
                    <p>
                        Erstellt von Bennet Ranft im Rahmen eines Schulprojektes.
                    </p>
                    <p>
                        Der Source Code dieses Projekts ist auf GitHub verfügbar und steht unter der GNU General Public
                        License v3.0. Den Lizenztext finden Sie auch im GitHub-Repository.
                    </p>
                    <a href="https://github.com/bennetrr/kafka-der-process" className={styles.GitHubLink}
                       target={"_blank"} rel="noreferrer">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <Image uri={"/img/GitHub-Mark-Light-120px-plus.png"} desc={"GitHub Logo"} height={50}
                               width={"auto"} originalWidth={120} originalHeight={120}/>
                        <span className={styles.GitHubLinkText}>Open the Project on GitHub</span>
                    </a>
                </div>
                <div className={styles.sourcesContainer}>
                    <h1>Quellen</h1>
                    <h2>Biografie</h2>
                    <h3>Textquellen</h3>
                    <ul>
                        <li>
                            <a href="https://github.com/bennetrr/kafka-der-process/blob/72894feec8dd0e6eddf6c66b0710ce8e23882bf5/material/1%20Kafka%20und%20Prag.pdf">
                                bennetrr/kafka-der-process@72894f/material/1 Kafka und Prag.pdf
                            </a>
                        </li>
                        <li>
                            <a href="https://www.inhaltsangabe.de/autoren/kafka/">
                                https://www.inhaltsangabe.de/autoren/kafka/
                            </a>
                        </li>
                        <li>
                            <a href="https://de.wikipedia.org/wiki/Franz_Kafka#Leben">
                                https://de.wikipedia.org/wiki/Franz_Kafka#Leben
                            </a>
                        </li>
                    </ul>

                    <h3>Hintergrundbild</h3>
                    <p>
                        Geburtshaus Franz Kafkas<br/>
                        <a href="https://commons.wikimedia.org/wiki/File:Geburtshaus_Kafkas.JPG">
                            https://commons.wikimedia.org/wiki/File:Geburtshaus_Kafkas.JPG
                        </a><br/>
                        Von Christoph Radtke (via Wikimedia Commons)<br/>
                        Lizenziert unter <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a></p>
                    <h3>Bilder</h3>
                    <ul>
                        <li>Kafka im Alter von ca. 5 Jahren<br/>
                            <a href="https://commons.wikimedia.org/wiki/File:Kafka5jahre.jpg">
                                https://commons.wikimedia.org/wiki/File:Kafka5jahre.jpg
                            </a><br/>
                            Von Atelier Moritz Klempfner (via Wikimedia Commons); Leicht verändert<br/>
                            Lizenz: Gemeinfrei
                        </li>
                        <br/>
                        <li>Kafka als Schüler (vor 1900)<br/>
                            <a href="https://commons.wikimedia.org/wiki/File:Kafka-as-pupil.jpg">
                                https://commons.wikimedia.org/wiki/File:Kafka-as-pupil.jpg
                            </a><br/>
                            Unbekannter Autor; Leicht verändert<br/>
                            Lizenz: Gemeinfrei
                        </li>
                        <br/>
                        <li>Franz Kafka und Felice Bauer (1917)<br/>
                            <a href="https://github.com/bennetrr/kafka-der-process/blob/c7de0575a321e561e9d7cc60bfd25822c815a593/material/1%20Kafka%20und%20Prag.pdf">
                                bennetrr/kafka-der-process@c7de05/material/1 Kafka und Prag.pdf
                            </a><br/>
                            Unbekannter Autor<br/>
                            Lizenziert durch Lehrer
                        </li>
                        <br/>
                        <li>Erste Seite von <i>Brief an den Vater</i><br/>
                            <a href="https://commons.wikimedia.org/wiki/File:De_Kafka_Brief_an_den_Vater_001.jpg">
                                https://commons.wikimedia.org/wiki/File:De_Kafka_Brief_an_den_Vater_001.jpg
                            </a><br/>
                            Von Franz Kafka<br/>
                            Lizenz: Gemeinfrei
                        </li>
                        <br/>
                    </ul>

                </div>
            </div>
        </div>
    );
}
