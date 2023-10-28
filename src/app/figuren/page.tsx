"use client";
import React, {useCallback, useRef, useState} from "react";
import genericStyles from "$/styles/Page.module.scss";
import pageStyles from "$/styles/Figurentableau.module.scss";

import Head from "next/head";
import Header from "$/components/Header";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faFolderOpen} from "@fortawesome/free-solid-svg-icons";

import VisNetwork from "$/components/VisNetwork";
import {Edge, Node, Options} from "vis-network/peer/umd/vis-network.min";
import {DataSet} from "vis-data/peer/umd/vis-data.min";
import {VisClickEvent, VisNetworkEvent} from "$/types/VisNetworkProps";
import {Network} from "vis-network";

import figurenData from "$/components/FigurenData";


//region Network Data
const nodes = new DataSet<Node, "id">([
    {id: 0, label: "Josef K."},

    // K.'s Familie
    {id: 100, group: "familie", label: "Familie"},
    {id: 101, group: "familie", label: "Albert K."},
    {id: 102, group: "familie", label: "Erna"},

    // Gerichtspersonen
    {id: 200, group: "gericht", label: "Gericht"},
    {id: 201, group: "gericht", label: "Wächter Franz und Willem"},
    {id: 202, group: "gericht", label: "Aufseher"},
    {id: 203, group: "gericht", label: "Untersuchungsrichter"},
    {id: 204, group: "gericht", label: "Gerichtsstudent Bertold"},
    {id: 205, group: "gericht", label: "Gerichtsdiener"},
    {id: 206, group: "gericht", label: "Prügler"},
    {id: 207, group: "gericht", label: "Gefängniskaplan"},
    {id: 208, group: "gericht", label: "Strafvollzieher"},

    // Arbeit / Bank
    {id: 300, group: "arbeit", label: "Arbeit"},
    {id: 301, group: "arbeit", label: "Rabensteiner, Kullich & Kaminer"},
    {id: 302, group: "arbeit", label: "Direktor-Stellvertreter"},
    {id: 303, group: "arbeit", label: "Diener"},

    // Frauen
    {id: 400, group: "frauen", label: "Frauen"},
    {id: 401, group: "frauen", label: "Frau Grubach"},
    {id: 402, group: "frauen", label: "Fräulein Bürstner"},
    {id: 403, group: "frauen", label: "Frau des Gerichtsdieners"},
    {id: 404, group: "frauen", label: "'Mädchen' in der Kanzlei"},
    {id: 405, group: "frauen", label: "Leni"},
    {id: 406, group: "frauen", label: "Mädchen in Titorellis Haus"},

    // Helfer K.'s
    {id: 500, group: "helfer", label: "Helfer"},
    {id: 501, group: "helfer", label: "Advokat Huld"},
    {id: 502, group: "helfer", label: "Kanzleidirektor"},
    {id: 503, group: "helfer", label: "Fabrikant"},
    {id: 504, group: "helfer", label: "Maler Titorelli"},
    {id: 505, group: "helfer", label: "Kaufmann Rudi Block"}
]);

const edges = new DataSet<Edge, "id">([
    // K.'s Familie
    {id: "0->100", from: 0, to: 100, label: "Distanziert / Besorgt"},
    {id: "100->101", from: 100, to: 101, label: "Onkel / Neffe"},
    {id: "100->102", from: 100, to: 102, label: "Cousine / Cousin"},

    // Gerichtspersonen
    {id: "0->200", from: 0, to: 200, label: ""},
    {id: "200->201", from: 200, to: 201, label: "Verhaften"},
    {id: "200->202", from: 200, to: 202, label: ""},
    {id: "200->203", from: 200, to: 203, label: ""},
    {id: "200->204", from: 200, to: 204, label: ""},
    {id: "200->205", from: 200, to: 205, label: ""},
    {id: "200->206", from: 200, to: 206, label: ""},
    {id: "200->207", from: 200, to: 207, label: ""},
    {id: "200->208", from: 200, to: 208, label: ""},

    // Arbeit / Bank
    {id: "0->300", from: 0, to: 300, label: ""},
    {id: "300->301", from: 300, to: 301, label: "Kollegen"},
    {id: "300->302", from: 300, to: 302, label: ""},
    {id: "300->303", from: 300, to: 303, label: ""},

    // Frauen
    {id: "0->400", from: 0, to: 400, label: ""},
    {id: "400->401", from: 400, to: 401, label: "Vermieterin"},
    {id: "400->402", from: 400, to: 402, label: "Nachbarin"},
    {id: "400->403", from: 400, to: 403, label: ""},
    {id: "400->404", from: 400, to: 404, label: ""},
    {id: "400->405", from: 400, to: 405, label: ""},
    {id: "400->406", from: 400, to: 406, label: ""},

    // Helfer K.'s
    {id: "0->500", from: 0, to: 500, label: ""},
    {id: "500->501", from: 500, to: 501, label: ""},
    {id: "500->502", from: 500, to: 502, label: ""},
    {id: "500->503", from: 500, to: 503, label: ""},
    {id: "500->504", from: 500, to: 504, label: ""},
    {id: "500->505", from: 500, to: 505, label: ""},

    // ---------------------------------------------------------------------------------
    // Kreuzverbindungen
    {id: "206->201", from: 206, to: 201, label: "Bestraft"},  // Prügler bestraft Wächter
    {id: "405->501", from: 405, to: 501, label: "Pflegt / Verhältnis"},  // Leni <-> Huld
    {id: "101->501", from: 101, to: 501, label: "Alte Freunde"},  // Onkel <-> Huld
    {id: "505->501", from: 505, to: 501, label: "Mandat"},  // Kaufmann <-> Huld
    {id: "403->205", from: 403, to: 205, label: "Ehe"},  // Gerichtsdiener ⚭ Frau
    {id: "403->204", from: 403, to: 204, label: "Verhältnis"},  // Frau des Gerichtsdieners <-> Student
    {id: "503->504", from: 503, to: 504, label: "Freunde"},  // Maler <-> Fabrikant
    {id: "501->502", from: 501, to: 502, label: "Freunde"}  // Advokat <-> Kanzleidirektor
]);

