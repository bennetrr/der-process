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
    align: "left" | "right"
    desc: string
    height: number
    width: number
}

export interface TimelineItemImageProps {
    image: TimelineItemImage
}