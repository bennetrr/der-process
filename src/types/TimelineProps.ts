import {ImageProps} from "./ImageProps";
import {ReactNode} from 'react';

export interface TimelineProps {
    children: ReactNode;
    width: string;
}

export interface TimelineItemProps {
    date: string;
    children: ReactNode;
    image?: ImageProps;
}

export interface TimelineItemImageProps {
    image: ImageProps;
}
