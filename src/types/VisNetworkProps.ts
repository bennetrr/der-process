import { DataSet, Edge, NetworkEvents, Node, Options } from "vis-network";

export default interface VisNetworkProps {
    nodes: DataSet<Node>
    edges: DataSet<Edge>
    options?: Options
    events?: VisNetworkEvent[]
}

export interface VisNetworkEvent {
    event: NetworkEvents
    callback: (params?: any) => void
}

export interface VisClickEvent {
    edges: string[] | number[]
    event: object
    nodes: string[] | number[]
    pointer: object
}
