import {useEffect, useState} from "react";

export default function useContentDimensions() {
    const [contentWidth, setContentWidth] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);

    const updateWidthAndHeight = () => {
        setContentWidth(window.innerWidth);
        setContentHeight(window.innerHeight - 50);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        updateWidthAndHeight();
    });

    return {contentWidth, contentHeight};
}
