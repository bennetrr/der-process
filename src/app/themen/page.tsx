"use client";
import React from "react";
import styles from "$/styles/Page.module.scss";

import Head from "next/head";
import Header from "$/components/Header";

import VisNetwork from "$/components/VisNetwork";
import {Edge, Node, Options} from "vis-network/peer/umd/vis-network.min";
import {DataSet} from "vis-data/peer/umd/vis-data.min";
import createRange from "$/utils/CreateRange";

export default function Home() {
    const nodes = new DataSet<Node, "id">([
        {id: 0, label: "Themen"},
        {id: 1, label: "Schuldfrage"},
        {id: 2, label: "Gesetz / Ordnung"},
        {id: 3, label: "Hierarchien"},
        {id: 4, label: "Korruption / Käuflichkeit"},
        {id: 5, label: "Motive (Augenmotiv)"},
        {id: 6, label: "Gerichtsbarkeit"},
        {id: 7, label: "Beziehungen / Macht"},
        {id: 8, label: "Frauen"}
    ]);

    const edges = new DataSet<Edge, "id">(createRange(1, 8).map(x => {
        return {id: `0->${x}`, from: 0, to: x};
    }));

    const options: Options = {
        configure: {enabled: false},
        edges: {
            color: "#ffffff",
            smooth: false
        },
        nodes: {
            color: {
                background: "#000000",
                border: "#ffe502"
            },
            font: {color: "#ffffff"},
            //@ts-ignore
            margin: 15,
            shape: "box"
        },
        physics: {
            solver: "hierarchicalRepulsion",
            hierarchicalRepulsion: {avoidOverlap: 1}
        },
        interaction: {
            dragNodes: false,
            zoomView: false,
            dragView: false,
            selectable: false
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Themen | Der Process - Lesetagebuch</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <Header/>
            <div className={styles.pageContentGray}>
                <VisNetwork nodes={nodes} edges={edges} options={options}/>
            </div>
        </div>
    );
}
