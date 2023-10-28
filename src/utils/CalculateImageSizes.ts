import {calculatedImageSizes} from "$/types/ImageProps";

export function calculateImageSizes(width: number | "auto", height: number | "auto", originalWidth: number | undefined, originalHeight: number | undefined): calculatedImageSizes {
    // Automatic scaling does not preserve the ratio of the picture, so it's not supported
    if (width === "auto" && height === "auto") throw new Error(`Image: Width and height cannot be both \"auto\".`);

    // Both sizes controlled by props
    if (width !== "auto" && height !== "auto") return {width, height};

    // One side is controlled by the ratio, one by the props
    if (originalWidth === undefined || originalHeight === undefined) throw new Error(`Image: Original width and height are needed to compute ratio, but only one or neither is given.`);

    //  Fixed height
    if (width === "auto" && typeof height === "number") return {
        width: originalWidth / originalHeight * height,
        height: height
    };

    // Fixed width
    if (height === "auto" && typeof width === "number") return {
        width: width,
        height: originalHeight / originalWidth * width
    };

    // Not supported
    throw new Error(`Image: Unsupported argument constellation`);
}
