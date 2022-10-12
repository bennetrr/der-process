import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";
import VisNetworkProps from "../types/VisNetworkProps";
import useContentDimensions from "../utils/ContentDimensionsHook";

export default function VisNetwork({nodes, edges, options, events}: VisNetworkProps) {
    const visJsRef = useRef<HTMLDivElement>(null);
    const [network, setNetwork] = useState<Network>();
    const {contentWidth, contentHeight} = useContentDimensions();

    useEffect(() => {
        const nw = visJsRef.current && new Network(visJsRef.current, {nodes, edges}, options || {});
        nw && setNetwork(nw);

        // Apply events
        nw && events && events.forEach(x => nw.on(x.event, x.callback));
    }, [visJsRef, nodes, edges, options, events]);

    network && network.setSize(`${contentWidth}px`, `${contentHeight}px`);
    network && network.fit();

    return (
        <div ref={visJsRef} style={{width: contentWidth, height: contentHeight}}/>
    );
}
