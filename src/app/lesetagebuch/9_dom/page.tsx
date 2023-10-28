import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";
import {BackgroundImage} from "$/components/Images";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lesetagebuch: Kap. 9 | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <BackgroundImage uri={"/img/kapiteluebersicht/Kap9_Dom_Prag.jpg"}
                             desc={"Der Veitsdom auf der Prager Burg"}/>
            <Header/>

            <div className={styles.pageContent}>
                <div className={styles.textOnlyContent}>
                    <h1>Kapitel 9: Im Dom</h1>
                    <h2>Inhaltswiedergabe</h2>
                    <p>
                        K. soll einem italienischen Geschäftspartner der Bank die Stadt zeigen. Da er in der letzten
                        Zeit mehrere Außendienste machen musste, vermutet er dahinter einen Vorwand des
                        Direktor-Stellvertreters, um ihn von der Bank wegzulocken und um das Büro durchsuchen zu können.
                        Trotzdem nimmt er den Auftrag an und trifft sich mit dem Direktor und dem Geschäftspartner.
                        Obwohl K. seine Italienischkenntnisse geübt hatte, versteht er den Geschäftspartner schlecht, im
                        Gegensatz zum Direktor. K. und der Italiener verabreden sich für in zwei Stunden zu einer
                        Dombesichtigung. Während der Wartezeit lernt K. weiter italienische Vokabeln, die er für die
                        Besichtigung braucht. Er wird durch mehrere Störungen des Direktor-Stellvertreters und einen
                        Anruf von Leni unterbrochen. Als er rechtzeitig am Dom ankommt, ist der Italiener noch nicht da.
                        K. setzt sich in die Kirche.
                    </p>
                    <p>
                        Später entdeckt er eine kleine Kanzel, in der ein Geistlicher steht. Als K. die Kirche verlassen
                        will, ruft dieser seinen Namen. Der Geistliche stellt sich als Gefängniskaplan vor und sagt, er
                        habe K. in die Kirche bestellt, um mit ihm über seinen Prozess zu reden, der im übrigen sehr
                        schlecht steht. Die Richter hielten ihn für schuldig. Außerdem suche sich K. zu viel fremde
                        Hilfe, vor allem bei Frauen. K. widerspricht ihm, da <i>&quot;das [Gericht] fast nur aus
                        Frauenjägern besteht&quot;</i>. Daraufhin schreit der Kaplan ihn an, dass er nicht
                        vorausschauend denke und erzählt ihm von der Torhüterlegende aus <i>&quot;einleitenden Schriften
                        zum Gesetz&quot;</i>.
                    </p>
                    <p>
                        Nach dieser Legende stehe vor dem Gesetz ein Torhüter, der einem Mann den Eintritt in das Gesetz
                        nicht gewähre. Der Mann wolle sich trotz des Verbotes durch das Tor zum Gesetz begeben, aber als
                        der Torhüter sage, dass es noch mehr Torhüter mit immer mehr Macht gäbe, die ihm den Zutritt
                        verweigern würden, warte er vor dem Tor. Er warte mehrere Jahre und versuche oft, hineingelassen
                        zu werden. Der Torhüter verhöre den Mann öfters und stelle viele Fragen und der Mann versuche,
                        den Torhüter zu bestechen. Bei seinem Tod frage der Mann den Wächter, warum in den vielen Jahren
                        niemand anderes Einlass in das Gesetz verlangt habe. Dieser antworte daraufhin, dass dieser
                        Eingang nur für ihn bestimmt wäre und jetzt geschlossen werde.
                    </p>

                    <p>
                        K. entgegnet auf die Erzählung, dass der Torhüter den Mann getäuscht habe und <i>&quot;die
                        erlösende
                        Mitteilung erst dann gemacht [habe], als sie dem Mann nicht mehr helfen konnte&quot;</i>. Der
                        Kaplan verteidigt den Torhüter, er habe ja nur seine Pflicht erfüllt. Der Mann habe nur am
                        Anfang gefragt, ob er eingelassen werden kann, und ihm wurde gesagt, er könne jetzt noch keinen
                        Zutritt bekommen, es sei aber möglich. Danach habe der Mann nicht weiter nachgefragt, erst am
                        Ende, als er kurz vor dem Tod war. Außerdem sei der Torhüter immer freundlich gegenüber dem Mann
                        gewesen. Die beiden unterhalten sich noch weiter über die Geschichte, dann verabschiedet sich
                        der Kaplan mit den Worten: <i>&quot;Das Gericht will nichts von dir. Es nimmt dich auf, wenn du
                        kommst und es entlässt dich, wenn du gehst&quot;</i>.
                    </p>

                    <h2>Personen</h2>
                    <ul>
                        <li>Josef K.</li>
                        <li>Direktor-Stellvertreter</li>
                        <li>Direktor</li>
                        <li>italienischer Geschäftspartner</li>
                        <li>Kirchendiener</li>
                        <li>Gefängniskaplan</li>
                    </ul>

                    <h2>Orte</h2>
                    <p>
                        Das Kapitel spielt am Anfang in K.&apos;s Büro, später im Dom.
                    </p>
                </div>
            </div>
        </div>
    );
}
