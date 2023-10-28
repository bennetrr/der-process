import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lesetagebuch: Kap. 6 | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <Header/>
            <div className={styles.pageContentGray}>
                <div className={styles.textOnlyContent}>
                    <h1>Kapitel 6: Der Onkel / Leni</h1>
                    <h2>Inhaltswiedergabe</h2>
                    <p>
                        K. ist bei der Arbeit und sein Onkel Albert kommt in sein Büro, um mit ihm über den Prozess zu
                        sprechen. Albert liest ihm einen Brief von seiner Tochter Erna vor, in dem sie davon berichtet,
                        dass ihr ein Diener von K. gesagt habe, dass ein schwerer Prozess gegen K. laufe. Er ist
                        aufgebracht, dass sich K. so ruhig verhält und spricht immer lauter, woraufhin K. beschließt,
                        das Büro zu verlassen. Albert bietet ihm an, einen &quot;Urlaub&quot; bei ihnen auf dem Land zu
                        machen, um sich dem Prozess etwas zu entziehen. K. lehnt das aber mit der Begründung, dass es
                        Flucht und Schuldbewusstsein bedeute, ab.
                    </p>
                    <p>
                        Albert beschließt, mit K. zum Advokaten Huld (= Rechtsanwalt) zu fahren. Auf der Fahrt erzählt
                        K. die bisherigen Ereignisse. Beim Advokaten teilt ihnen das Dienstmädchen Leni mit, dass der
                        Advokat krank sei. Nach einer Diskussion verlässt Leni den Raum und die drei fangen an, über
                        K.&apos;s Prozess zu sprechen. K. ist erstaunt, dass der Advokat schon von dem Prozess gehört
                        hat. Huld spricht davon, dass er viel Besuch von Gerichtsbeamten bekommt und deshalb viel
                        erfährt, und sagt auch, dass jetzt gerade jemand zu Besuch sei. Dann gibt er jemandem, der
                        sich im Zimmer versteckt hat, ein Zeichen, zu kommen, und stellt ihn als Kanzleidirektor vor.
                        Albert, Huld und der Kanzleidirektor unterhalten sich und beachten K. dabei nicht.
                    </p>
                    <p>
                        Dann hört K. ein Geräusch aus dem Vorzimmer und geht aus dem Zimmer, um nach der Ursache zu
                        gucken. Im Vorzimmer wartet Leni und sagt, sie habe nur einen Teller an die Wand geworfen, um K.
                        aus dem Zimmer zu holen. Dann führt sie ihn in das Arbeitszimmer von Huld und fragt ihn, warum
                        er nicht von alleine gekommen sei. Einerseits wirft sie sich K. geradezu an den Hals,
                        andererseits redet sie von Elsa als K.&apos;s Geliebte und davon, dass sie ihm nicht gefalle.
                        Offensichtlich weiß sie einiges über K.&apos;s Prozess und über Gerichte im Allgemeinen, da sie
                        K. ihre Hilfe anbietet, allerdings nur, wenn er ein Geständnis abgibt. Als K. sie küsst, gibt
                        sie ihm den Haustürschlüssel und sagt, er könne immer wiederkommen.
                    </p>

                    <p>
                        Als K. das Haus verlässt, kommt Albert aus einem Auto und beschwert sich darüber, dass K. bei
                        Leni war, während er, Huld und der Kanzleidirektor versucht haben, einen Ausweg aus dem Prozess
                        zu finden.
                    </p>

                    <h2>Personen</h2>
                    <h3>Albert (K.&apos;s Onkel)</h3>
                    <ul>
                        <li>in Eile</li>
                        <li>macht sich Sorgen um K. und den Prozess</li>
                        <li>aufgebracht / nervös / verängstigt</li>
                        <li>enttäuscht von K.&apos;s Ruhe</li>
                        <li>besorgt um das Ansehen der K.-Familie</li>
                    </ul>

                    <h3>Josef K.</h3>
                    <ul>
                        <li>gleichgültig über den Prozess</li>
                    </ul>

                    <h3>Advokat Huld</h3>
                    <ul>
                        <li>früherer Schulkollege von Albert</li>
                        <li>bedeutender Verteidiger und Armenadvokat</li>
                    </ul>

                    <h3>Leni (Hulds Pflegerin)</h3>
                    <ul>
                        <li>unterwürfig</li>
                    </ul>

                    <h3>Weitere Personen</h3>
                    <ul>
                        <li>Erna (K.&apos;s Cousine)</li>
                        <li>Kanzleidirektor</li>
                    </ul>

                    <h2>Orte</h2>
                    <p>
                        Das Kapitel spielt am Anfang in K.&apos;s Büro, dann auf dem Weg irgendwohin und später im Haus
                        des Advokaten Huld.
                    </p>
                </div>
            </div>
        </div>
    );
}
