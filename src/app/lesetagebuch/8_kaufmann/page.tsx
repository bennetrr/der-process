import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lesetagebuch: Kap. 8 | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <Header/>
            <div className={styles.pageContentGray}>
                <div className={styles.textOnlyContent}>
                    <h1>Kapitel 8: Kaufmann Block / Kündigung des Advokaten</h1>
                    <h2>Inhaltswiedergabe</h2>
                    <p>
                        K. ist beim Haus des Advokaten, um ihm seine Kündigung mitzuteilen. Nach zweimaligem Klingeln
                        öffnet ihm ein Mann die Tür, der sich als Kaufmann Block vorstellt. K. unterstellt ihm, ein
                        Liebhaber von Leni zu sein, später erfährt er aber, dass er auch ein Mandat des Advokaten ist
                        und selbst in einem Prozess steckt. Block erzählt von seinem Prozess, der im Allgemeinen dem von
                        K. gleicht, allerdings schon 5 Jahre andauert. Er schildert auch die gleichen Eindrücke von Huld,
                        weshalb er auch noch 5 weitere Advokaten habe. Dann sagt Block, dass er K. im Wartezimmer des
                        Gerichts begegnet sei, und erzählt von einem Aberglauben, der besagt, dass man den Ausgang eines
                        Falles an den Lippen eines Angeklagten ablesen könne.
                    </p>
                    <p>
                        Dann geht K. zum Advokaten, welcher sich erstmal für die Zudringlichkeit Lenis entschuldigt. Er
                        sagt, alle Angeklagten seien schön, was wohl an dem Verfahren liege, und Leni fühle sich zu
                        allen hingezogen, was K. als Ablenkung empfindet. K. teilt ihm mit, dass er seine Dienste nicht
                        mehr beanspruchen möchte. Das begründet er damit, dass er den Prozess vor Hulds Beauftragung als
                        unbedeutend eingeschätzt habe, sich aber jetzt mehr mit dem Prozess beschäftige und immer noch
                        auf Hulds Eingreifen wartete. Daraufhin folgt eine Rede von Huld, die beinhaltete, dass seine
                        langsame Arbeitsweise an der großen Anstrengung, die er auf Prozesse verwende und die ihn
                        letztendlich krank gemacht habe, läge.
                    </p>
                    <p>
                        Weil K. die Argumente nicht überzeugen können, ruft Huld den Kaufmann Block herein, welcher sich
                        sehr
                        ängstlich und unterwürfig gibt. Es folgt eine Auseinandersetzung, die damit startet, dass Huld
                        Block vorwirft, immer ungelegen zu kommen. Kurz darauf kommt Leni herein und beteiligt sich an
                        der Demütigung. Sie berichtet, wie sie den Kaufmann im Dienstmädchenzimmer eingeschlossen habe.
                        Der Streit bekräftigt K.&apos;s Entscheidung, dem Advokaten zu kündigen.
                    </p>

                    <h2>Personen</h2>
                    <ul>
                        <li>Josef K.</li>
                        <li>Kaufmann Rudi Block</li>
                        <li>Leni</li>
                        <li>Advokat Huld</li>
                    </ul>

                    <h2>Orte</h2>
                    <p>
                        Das Kapitel spielt im Haus des Advokaten Huld.
                    </p>
                </div>
            </div>
        </div>
    );
}
