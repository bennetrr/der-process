import React, {memo, useEffect, useRef} from "react";
import {Network} from "vis-network";
import VisNetworkProps from "$/types/VisNetworkProps";
import useContentDimensions from "$/utils/ContentDimensionsHook";

export default memo(function VisNetwork({nodes, edges, options, events, getNetwork}: VisNetworkProps) {
    const container = useRef<HTMLDivElement>(null);
    const network = useRef<Network>();
    const {contentWidth, contentHeight} = useContentDimensions();

    useEffect(() => {
        if (container.current === null) return;
        network.current = new Network(container.current, {nodes, edges}, options || {});

        getNetwork && getNetwork(network.current);

        // Apply events
        events && events.forEach(x => network.current && network.current.on(x.event, x.callback));
    }, [container, nodes, edges, options, events, getNetwork]);

    if (network.current !== undefined) {
        network.current.setSize(`${contentWidth}px`, `${contentHeight}px`);
        network.current.fit();
    }

    return (
        <div ref={container} style={{width: contentWidth, height: contentHeight}}/>
    );
}, () => {
    return true;
});
