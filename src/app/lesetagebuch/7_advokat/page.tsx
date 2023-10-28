import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";
import {BackgroundImageColor} from "$/components/Images";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lesetagebuch: Kap. 7 | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <BackgroundImageColor uri={"/img/kapiteluebersicht/Kap7_Heidelandschaft.jpg"}
                                  desc={"Heidelandschaft Postbank"}/>
            <Header/>

            <div className={styles.pageContent}>
                <div className={styles.textOnlyContent}>
                    <h1>Kapitel 7: Advokat / Fabrikant / Maler</h1>
                    <h2>Inhaltswiedergabe</h2>
                    <p>
                        K. sitzt in seinem Büro und denkt über den Prozess nach. Er ist unzufrieden mit der Arbeit des
                        Advokaten Huld, der scheinbar zur Mithilfe in K.&apos;s Prozess beauftragt wurde. Die Gespräche
                        gehen K. nicht genug um die Lösung seines Prozesses, da Huld mehr von seinen Erfolgen erzählt.
                        Außerdem meint Huld, er wolle eine Eingabe verfassen. Aber da der Prozess nicht öffentlich sei
                        und deswegen keine Details zu der Anklage weitergegeben werden können, wisse er nicht, wogegen
                        er die Eingabe richten soll. Sowieso würden die Eingaben manchmal verloren gehen oder einfach
                        nicht gelesen werden. Zudem seien Advokaten vom Gericht nicht erlaubt, sondern nur geduldet. Das
                        Zimmer für die Advokaten sei eine auf dem zweiten Dachgeschoss gelegene Kammer, die ein Loch im
                        Boden habe, in dem man stecken bleiben könne. Diese Zustände seien dafür da, um die Verteidigung
                        vor dem Gericht so gut wie möglich zu minimieren. Des Weiteren dürften Advokaten nicht bei den
                        Verhören anwesend sein, sondern müssten die Angeklagten danach ausfragen oder ihre Informationen
                        durch Bestechungen von niedrigeren Beamten oder Aktendiebstähle beschaffen. Wichtiger seien aber
                        persönliche Beziehungen mit höheren Beamten, die nur wenige Advokaten hätten. Die
                        Gerichtsbeamten würden auch öfters die Advokaten um eine Meinung bitten, falls sie nicht
                        weiterkämen. Dann meint Huld, die Rede, die K. bei seiner ersten Untersuchung vor dem für den
                        Prozessausgang wichtigen Kanzleidirektor gehalten hätte, habe einen sehr negativen Eindruck auf
                        den Direktor hinterlassen. Die einzige Ablenkung ist Leni, die während der Gespräche Tee bringt
                        und K. die Hand hält.
                    </p>
                    <p>
                        K. vergleicht den Prozess mit seinen Bankgeschäften: Es gibt verschiedene Gefahren, die für
                        einen erfolgreichen Ausgang abgewehrt werden müssen. Außerdem müsse man immer vom eigenen
                        Vorteil ausgehen und nicht von der Schuld. Deshalb möchte K. den Advokaten so schnell wie
                        möglich kündigen und eine eigene Eingabe verfassen und einreichen. Er weiß aber auch, dass das
                        Verfassen lange dauert und seine Zeit dafür wahrscheinlich nicht ausreicht.
                    </p>
                    <p>
                        Dann kommt ein Fabrikant in K.&apos;s Büro, um mit ihm über ein Geschäft zu sprechen. K. ist
                        unaufmerksam und kann ihm nicht richtig zuhören, da er sich um den Prozess sorgt. Etwas später
                        kommt der Direktor-Stellvertreter und nimmt K. den Auftrag ab. Nach dem Gespräch steht K. der
                        Entscheidung, seine Verteidigung selbst in die Hand zu nehmen, zweifelhaft gegenüber. Später
                        kommt der Fabrikant wieder in K.&apos;s Büro und sagt, dass er von einem Maler, der für das
                        Gericht arbeite, von dem Prozess wisse. Der Fabrikant empfiehlt ihm, sich von dem Maler
                        Ratschläge geben zu lassen, weil er viele Richter kenne.
                    </p>

                    <p>
                        Daraufhin fährt K. zum Maler. Dieser wohnt in einer noch ärmeren Gegend als die, wo sich das
                        Gericht befindet. Als Erstes wird er von mehreren aufdringlichen Mädchen zum Maler geführt, die
                        sich dann mit ihm ins Zimmer schleichen. Der Maler weist sie jedoch ab und beschwert sich bei K.
                        über ihr Verhalten. Danach dreht sich das Gespräch erstmal um ein Gemälde, das sehr einem der
                        Bilder im Büro des Advokaten ähnelt und einen Richter zeigt.
                    </p>

                    <p>
                        Der Maler sagt, da K. unschuldig sei, werde der Prozess einfach zu gewinnen sein. Er wolle ihm
                        helfen, da er einige Beziehungen zu den Gerichtsbeamten habe. Außerdem bemerkt er, dass alles
                        zum Gericht gehöre, auch die Mädchen vor der Tür. Der Maler sagt, dass es drei Möglichkeiten
                        gebe, K. zu befreien: Den wirklichen Freispruch, auf den allerdings keine Person Einfluss habe
                        und bei dem nur K.&apos;s Unschuld zähle. Diese Art sei aber riskant, da keiner von den vielen
                        Angeklagten, von dem der Maler hörte, wirklich freigesprochen wurde. Die zweite Möglichkeit,
                        scheinbarer Freispruch, bestehe daraus, den Richtern ein Bestätigungsschreiben für K.&apos;s
                        Unschuld zu geben, sodass der Richter ihn freispreche. Die einzige Einschränkung sei, dass K.
                        nur bei der unteren Instanz freigesprochen sei, der Prozess aber nur von der obersten Instanz
                        beendet werden könne. Das würde dazu führen, dass K. nach einer Zeit wieder verhaftet werde und
                        der Prozess von neuem beginne. Die dritte Möglichkeit ist die Verschleppung, bei der der Prozess
                        künstlich auf der unteren Gerichtsebene bleibe, in dem man den Richter ständig beeinflusse.
                        Dadurch werde eine mögliche Verurteilung oder erneute Verhaftung ausgeschlossen, K. müsse aber
                        regelmäßig Untersuchungen besuchen, um den Anschein eines laufenden Prozesses zu erhalten.
                    </p>

                    <p>
                        Nach dem Gespräch beschließt K. zu gehen und sich später für eine der Möglichkeiten zu
                        entscheiden. Der Maler gibt ihm noch mehrere gleich aussehende Bilder von Heidelandschaften mit.
                        Beim Herausgehen bemerkt K., dass hinter der Tür Gerichtskanzleien sind, woraufhin der Maler
                        entgegnet, dass <i>&quot;Gerichtskanzleien [...] fast auf jedem Dachboden [seien]&quot;</i>.
                    </p>

                    <h2>Personen</h2>
                    <h3>Josef K.</h3>
                    <ul>
                        <li>nimmt den Prozess jetzt ernst</li>
                        <li>sucht nach einer Lösung und nimmt Hilfe an</li>
                    </ul>

                    <h3>Weitere Personen</h3>
                    <ul>
                        <li>Advokat Huld</li>
                        <li>Leni</li>
                        <li>Direktor-Stellvertreter</li>
                        <li>Fabrikant</li>
                        <li>Maler Titorelli</li>
                        <li>Gerichtsdiener</li>
                    </ul>

                    <h2>Orte</h2>
                    <p>
                        Das Kapitel spielt am Anfang in K.&apos;s Büro, dann in der Wohnung vom Maler Titorelli.
                    </p>

                    <h2>Gedanken / Fragen / Eindrücke / Widersprüche</h2>
                    <ul>
                        <li>Wenn das Gericht geheim ist, warum wissen dann so viele davon?</li>
                        <li>Wer nimmt welche Rolle ein und wer steht tatsächlich auf K.&apos;s Seite?</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