const options: Options = {
    configure: {enabled: false},
    autoResize: false,
    edges: {
        color: {
            color: "#ffffff",
            highlight: "#ffe502"
        },
        font: {
            color: "#ffffff",
            strokeWidth: 0
        },
        smooth: false
    },
    nodes: {
        color: {
            background: "#000000",
            border: "#ffe502",
            highlight: {
                background: "#000000",
                border: "#ffe502"
            }
        },
        font: {color: "#ffffff"},
        //@ts-ignore
        margin: 15,
        shape: "box"
    },
    groups: {
        familie: {
            color: {
                background: "#000000",
                border: "#ff9102",
                highlight: {
                    background: "#000000",
                    border: "#ff9102"
                }
            }
        },
        gericht: {
            color: {
                background: "#000000",
                border: "#02b3ff",
                highlight: {
                    background: "#000000",
                    border: "#02b3ff"
                }
            }
        },
        arbeit: {
            color: {
                background: "#000000",
                border: "#02ff3d",
                highlight: {
                    background: "#000000",
                    border: "#02ff3d"
                }
            }
        },
        frauen: {
            color: {
                background: "#000000",
                border: "#6702ff",
                highlight: {
                    background: "#000000",
                    border: "#6702ff"
                }
            }
        },
        helfer: {
            color: {
                background: "#000000",
                border: "#ff0202",
                highlight: {
                    background: "#000000",
                    border: "#ff0202"
                }
            }
        }
    },
    physics: {
        solver: "hierarchicalRepulsion",
        hierarchicalRepulsion: {avoidOverlap: 1}
    },
    interaction: {
        dragNodes: false,
        zoomView: true,
        dragView: true,
        selectable: true,
        selectConnectedEdges: false
    }
};
//endregion

export default function Home() {
    const network = useRef<Network>();
    const getNetwork = useCallback((n: Network) => network.current = n, [network]);

    //region Click Events
    const [selected, setSelected] = useState<JSX.Element>();
    const [noInfoNotificationVis, setNoInfoNotificationVis] = useState(false);

    const selectElement = (e: VisClickEvent) => {
        const selected = e.edges.length !== 0 ? e.edges[0].toString() : e.nodes[0].toString();

        // Show a notification if the selected object has no data
        if (!(selected in figurenData)) {
            setNoInfoNotificationVis(true);
            setTimeout(() => setNoInfoNotificationVis(false), 5 * 1000);
            deselectElement();
            return;
        }
        // @ts-ignore
        setSelected(figurenData[selected]);
    };

    const deselectElement = () => {
        setSelected(undefined);
        network.current && network.current.unselectAll();
    };

    const showAll = () => {
        const temp: JSX.Element[] = [];
        // @ts-ignore
        for (let key in figurenData) temp.push(figurenData[key]);
        setSelected(<>{temp}</>);
    };

    const events: VisNetworkEvent[] = [
        {event: "selectNode", callback: selectElement},
        {event: "selectEdge", callback: selectElement}
    ];
    //endregion

    const [problemWarningVis, setProblemWarningVis] = useState(true);

    return (
        <div className={genericStyles.container}>
            <Head>
                <title>Figurentableau | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <Header/>
            <div className={genericStyles.pageContentGray}>
                <VisNetwork nodes={nodes} edges={edges} options={options} events={events} getNetwork={getNetwork}/>

                <div className={pageStyles.floatingWarningContainer}
                     style={{visibility: problemWarningVis ? "visible" : "hidden"}}>
                    <div className={pageStyles.floatingWarning}>
                        Ansicht kann bewegt und mit dem Mausrad gezoomt werden. Für Details auf Knoten oder Verbindungen
                        klicken.
                        <FontAwesomeIcon icon={faClose} className={pageStyles.floatingWarningCloseIcon}
                                         onClick={() => setProblemWarningVis(false)}/>
                    </div>
                </div>

                <div className={pageStyles.noInfoNotificationContainer}
                     style={{visibility: noInfoNotificationVis ? "visible" : "hidden"}}>
                    <div className={pageStyles.noInfoNotification}>
                        Keine Informationen verfügbar
                    </div>
                </div>

                <div className={pageStyles.viewAllButton} title={"Alle anzeigen"} onClick={showAll}>
                    <FontAwesomeIcon icon={faFolderOpen}/>
                </div>

                <div className={pageStyles.figurenPopupContainer}
                     style={{visibility: selected !== undefined ? "visible" : "hidden"}} onClick={deselectElement}>
                    <div className={pageStyles.figurenPopup} onClick={e => e.stopPropagation()}>
                        <FontAwesomeIcon icon={faClose} className={pageStyles.figurenPopupCloseIcon}
                                         onClick={deselectElement}/>
                        {selected || <p>Ein Fehler ist aufgetreten</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
