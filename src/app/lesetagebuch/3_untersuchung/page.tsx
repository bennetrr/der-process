import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";
import {BackgroundImage} from "$/components/Images";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lesetagebuch: Kap. 3 | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <BackgroundImage uri={"/img/kapiteluebersicht/Kap3_Court_Room_in_Belen.jpg"}
                             desc={"Ein Prozess im Gericht des Belem Prison, Mexico"}/>
            <Header/>

            <div className={styles.pageContent}>
                <div className={styles.textOnlyContent}>
                    <h1>Kapitel 3: Erste Untersuchungen</h1>
                    <h2>Inhaltswiedergabe</h2>
                    <p>
                        K. wurde telefonisch Bescheid gesagt, dass er am Sonntag zu einer Untersuchung gehen muss.
                        Direkt danach lädt ihn der Direktor-Stellvertreter, mit dem K. sich nie gut vertragen hat, am
                        gleichen Sonntag auf sein Segelboot ein, was K. leider ablehnen muss. Kurz nach dem Telefonat
                        fällt K. ein, dass ihm keine Uhrzeit für sein Erscheinen gesagt wurde.
                    </p>
                    <p>
                        Auf dem Weg zu der Untersuchung sieht er die 3 Kollegen, die auch bei seiner Verhaftung dabei
                        waren. Die Straße, auf der sich das Untersuchungsgebäude befinden soll, enthält <i>&quot;hohe,
                        graue, [einförmige,] von armen Leuten bewohnte Miethäuser&quot;</i>.
                    </p>
                    <p>
                        Nach langem Fragen bei den Bewohnern des Zielgebäudes, das auch ein Wohnhaus war, findet er im
                        5ten Stock den Untersuchungsraum. Dort wird ihm mitgeteilt, dass er eigentlich eine Stunde zu
                        spät ist für eine Verhörung.
                    </p>
                    <p>
                        Die erste Frage des Richters ist, ob er ein Zimmermaler sei. Daraufhin konfrontiert K. den
                        Richter und die anwesenden Personen damit, dass eine Verwechslung besteht, er das Verfahren für
                        ungültig hält und die Aktionen der Wächter und des Aufsehers dafür da waren, um sein Ansehen zu
                        schädigen. Währenddessen sagt der Richter kein Wort. Als K. fertig war, wird das Verhör beendet.
                    </p>

                    <h2>Personen</h2>
                    <ul>
                        <li>Josef K.</li>
                        <li>Direktor-Stellvertreter</li>
                        <li>Untersuchungsrichter</li>
                        <li>weitere Beteiligte der Untersuchung</li>
                    </ul>

                    <h2>Orte</h2>
                    <p>
                        Das Kapitel spielt am Anfang in der Bank, in der K. arbeitet, und später in dem
                        Untersuchungsraum.
                    </p>

                    <h2>Gedanken / Fragen / Eindrücke / Widersprüche</h2>
                    <ul>
                        <li>Besteht eine Verwechslung zwischen diesem Josef K. und einem anderen Josef K.?</li>
                        <li>
                            Wenn K., genauso wie der Autor, auch Jude ist, könnten die Aktionen vielleicht Kafkas
                            Vorstellungen zur Judenverfolgung sein. Das könnte damit zusammenpassen, dass K. am Anfang
                            gebeten wird, seine Kleidung abzugeben, genauso wie die Abzeichen, die alle Beteiligten der
                            Untersuchung tragen.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
