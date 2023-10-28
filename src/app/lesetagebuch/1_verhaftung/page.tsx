import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";
import {BackgroundImage} from "$/components/Images";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lesetagebuch: Kap. 1 | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <BackgroundImage uri={"/img/kapiteluebersicht/Kap1_Comic.jpg"}
                             desc={"Auszug einer Comicfassung von \"Der Process\""}/>
            <Header/>

            <div className={styles.pageContent}>
                <div className={styles.textOnlyContent}>
                    <h1>Kapitel 1: Verhaftung</h1>
                    <h2>Inhaltswiedergabe</h2>
                    <p>
                        Josef K. wacht auf und bemerkt, dass sein Frühstück nicht gebracht wurde. Etwas später kommt
                        Franz, einer der Wächter, herein und sagt, dass es unmöglich sei, dass K. Frühstück bekommt.
                    </p>
                    <p>
                        Daraufhin geht K. in das Nebenzimmer, aus dem Wächter Franz kam, und trifft auf Willem, den
                        zweiten Wächter. Die Wächter teilen ihm mit, dass er verhaftet ist. Außerdem muss er seine
                        persönlichen Gegenstände wie Kleidung an die Wächter abgeben. K. versucht, Details über den
                        Verhaftungsgrund zu erfahren, aber die Wächter dürfen ihm nichts sagen.
                    </p>
                    <p>
                        Später wird K. zum Aufseher gerufen, der im Zimmer von einer anderen Mieterin wartet. Dieser
                        bestätigt K., dass er verhaftet ist, kann ihn aber auch nicht über die Anschuldigungen
                        aufklären.
                    </p>
                    <p>
                        Am Ende fragt der Aufseher, ob K. zu seiner Arbeit gehen möchte. <i>&quot;[...] Sie sind
                        verhaftet, gewiss, aber das soll sie nicht hindern ihren Beruf zu erfüllen. Sie sollen auch in
                        ihrer gewöhnlichen Lebensweise nicht gehindert sein.&quot;</i> Der Aufseher stellt ihm drei
                        Mitarbeiter von der Bank vor, in der auch K. arbeitet, mit denen er dann gegen Ende des Kapitels
                        zur Bank fährt.
                    </p>

                    <h2>Personen</h2>
                    <h3>Josef K.</h3>
                    <ul>
                        <li>30 Jahre alt</li>
                        <li>Beruf: Prokurist in einer Bank</li>
                        <li>gebildet</li>
                        <li>freundlich</li>
                        <li>erst:</li>
                        <ul>
                            <li>bleibt unbeeindruckt</li>
                            <li>fühlt sich überlegen</li>
                            <li>selbstsicher</li>
                            <li>versucht, die Beteiligten zu manipulieren</li>
                            <li>provokant</li>
                            <li>glaubt nicht, dass die Situation reell ist</li>
                        </ul>
                        <li>später:</li>
                        <ul>
                            <li>genervt</li>
                            <li>suizidale Gedanken</li>
                            <li>verunsichert</li>
                            <li>kindisch / stur (Anwalt anrufen)</li>
                            <li>empfindet die Situation als ungerecht</li>
                        </ul>
                    </ul>

                    <h3>Weitere Personen</h3>
                    <ul>
                        <li>Wächter Franz und Willem</li>
                        <li>der Aufseher</li>
                        <li>Frau Grubach</li>
                        <li>alte Leute am Fenster</li>
                        <li>3 Kollegen der Bank</li>
                    </ul>

                    <h2>Orte</h2>
                    <p>
                        Das Kapitel spielt in der Pension von Frau Grubach, in der Josef K. wohnt.
                    </p>

                    <h2>Gedanken / Fragen / Eindrücke / Widersprüche</h2>
                    <ul>
                        <li>Warum wurde K. verhaftet und warum ist das so geheim?</li>
                        <li>Sind die Leute vom Geheimdienst?</li>
                        <li>Träumt K. das alles nur oder ist er psychisch gestört?</li>
                        <li>
                            Warum darf K. seiner &quot;gewöhnlichen Lebensweise nicht gehindert sein&quot;, obwohl er
                            verhaftet ist?
                        </li>
                        <li>
                            Der Text ist wegen der alten Rechtschreibung und fehlenden Kommas anstrengend zu lesen,
                            das Verstehen ist aber nicht unmöglich.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
