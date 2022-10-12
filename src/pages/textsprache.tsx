import React, { useState } from "react";
import styles from "../styles/Page.module.scss";

import Head from "next/head";
import Header from "../components/Header";
import createRange from "../utils/CreateRange";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { DataSet, Edge, Node, Options } from "vis-network/standalone";
import VisNetwork from "../components/VisNetwork";
import { BackgroundImage } from "../components/Images";

export default function Home() {
    const nodes = new DataSet<Node, "id">([
        {id: 0, label: "Textsprache"},
        {id: 1, label: "Monoperspektivisch (subjektive Erzählperspektive)"},
        {id: 2, label: "manchmal perspektivische Wechsel"},
        {id: 3, label: "nüchterne, emotionslose Sprache"},
        {id: 4, label: "zäh und monoton"},
        {id: 5, label: "hypotaktischer Satzbau"},
        {id: 6, label: "ständige Äußerung von Vermutungen"},
        {id: 7, label: "Benutzung des Konjunktivs"}
    ]);

    const edges = new DataSet<Edge, "id">(createRange(1, 7).map(x => {
        return {id: `0->${x}`, from: 0, to: x}
    }));

    const options: Options = {
        configure: { enabled: false },
        edges: {
            color: "#ffffff",
            smooth: false
        },
        nodes: {
            color: {
                background: "#000000",
                border: "#ffe502"
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
            selectable: false
        }
    };

    const [problemWarningVis, setProblemWarningVis] = useState(true);

    return (
        <div className={styles.container}>
            <Head>
                <title>Textsprache | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>

            <div className={styles.pageContentGray}>
                <VisNetwork nodes={nodes} edges={edges} options={options}/>
            </div>

            <div className={styles.floatingWarningContainer}>
                <div className={styles.floatingWarning} style={{visibility: problemWarningVis ? "visible" : "hidden"}}>
                    Darstellungsprobleme? Einfach nochmal auf den &quot;Themen&quot;-Tab in der Menüleiste drücken!
                    <FontAwesomeIcon icon={faClose} className={styles.floatingWarningCloseIcon}
                                     onClick={() => setProblemWarningVis(false)}/>
                </div>
            </div>
        </div>
    );
}
