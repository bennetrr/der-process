import styles from "../styles/Figurentableau.module.scss"

const figurenData = {
    "501": <>
        <h1>Advokat Huld</h1>
        <ul>
            <li>Herzkranker Mann kurz vor seinem Tod</li>
            <li>Wohnt in dem Stadtteil, in dem sich auch die Gerichtskanzleien befinden</li>
            <li>Viele Bekanntschaften zu Gerichtspersonen<ul>
                <li>Informationsbeschaffung zu Prozessen seiner Mandanten</li>
            </ul>
            </li>
            <li>Beziehung zu Leni<ul>
                <li>Gestört durch Lenis rangemache an Angeklagte</li>
            </ul>
            </li>
            <li>Hört sich gerne selbst reden</li>
            <li>Erzählt, zeigt aber keine Aktionen</li>
            <li>⇒ Zeigt die aussichtslosigkeit des Prozesses</li>
            <li>⇒ Bildet Ängste</li>
            <li>⇒ Bindet die Mandanten an sich</li>
        </ul>
    </>,
    "101": <>
        <h1>Albert K.</h1>
        <ul>
            <li>Wird von K. als Karl vorgestellt, meldet sich beim Advokaten aber als Albert</li>
            <li>Lebt auf dem Land</li>
            <li>Grundbesitzer</li>
            <li>Hat K. großgezogen</li>
            <li>Hat eine Tochter, Erna</li>
            <li>hektisch</li>
            <li>&quot;immer in Eile&quot;</li>
            <li>autoritär</li>
            <li>Besorgt um das Ansehen der Familie</li>
            <li>übt Druck auf K. aus</li>
            <li>indiskret (macht K.&apos;s Prozess öffentlich, in dem er z.B. im Büro laut darüber spricht)</li>
        </ul>
    </>,
    "401": <>
        <h1>Frau Grubach</h1>
        <ul>
            <li>K.&apos;s Vermieterin</li>
            <li>Ein Neffe, Hauptmann Lanz, der auch in der Pension wohnt</li>
            <li>Eine der wenigen Frauen, denen K. sich nicht sexuell nähert</li>
            <li>fleißig</li>
            <li>ordnungsliebend</li>
            <li>gut informiert</li>
            <li>neugierig</li>
            <li>Hat Vertrauen in K.</li>
            <li>Hält die Pension ordentlich und rein</li>
            <li>K. ist &quot;ihr liebster Mieter&quot;</li>
            <li>Mutterersatz für K.<ul>
                <li>Funktion als Dienerin</li>
            </ul>
            </li>
            <li>Sieht Fräulein Bürstner wegen ihren oft wechselnden Partnern als Gefahr für die Pensionsreinheit an<ul>
                <li>Konflikt mit K., der wöchentlich eine Prostituierte besucht</li>
            </ul>
            </li>
        </ul>
    </>,
    "402": <>
        <h1>Fräulein Bürstner</h1>
        <ul>
            <li>K.&apos;s Nachbarin</li>
            <li>Schreibmaschinistin</li>
            <li>jung</li>
            <li>alleinstehend</li>
            <li>&quot;lieb, freundlich, ordentlich, pünktlich, arbeitsam&quot; (laut Frau Grubach)</li>
            <li>selbstbewusst</li>
            <li>Wird von K. nur als Objekt wahrgenommen</li>
        </ul>
    </>,
    "0": <>
        <h1>Josef K.</h1>
        <h2>Persönliche Daten</h2>
        <ul>
            <li>30 Jahre alt</li>
            <li>Arbeitet als Prokurist bei einer Bank<ul>
                <li>Empfindet seine Arbeit als sehr wichtig</li>
            </ul></li>
            <li>Lebt alleine in einem in einer Pension gemietetem Zimmer</li>
        </ul>
        <h2>Charaktereigenschaften</h2>
        <ul>
            <li>überrascht</li>
            <li>verständnislos</li>
            <li>verblüfft</li>
            <li>arrogant</li>
            <li>impulsiv</li>
            <li>überblickend</li>
            <li>empfindlich den Prozess als ungerecht</li>
            <li>abwertend</li>
            <li>selbstsicher</li>
            <li>ambitioniert</li>
        </ul>
        <span className={styles.bigArrow}>↓</span>
        <span className={styles.bigArrowCenteredText}>Entwicklung</span>
        <ul>
            <li>fängt an, zu zweifeln</li>
            <li>sucht nach Hilfe</li>
            <li>merkt, dass er auf sich gestellt ist ⇒ kommt nicht weiter</li>
            <li>eigennützig; versucht immer, sich einen Vorteil zu verschaffen</li>
            <li>macht sich Sorgen</li>
        </ul>
        <span className={styles.bigArrow}>↓</span>
        <span className={styles.bigArrowCenteredText}>Entwicklung</span>
        <ul>
            <li>unkonzentriert</li>
            <li>vernachlässigt seine Kunden</li>
            <li>arbeitsunfähig</li>
            <li>überfordert</li>
            <li>panisch</li>
            <li>beklemmt (kriegt keine Luft, enge Räume, dunkel, ärmlich)</li>
        </ul>
        <span className={styles.bigArrow}>↓</span>
        <span className={styles.bigArrowCenteredText}>Entwicklung</span>
        <ul>
            <li>gleichgültig</li>
            <li>verzweifelt</li>
            <li>begeht die Hinrichtung freiwillig</li>
        </ul>
    </>,
    "0->100": <>
        <h1>Josef K. und seine Familie</h1>
        <ul>
            <li>Josef ist weitestgehend von seiner Familie isoliert<ul>
                <li>Meidet seine Cousine, die in der gleichen Stadt lebt</li>
                <li>Hat seine Mutter seit drei Jahren nicht mehr gesehen</li>
            </ul>
            </li>
            <li>Sein Onkel hat ihn großgezogen und ist immer noch sein Vormund</li>
        </ul>
    </>,
    "405": <>
        <h1>Leni</h1>
        <ul>
            <li>jung</li>
            <li>Pflegerin des kranken Advokaten</li>
            <li>Sexuelle Beziehung zu Advokat Huld und zu Kaufman Block</li>
            <li>Vereinigung von Sex und Macht</li>
            <li>Fühlt sich zu Angeklagten hingezogen</li>
            <li>Weiß viel über das Gericht</li>
            <li>aktiv und dominant</li>
            <li>Zählt K. als ihren Besitz</li>
            <li>Huld, Block sowie K. sind von ihr abhängig</li>
        </ul>
    </>,
    "505": <>
        <h1>Kaufmann Rudi Block</h1>
        <ul>
            <li>Ehemaliger Kaufmann</li>
            <li>klein und dürr</li>
            <li>gekrümmte Körperhaltung</li>
            <li>Tod seiner Frau kurz vor Anfang seines Prozesses</li>
            <li>Angeklagter des Gerichts</li>
            <li>Seit fünf Jahren im Prozess, trotzdem unabsehbares Ende</li>
            <li>Mandant von Advokat Huld<ul>
                <li>Unzufrieden mit seiner Arbeit</li>
                <li>Deshalb 5 weitere Advokaten</li>
            </ul>
            </li>
            <li>Konzentriert sich voll auf den Prozess</li>
            <li>Hat für den Prozess sein ganzes Geld verwendet und lebt deshalb beim Advokaten</li>
            <li>viele Parallelen zu K.</li>
            <li>unterwürfig gegenüber Huld</li>
            <li>lässt sich von Huld demütigen</li>
        </ul>
    </>
};

export default figurenData;
