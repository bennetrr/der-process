import React from "react";
import styles from "../../styles/Page.module.scss";

import Head from "next/head";
import Header from "../../components/Header";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lesetagebuch: Kap. 2 | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <div className={styles.page_content} style={{background: '#1a1a1a'}}>
                <div className={styles.text_only_content}>
                    <h1>Kapitel 2: Gespräch mit Frau Grubach, dann Fräulein Bürstner</h1>
                    <h2>Inhalt</h2>
                    <p>
                        K. kommt von der Arbeit nach Hause und geht zu Frau Grubach, um mit ihr über die Geschehnisse am
                        Morgen zu sprechen.
                        Das Gespräch verläuft etwas merkwürdig:
                        Frau Grubach meint zu K., dass eine solche Situation <i>&quot;nicht wieder vorkommen
                        [kann]&quot;&nbsp;</i>
                        und dass K. <i>&quot;es nicht zu schwer nehmen&quot;</i> solle.
                        Außerdem sagt sie, dass ihr die Verhaftung wie etwas <i>&quot;gelehrtes&quot;</i> vorkomme
                        und nicht so wie die Verhaftung eines Diebes.
                    </p>
                    <p>
                        Danach schweift das Gespräch auf Fräulein Bürstner ab.
                        K. fragt Frau Grubach, ob Fräulein Bürstner schon zu Hause sei, da er sich bei ihr wegen der
                        Benutzung ihres Zimmers durch den Aufseher entschuldigen wolle.
                        Frau Grubach sagt, dass Fräulein Bürstner wahrscheinlich spät komme, da sie im Theater sei.
                    </p>
                    <p>
                        Dann erzählt sie, sie habe Fräulein Bürstner des Öfteren immer mit unterschiedlichen Männern
                        gesehen, was ihr peinlich sei.
                        Das macht K. offensichtlich wütend, was man damit in Verbindung bringen kann, dass er
                        <i>&nbsp;&quot;einmal in der Woche zu einem Mädchen namens Elsa [geht], die [...] während des
                            Tages nur vom Bett aus Besuche empfing&quot;</i> (siehe Anfang des Kapitels).</p>
                    <p>
                        Nach dem Gespräch wartet K., bis Fräulein Bürstner in die Pension kommt, um mit ihr zu sprechen.
                        K. entschuldigt sich bei ihr, dass ihr Zimmer in Unordnung gebracht wurde.
                        Fräulein Bürstner erkennt erst beim genaueren Hinsehen, dass ihre Fotografien durcheinander sind
                        und beschuldigt K. dafür.
                        Daraufhin möchte K. die Geschichte nachspielen.
                        Nachdem er seinen Namen geschrien hat, so wie der Aufseher es auch gemacht hatte, klopft es an
                        der Tür.
                    </p>

                    <h2>Personen</h2>

                    <h3>Josef K.</h3>
                    <ul className={styles.list}>
                        <li>Unentschlossen / Wechselt ständig seine Ansichten</li>
                    </ul>

                    <h3>Frau Grubach</h3>
                    <ul className={styles.list}>
                        <li>Sorgt sich um K.</li>
                    </ul>

                    <h3>Weitere Personen</h3>
                    <ul className={styles.list}>
                        <li>Sohn des Hausmeisters</li>
                        <li>Fräulein Bürstner</li>
                    </ul>

                    <h2>Orte</h2>
                    <p>Das Kapitel spielt in der Pension von Frau Grubach, in der Josef K. wohnt.</p>

                    <h2>Gedanken / Fragen</h2>
                    <ul className={styles.list}>
                        <li>Was soll die letzte Szene nach K.&#39;s Schrei?</li>
                        <li>Hat der Sohn des Hausmeisters eine Bedeutung?</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}
