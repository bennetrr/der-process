import React, { useState } from "react";
import styles from "../../styles/Page.module.scss";

import Head from "next/head";
import Header from "../../components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import VisNetwork from "../../components/VisNetwork";
import { DataSet, Edge, Node, Options } from "vis-network/standalone";
import { VisClickEvent, VisNetworkEvent } from "../../types/VisNetworkProps";

export default function Home() {
    const nodes = new DataSet<Node, "id">([
        {id: 0, label: "Josef K."},
        {id: 1, label: "Wächter Franz und Willem"},
        {id: 2, label: "Frau Grubach"},
        {id: 3, label: "Fräulein Bürstner"},
        {id: 4, label: "Direktor-Stellvertreter"},
        {id: 5, label: "Untersuchungsrichter"},
        {id: 6, label: "Albert K."},
        {id: 7, label: "Advokat Huld"},
        {id: 8, label: "Leni"},
        {id: 9, label: "Maler Titorelli"},
        {id: 10, label: "Kaufmann Rudi Block"},
        {id: 11, label: "Gefängniskaplan"},
    ]);

    const edges = new DataSet<Edge, "id">([
        {id: "1->2", from: 1, to: 2, label: "Onkel / Neffe"},
        {id: "1->3", from: 1, to: 3},
        {id: "1->4", from: 1, to: 4},
        {id: "2->4", from: 2, to: 4},
        {id: "3->4", from: 3, to: 4},
        {id: "1->5", from: 1, to: 5}
    ]);


    const options: Options = {
        configure: { enabled: false },
        edges: {
            color: {
                color: "#ffffff",
                highlight: "#ffe502"
            },
            font: {
                color: "#ffffff",
                strokeWidth: 0,
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
            font: { color: "#ffffff" },
            //@ts-ignore
            margin: 15,
            shape: "box"
        },
        physics: {
            solver: "hierarchicalRepulsion",
            hierarchicalRepulsion: { avoidOverlap: 1 }
        },
        interaction: {
            dragNodes: false,
            zoomView: false,
            dragView: false,
            selectable: true,
            selectConnectedEdges: false
        }
    };

    const handleClickEvent = (e: VisClickEvent) => {
        let selected;

        if (e.edges.length !== 0) {
            selected = e.edges[0];
            console.log("Edge selected")
        } else if (e.nodes.length !== 0) {
            selected = e.nodes[0];
            console.log("Node selected!")
        }
        console.log(`Selected: ${selected}`)
    };

    const events: VisNetworkEvent[] = [
        {event: "selectNode", callback: handleClickEvent},
        {event: "selectEdge", callback: handleClickEvent}
    ];

    const [problemWarningVis, setProblemWarningVis] = useState(true);

    return (
        <div className={styles.container}>
            <Head>
                <title>Figurentableau | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <div className={styles.pageContentGray}>
                <VisNetwork nodes={nodes} edges={edges} options={options} events={events}/>
            </div>

            <div className={styles.floatingWarningContainer}>
                <div className={styles.floatingWarning} style={{visibility: problemWarningVis ? "visible" : "hidden"}}>
                    Darstellungsprobleme? Einfach nochmal auf den &quot;Figurentableau&quot;-Tab in der Menüleiste drücken!
                    <FontAwesomeIcon icon={faClose} className={styles.floatingWarningCloseIcon}
                                     onClick={() => setProblemWarningVis(false)}/>
                </div>
            </div>
        </div>
    );
}