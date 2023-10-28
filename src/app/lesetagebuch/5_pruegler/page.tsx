import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";
import {BackgroundImage} from "$/components/Images";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lesetagebuch: Kap. 5 | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <BackgroundImage uri={"/img/kapiteluebersicht/Kap5_Prügler.jpg"} desc={"Zeichnung \"Der Prügler\""}/>
            <Header/>

            <div className={styles.pageContent}>
                <div className={styles.textOnlyContent}>
                    <h1>Kapitel 5: Der Prügler</h1>
                    <h2>Inhaltswiedergabe</h2>
                    <p>
                        K. ist gerade dabei, die Bank zu verlassen, als er im Vorbeigehen aus einer Rumpelkammer
                        Geräusche hört. Er betritt den Raum und findet dort die zwei Wächter Franz und Willem, sowie
                        einen dritten Mann, der <i>&quot; eine Art dunkle Lederkleidung, die den Hals bis tief zur Brust
                        und die ganzen Arme nackt ließ&quot;</i> trägt und eine Rute in der Hand hält. Willem sagt, dass
                        K. sie beim Untersuchungsrichter angezeigt habe und sie deshalb bestraft werden sollen. K.
                        entgegnet, dass er, wenn er etwas von der Strafe gewusst hätte, sie niemals angezeigt hätte.
                    </p>
                    <p>
                        Die Wächter beschweren sich noch etwas bei K. über die Konsequenzen der Anzeige, dann befiehlt
                        ihnen der Prügler, sich auszuziehen. K. versucht, den Prügler zu bestechen, doch er lehnt ab.
                        Dann fängt der Prügler an zu prügeln. Als Franz schreit, kommen zwei Diener angelaufen und
                        fragen, was passiert ist, die K. mit einer Ausrede wieder wegschickt. Danach bleibt K. auf dem
                        Flur stehen und denkt nach. Er beschuldigt die Diener dafür, dass er den Prügler nicht
                        überzeugen konnte. Er denkt, dass er den Prügler etwas später mit mehr Geld bestechen könne, und
                        würde sich sogar für die Wächter opfern. Dann geht er nach Hause.
                    </p>
                    <p>
                        Als er am nächsten Tag wieder bei der Rumpelkammer vorbeiguckt, sind wieder die 3 Männer da. K.
                        knallt die Tür zu, geht zu den Dienern und sagt ihnen, dass sie die Rumpelkammer ausräumen
                        sollen.
                    </p>

                    <h2>Personen</h2>
                    <h3>Josef K.</h3>
                    <ul>
                        <li>besorgt um die Wächter</li>
                        <li>fühlt sich schuldig</li>
                    </ul>

                    <h3>Wächter Franz und Willem</h3>
                    <ul>
                        <li>haben Angst</li>
                        <li>sind wütend auf K.</li>
                    </ul>

                    <h3>Der Prügler</h3>
                    <ul>
                        <li>hat mindestens etwas Gefallen an der Sache</li>
                    </ul>

                    <h3>Weitere Personen</h3>
                    <ul>
                        <li>2 Diener</li>
                    </ul>

                    <h2>Orte</h2>
                    <p>
                        Das Kapitel spielt in einer Rumpelkammer in der Bank.
                    </p>

                    <h2>Gedanken / Fragen / Eindrücke / Widersprüche</h2>
                    <ul>
                        <li>Warum ist der Prügler so angezogen?</li>
                        <li>Bildet sich K. die 3 Männer am nächsten Tag nur ein?</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
