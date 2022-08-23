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
                </div>
            </div>
        </div>
    );
}
