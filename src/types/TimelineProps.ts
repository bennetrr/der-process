import {ReactNodeLike} from "prop-types";
import {ImageProps} from "./ImageProps";

export interface TimelineProps {
    children: ReactNodeLike;
    width: string;
}

export interface TimelineItemProps {
    date: string;
    children: ReactNodeLike;
    image?: ImageProps;
}

export interface TimelineItemImageProps {
    image: ImageProps;
}
