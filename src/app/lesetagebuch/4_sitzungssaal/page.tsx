import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";
import {BackgroundImage} from "$/components/Images";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lesetagebuch: Kap. 4 | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <BackgroundImage uri={"/img/kapiteluebersicht/Kap4_Büroräume.jpg"}
                             desc={"Ein Prozess im Gericht des Belem Prison, Mexico"}/>
            <Header/>

            <div className={styles.pageContent}>
                <div className={styles.textOnlyContent}>
                    <h1>Kapitel 4: Im leeren Sitzungssaal / Der Student / Die Kanzleien</h1>
                    <h2>Inhaltswiedergabe</h2>
                    <p>
                        K. wundert sich, dass er nach der letzten Sitzung keine weitere Vorladung bekommt und
                        beschließt, zu dem Untersuchungsgebäude zu gehen. Die Frau in dem Untersuchungszimmer teilt ihm
                        mit, dass heute keine Sitzung stattfinde. K. bemerkt, dass der Raum als Wohnzimmer eingerichtet
                        sei, woraufhin die Frau sagt, dass ihr Mann Gerichtsdiener sei und sie das Zimmer für die
                        Sitzungen räumen müssten. Dann reden die beiden über die letzte Sitzung. Die Frau meint, dass
                        ihr die Rede bei der letzten Sitzung gut gefallen habe und dass sie ihm helfen wolle, was K.
                        aber ablehnt. Die Frau erwähnt, dass sie den Untersuchungsrichter kenne, und unterwirft sich K.
                        quasi, wodurch K. seine Meinung ändert.
                    </p>
                    <p>
                        Dann kommt ein Gerichtsstudent herein, der offensichtlich eine Beziehung zu der Frau hat. K.
                        möchte warten, bis er wieder geht, was ihm zu lange dauert, woraufhin es zu einer
                        Auseinandersetzung zwischen K. und dem Studenten kommt. Als sich die Frau auf Seite des
                        Studenten stellt und von ihm herausgetragen wird, gibt K. auf. Der Student trägt die Frau auf
                        den Dachboden, in dem sich, wie K. auf einem Schild liest, Gerichtskanzleien befinden.
                    </p>
                    <p>
                        Dann kommt der Gerichtsdiener und beschwert sich darüber, dass seine Frau
                        immer <i>&quot;weggetragen&quot;</i> werde, und äußert Mordgedanken bezüglich des Studenten.
                        Weil ein Mord für ihn allerdings zu große Konsequenzen habe, fragt er K., ob er <i>&quot;den
                        Studenten [...] ein mal, wenn er [seine] Frau anrühren will, so durchprügeln [könne], dass er es
                        niemals mehr wagt&quot;</i>.
                    </p>
                    <p>
                        Dann nimmt der Gerichtsdiener ihn mit in die Kanzlei im Dachgeschoss, das voller Büros und einem
                        Warteraum ist. Dort treffen sie weitere Angeklagte, die sich vor den beiden verbeugen, als wären
                        sie Richter. Etwas weiter hat K. einen leichten Zusammenbruch, für den wahrscheinlich die
                        schlechten Luftverhältnisse des Dachbodens verantwortlich sind. Schließlich wird K. von einem
                        Auskunftgeber und einem Mädchen nach draußen geführt.
                    </p>

                    <h2>Personen</h2>
                    <h3>Josef K.</h3>
                    <ul>
                        <li>selbstsicher</li>
                        <li>fühlt sich überlegen</li>
                        <li>fühlt sich nicht ernst genommen</li>
                        <li>fragt sich, ob das Gericht korrupt ist</li>
                        <li>möchte Hilfe</li>
                    </ul>

                    <h3>Frau des Gerichtsdieners</h3>
                    <ul>
                        <li><i>&quot;läuft allen Männern hinterher&quot;</i> (lt. ihres Ehemannes)</li>
                    </ul>

                    <h3>Weitere Personen</h3>
                    <ul>
                        <li>Gerichtsstudent Bertold</li>
                        <li>Gerichtsdiener</li>
                        <li>weitere Angeklagte</li>
                        <li>Auskunftgeber</li>
                        <li>Beamte des Gerichts</li>
                    </ul>

                    <h2>Orte</h2>
                    <p>
                        Das Kapitel spielt in dem Untersuchungszimmer und im Dachgeschoss des Gebäudes, in dem sich die
                        Gerichtskanzlei befindet.
                    </p>

                    <h2>Gedanken / Fragen / Eindrücke / Widersprüche</h2>
                    <ul>
                        <li>Haben die merkwürdigen Orte eine bestimmte Bedeutung?</li>
                        <li>Ist den anderen Angeklagten Ähnliches wiederfahren wie K.?</li>
                        <li>Warum ist bis jetzt noch nicht der Name des Gerichts / der Behörde bekannt?</li>
                        <li>Hat die Anklage irgendetwas mit &quot;den Frauen&quot; zu tun?</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
