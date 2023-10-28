import styles from "$/styles/Figurentableau.module.scss";

const figurenData = {
    "501": <>
        <h1>Advokat Huld</h1>
        <ul>
            <li>Herzkranker Mann kurz vor seinem Tod</li>
            <li>wohnt in dem Stadtteil, in dem sich auch die Gerichtskanzleien befinden</li>
            <li>viele Bekanntschaften zu Gerichtspersonen
                <ul>
                    <li>dienen der Informationsbeschaffung zu Prozessen seiner Mandanten</li>
                </ul>
            </li>
            <li>Beziehung zu Leni
                <ul>
                    <li>fühlt ich gestört durch Lenis Annäherungen zu den Angeklagten</li>
                </ul>
            </li>
            <li>hört sich gerne selbst reden</li>
            <li>ist selbstverliebt</li>
            <li>erzählt viel, bleibt aber untätig und zeigt keine Aktionen</li>
            <li>⇒ zeigt die Aussichtslosigkeit des Prozesses auf</li>
            <li>⇒ löst Ängste aus</li>
            <li>⇒ versucht, die Mandanten an sich zu binden</li>
        </ul>
    </>,
    "101": <>
        <h1>Albert K.</h1>
        <ul>
            <li>wird von K. als Karl vorgestellt, meldet sich beim Advokaten aber als Albert</li>
            <li>lebt auf dem Land</li>
            <li>Grundbesitzer</li>
            <li>hat K. großgezogen</li>
            <li>hat eine Tochter, Erna</li>
            <li>hektisch</li>
            <li>&quot;immer in Eile&quot;</li>
            <li>autoritär</li>
            <li>besorgt um das Ansehen der Familie</li>
            <li>übt Druck auf K. aus</li>
            <li>indiskret (macht K.&apos;s Prozess öffentlich, in dem er z.B. im Büro laut darüber spricht)</li>
        </ul>
    </>,
    "401": <>
        <h1>Frau Grubach</h1>
        <ul>
            <li>K.&apos;s Vermieterin</li>
            <li>Hauptmann Lanz, ihr Neffe, wohnt auch in der Pension</li>
            <li>eine der wenigen Frauen, denen K. sich nicht sexuell nähert</li>
            <li>fleißig</li>
            <li>ordnungsliebend</li>
            <li>gut informiert</li>
            <li>neugierig</li>
            <li>hat Vertrauen in K.</li>
            <li>hält die Pension ordentlich und rein</li>
            <li>K. ist &quot;ihr liebster Mieter&quot;</li>
            <li>Mutterersatz für K.
                <ul>
                    <li>Funktion als Dienerin</li>
                </ul>
            </li>
            <li>sieht Fräulein Bürstner wegen ihrer oft wechselnden Partner als Gefahr für die Pensionsreinheit an
                <ul>
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
            <li>wird von K. nur als Objekt wahrgenommen</li>
        </ul>
    </>,
    "0": <>
        <h1>Josef K.</h1>
        <h2>Persönliche Daten</h2>
        <ul>
            <li>30 Jahre alt</li>
            <li>arbeitet als Prokurist bei einer Bank
                <ul>
                    <li>empfindet seine Arbeit als sehr wichtig</li>
                </ul>
            </li>
            <li>lebt alleine in einem in einer Pension angemieteten Zimmer</li>
        </ul>
        <h2>Charaktereigenschaften</h2>
        <ul>
            <li>überrascht</li>
            <li>verständnislos</li>
            <li>verblüfft</li>
            <li>arrogant</li>
            <li>impulsiv</li>
            <li>überblickend</li>
            <li>empfindet den Prozess als ungerecht und Irrtum</li>
            <li>abwertend</li>
            <li>selbstsicher</li>
            <li>ambitioniert</li>
        </ul>
        <span className={styles.bigArrow}>↓</span>
        <span className={styles.bigArrowCenteredText}>Entwicklung</span>
        <ul>
            <li>fängt an, zu zweifeln</li>
            <li>sucht nach Hilfe und Auswegen</li>
            <li>merkt, dass er auf sich gestellt ist ⇒ kommt nicht weiter</li>
            <li>eigennützig; versucht immer, sich einen Vorteil zu verschaffen</li>
            <li>macht sich Sorgen</li>
        </ul>
        <span className={styles.bigArrow}>↓</span>
        <span className={styles.bigArrowCenteredText}>Entwicklung</span>
        <ul>
            <li>erkennt allmählich die Aussichtslosigkeit auf einen positiven Prozessausgang</li>
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
            <li>gibt auf</li>
            <li>gleichgültig</li>
            <li>verzweifelt</li>
            <li>ergibt sich seinem Schicksal</li>
            <li>begeht die Hinrichtung freiwillig</li>
        </ul>
    </>,
    "0->100": <>
        <h1>Josef K. und seine Familie</h1>
        <ul>
            <li>Josef ist weitestgehend von seiner Familie isoliert
                <ul>
                    <li>meidet seine Cousine, die in der gleichen Stadt lebt</li>
                    <li>hat seine Mutter seit drei Jahren nicht mehr gesehen</li>
                </ul>
            </li>
            <li>sein Onkel hat ihn großgezogen und ist immer noch sein Vormund</li>
        </ul>
    </>,
    "405": <>
        <h1>Leni</h1>
        <ul>
            <li>jung</li>
            <li>Pflegerin des kranken Advokaten</li>
            <li>sexuelle Beziehung zum Advokat Huld und zum Kaufmann Block</li>
            <li>Vereinigung von Sex und Macht</li>
            <li>fühlt sich zu den Angeklagten hingezogen</li>
            <li>weiß viel über das Gericht</li>
            <li>aktiv und dominant</li>
            <li>zählt K. als ihren Besitz</li>
            <li>Huld, Block sowie K. sind von ihr abhängig</li>
        </ul>
    </>,
    "505": <>
        <h1>Kaufmann Rudi Block</h1>
        <ul>
            <li>ehemaliger Kaufmann</li>
            <li>klein und dürr</li>
            <li>gekrümmte Körperhaltung</li>
            <li>Tod seiner Frau kurz vor Anfang seines Prozesses</li>
            <li>Angeklagter des Gerichts</li>
            <li>seit fünf Jahren im Prozess, trotzdem unabsehbares Ende</li>
            <li>Mandant von Advokat Huld
                <ul>
                    <li>unzufrieden mit seiner Arbeit</li>
                    <li>deshalb Beauftragung von 5 weiteren Advokaten</li>
                </ul>
            </li>
            <li>konzentriert sich voll auf den Prozess</li>
            <li>hat für den Prozess sein ganzes Geld verwendet und lebt deshalb beim Advokaten</li>
            <li>viele Parallelen zu K.</li>
            <li>unterwürfig gegenüber Huld</li>
            <li>lässt sich von Huld demütigen</li>
        </ul>
    </>
};

export default figurenData;
