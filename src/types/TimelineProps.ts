import { ReactNodeLike } from "prop-types";

export interface TimelineProps {
    children: ReactNodeLike
    width: string
}

export interface TimelineItemProps {
    date: string
    children: ReactNodeLike
    image?: TimelineItemImage
}

export interface TimelineItemImage {
    uri: string
    width: string
    height: string
    align: "left" | "right"
}