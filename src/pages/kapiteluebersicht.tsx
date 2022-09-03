import React from "react";
import genericStyles from "../styles/Page.module.scss";
import styles from "../styles/Kapiteluebersicht.module.scss"


import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
    return (
        <div className={genericStyles.container}>
            <Head>
                <title>Kapitelübersicht | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <div className={genericStyles.page_content} style={{background: '#1a1a1a'}}>
                <h1>Kapitelübersicht</h1>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <span className={styles.title}>Kapitel 1 - <i>Verhaftung</i></span><br/>
                        <span>Position im Buch: Seiten 7 - 21</span><br/>
                        <Link href={"/lesetagebuch/verhaftung"}>Lesetagebuch</Link>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}>Kapitel 2 - <i>Gespräch mit Frau Grubach / Dann Fräulein Bürstner</i></span><br/>
                        <span>Position im Buch: Seiten 22 - 34</span><br/>
                        <Link href={"/lesetagebuch/gespraeche"}>Lesetagebuch</Link>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}>Kapitel 3 - <i>Erste Untersuchungen</i></span><br/>
                        <span>Position im Buch: Seiten 35 - 50</span><br/>
                        <Link href={"/lesetagebuch/untersuchung"}>Lesetagebuch</Link>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}>Kapitel 4 - <i>Im leeren Sitzungssaal / Der Student / Die Kanzleien</i></span><br/>
                        <span>Position im Buch: Seiten 51 - 74</span><br/>
                        <Link href={"/lesetagebuch/sitzungssaal"}>Lesetagebuch</Link>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}>Kapitel 5 - <i>Der Prügler</i></span><br/>
                        <span>Position im Buch: Seiten 75 - 81</span><br/>
                        <Link href={"/lesetagebuch/pruegler"}>Lesetagebuch</Link>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}>Kapitel 6 - <i>Der Onkel / Leni</i></span><br/>
                        <span>Position im Buch: Seiten 82 - 101</span><br/>
                        <Link href={"/lesetagebuch/onkel"}>Lesetagebuch</Link>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}>Kapitel 7 - <i>Advokat / Fabrikant / Maler</i></span><br/>
                        <span>Position im Buch: Seiten 102 - 151</span><br/>
                    </div>

                    <div className={styles.item}>
                        <span
                            className={styles.title}>Kapitel 8 - <i>Kaufmann Block / Kündigung des Advokaten</i></span><br/>
                        <span>Position im Buch: Seiten 152 - 181</span><br/>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}>Kapitel 9 - <i>Im Dom</i></span><br/>
                        <span>Position im Buch: Seiten 182 - 205</span><br/>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}>Kapitel 10 - <i>Ende</i></span><br/>
                        <span>Position im Buch: Seiten 206 - 211</span><br/>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}>Fragment 1 - <i>B.&apos;s Freundin</i></span><br/>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}>Fragment 2 - <i>Staatsanwalt</i></span><br/>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}>Fragment 3 - <i>Zu Elsa</i></span><br/>
                    </div>

                    <div className={styles.item}>
                        <span
                            className={styles.title}>Fragment 4 - <i>Kampf mit dem Direktor-Stellvertreter</i></span><br/>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}>Fragment 5 - <i>Das Haus</i></span><br/>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}>Fragment 6 - <i>Fahrt zur Mutter</i></span><br/>
                    </div>

                    <div className={styles.item}>
                        <span className={styles.title}><i>Zu dieser Ausgabe</i></span><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}
