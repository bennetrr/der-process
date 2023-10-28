import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";
import Timeline, {TimelineItem} from "$/components/Timeline";
import {BackgroundImage} from "$/components/Images";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Biografie | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <BackgroundImage uri={"/img/biografie/Geburtshaus_Kafkas.jpg"} desc={"Kafkas Geburtshaus"}/>
            <Header/>

            <div className={styles.pageContent}>
                <h1>Biografie zu Franz Kafka</h1>

                <Timeline width={"60%"}>
                    <TimelineItem date={"3. Juli 1883"} image={{
                        uri: "/img/biografie/Kafka_5_Jahre.jpg",
                        alt: "Kafka mit ca. 5 Jahren",
                        height: 160,
                        width: "auto",
                        originalWidth: 724,
                        originalHeight: 1050
                    }}>
                        Franz Kafka wird in Prag geboren. Er ist das erste Kind von Hermann und Julie Kafka, die beide
                        aus jüdischen Kaufmannsfamilien stammen. <br/>
                        Er hatte drei dicht hintereinander geborene Schwestern: Gabriele &quot;Elli&quot;,
                        Valerie &quot;Valli&quot; und Otilie &quot;Ottla&quot;.
                        Alle drei wurden nach Kafkas Tod von den Nazis deportiert und getötet. <br/>
                        Außerdem hatte er zwei Brüder (Georg und Heinrich), die allerdings schon im Kleinkindalter
                        verstarben. <br/>
                        Hermann Kafka ließ seinen Kindern wenig Freiraum für ihre persönliche Entwicklung. Dadurch wurde
                        Franz immer unsicherer und ängstlicher.
                    </TimelineItem>

                    <TimelineItem date={"1889 - 1893"}>
                        Kafka besucht die <i>Deutsche Knabenschule am Fleischmarkt</i>, eine Volksschule mit deutscher
                        Unterrichtssprache in der Prager Altstadt.
                    </TimelineItem>

                    <TimelineItem date={"1893 - 1901"} image={{
                        uri: "/img/biografie/Kafka_als_Schueler.jpg",
                        alt: "Kafka als Schüler (vor 1900)",
                        height: 115,
                        width: "auto",
                        originalWidth: 962,
                        originalHeight: 1170
                    }}>
                        Besuch des <i>Kaiserlich-königlichem Staatsgymnasium mit deutscher Unterrichtssprache in
                        Prag-Altstadt.</i>
                    </TimelineItem>

                    <TimelineItem date={"Winter 1902/03"}>
                        Beginn eines Rechtswissenschaftsstudiums an der <i>Deutschen Karl-Ferdinand-Universität</i> in
                        Prag nach mehrfachem Ausprobieren von anderen Studiengängen.
                    </TimelineItem>

                    <TimelineItem date={"Juni 1906"}>
                        Kafka schließt sein Studium mit der Promotion zum Doktor der Rechte erfolgreich ab.
                    </TimelineItem>

                    <TimelineItem date={"Oktober 1906"}>
                        Franz Kafka beschreitet eine einjährige Praxisphase, erst am <i>Landesgericht am Obstmarkt</i>,
                        später dann am <i>Strafgericht am Karlsplatz</i>.
                    </TimelineItem>

                    <TimelineItem date={"1. Oktober 1907 - ca. April 1908"}>
                        Kafka wird bei der Privatversicherungsgesellschaft <i>Assicurazioni Generali</i> als
                        Aushilfskraft eingestellt.
                    </TimelineItem>

                    <TimelineItem date={"Juli 1908 - 1922"}>
                        Franz Kafka fängt bei der <i>Arbeiter-Unfall-Versicherungs-Anstalt für das Königreich
                        Böhmen</i> als Aushilfsbeamter an. <br/>
                        In den 14 Jahren Amtszeit wurde er bis zum Abteilungsleiter befördert.
                    </TimelineItem>

                    <TimelineItem date={"August 1912"} image={{
                        uri: "/img/biografie/Kafka_Bauer.png",
                        alt: "Kafka und Felice Bauer (1917)",
                        height: 115,
                        width: "auto",
                        originalWidth: 107,
                        originalHeight: 174
                    }}>
                        Kafka lernt die Berliner Handelsangestellte Felice Bauer kennen.
                    </TimelineItem>

                    <TimelineItem date={"September 1912"}>
                        Die Novelle <i>Das Urteil</i> wird innerhalb einer Nacht verfasst.
                    </TimelineItem>

                    <TimelineItem date={"17. November - 6. Dezember 1912"}>
                        Kafka schreibt an der Erzählung <i>Die Verwandlung</i>.
                    </TimelineItem>

                    <TimelineItem date={"Dezember 1912"}>
                        Der Sammelband <i>Betrachtung</i> wird im <i>Leipziger Rowohlt-Verlag</i> veröffentlicht.
                    </TimelineItem>

                    <TimelineItem date={"1. Juni 1914"}>
                        Franz Kafka und Felice Bauer verloben sich offiziell.
                    </TimelineItem>

                    <TimelineItem date={"12. Juli 1914"}>
                        Das Verlöbnis wird aufgrund von Bindungsängsten auf Seiten Kafkas wieder aufgelöst.
                    </TimelineItem>

                    <TimelineItem date={"28. Juli 1914"}>
                        Beginn des ersten Weltkriegs. Österreich-Ungarn erklärt Serbien den Krieg.
                    </TimelineItem>

                    <TimelineItem date={"August 1914"}>
                        Kafka beginnt, an dem Roman <i>Der Process</i> zu arbeiten.
                    </TimelineItem>

                    <TimelineItem date={"Januar 1915"}>
                        Die Arbeiten am Roman <i>Der Process</i> werden eingestellt. Er bleibt unvollendet.
                    </TimelineItem>

                    <TimelineItem date={"ab November 1916"}>
                        Franz Kafka nutzt das von seiner jüngsten Schwester Ottilie gemietete Häuschen zum
                        Schreiben. <br/>
                        Dort entstehen u.a. Erzählungen, die April 1920 im Sammelband <i>Ein Landarzt</i> bei <i>Kurt
                        Wolff</i> erscheinen.
                    </TimelineItem>

                    <TimelineItem date={"Juli 1917"}>
                        Kafka verlobt sich erneut mit Felice Bauer.
                    </TimelineItem>

                    <TimelineItem date={"12. August 1917"}>
                        Franz Kafka erleidet nachts einen Blutsturz.
                    </TimelineItem>

                    <TimelineItem date={"3. September 1917"}>
                        Ein Arzt diagnostiziert Lungentuberkulose.
                    </TimelineItem>

                    <TimelineItem date={"25. Dezember 1917"}>
                        Erneute Auflösung des Verlobungsverhältnisses mit Felice Bauer.
                    </TimelineItem>

                    <TimelineItem date={"Herbst 1918"}>
                        Kafka erkrankt an der Spanischen Grippe, woraus sich eine Lungenentzündung entwickelt. Es folgen
                        mehrere Kurbesuche.
                    </TimelineItem>

                    <TimelineItem date={"November 1919"} image={{
                        uri: "/img/biografie/Kafka_Brief_an_den_Vater.jpg",
                        alt: "Die erste Seite des Brief an den Vater",
                        height: 250,
                        width: "auto",
                        originalWidth: 1751,
                        originalHeight: 2752
                    }}>
                        Franz Kafka schreibt in der Kur den über 100 Seiten langen <i>Brief an den Vater</i>, in dem er
                        über das schlechte Verhältnis zu seinem Vater berichtet. <br/>
                        Der Brief wurde nie an Hermann Kafka abgeschickt.
                    </TimelineItem>

                    <TimelineItem date={"April 1920"}>
                        Kafka beginnt ein Liebesverhältnis mit der verheirateten Journalistin Milena Jesenská.
                    </TimelineItem>

                    <TimelineItem date={"Ende Januar 1922"}>
                        Kafka beginnt mit dem Roman <i>Das Schloss</i>.
                    </TimelineItem>

                    <TimelineItem date={"1. Juli 1922"}>
                        Da keine Aussichten auf eine Heilung der Tuberkulose bestehen, bewirkt Kafka seine
                        Pensionierung.
                    </TimelineItem>

                    <TimelineItem date={"Ende August 1922"}>
                        Kafka hört auf, am unvollendeten <i>Das Schloss</i> zu arbeiten.
                    </TimelineItem>

                    <TimelineItem date={"Juli 1923"}>
                        Franz Kafka unternimmt eine Reise in das Ostseebad Müritz. Dort lernt er Dora Diamant kennen,
                        ein junges, ostjüdisches Mädchen.
                    </TimelineItem>

                    <TimelineItem date={"24. September 1923"}>
                        Kafka zieht zusammen mit Dora Diamant in eine Wohnung in Berlin. Das ist auch das erste Mal nach
                        40 Jahren, dass er das Elternhaus verlässt.
                    </TimelineItem>

                    <TimelineItem date={"1923/24"}>
                        Die Tuberkulose greift langsam auf den Kehlkopf über. Dadurch fällt ihm das Sprechen und die
                        Nahrungsaufnahme schwerer.
                    </TimelineItem>

                    <TimelineItem date={"17. März 1924"}>
                        Der Gesundheitszustand Kafkas verschlechtert sich weiter, weswegen er wieder ins Elternhaus nach
                        Prag zurückkehrt.
                    </TimelineItem>

                    <TimelineItem date={"3. Juni 1924"} image={{
                        uri: "/img/biografie/Grab_von_Franz_Kafka.jpg",
                        alt: "Kafkas Grab auf dem neuen jüdischen Friedhof, Prag",
                        height: 107,
                        width: "auto",
                        originalWidth: 1280,
                        originalHeight: 960
                    }}>
                        Franz Kafka stirbt im Alter von 40 Jahren, genau einen Monat vor seinem 41. Geburtstag.
                    </TimelineItem>

                    <TimelineItem date={"1925 - 1927"}>
                        Kafkas Freund Max Brod veröffentlicht postum die unvollendeten Bücher <i>Der Process</i>, <i>Das
                        Schloss</i> und <i>Der Verschollene</i>, entgegen Kafkas Willen.
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    );
}
