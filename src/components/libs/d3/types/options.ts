import type Node from "@/components/libs/d3/types/node";
import type Link from "@/components/libs/d3/types/link";

interface Options {
    nodeId: (node: Node) => number, // given d in nodes, returns a unique identifier (int)
    nodeGroup: (node: Node) => string // given d in nodes, returns an (ordinal) value for color
    nodeGroups: boolean, // it's turn on array of ordinal values representing the node groups
    nodeTitle: (node: Node) => string, // given d in nodes, a title string
    nodeFill: string, // node stroke fill (if not using a group color encoding)
    nodeStroke: string, // node stroke color
    nodeStrokeWidth: number, // node stroke width, in pixels
    nodeStrokeOpacity: number, // node stroke opacity
    nodeRadius: number, // node radius, in pixels
    nodeStrength: number|null,
    linkSource: (link: Link) => number, // given d in links, returns a node identifier string
    linkTarget: (link: Link) => number, // given d in links, returns a node identifier string
    linkStroke: (link: Link) => string, // link stroke color
    linkStrokeOpacity: number,  // link stroke opacity
    linkStrokeWidth: (link: Link) => number, // given d in links, returns a stroke width in pixels
    linkStrokeLinecap: string, // link stroke linecap
    linkStrength: number|null,
    colors: readonly string[], // an array of color strings, for the node groups
    width: number, // outer width, in pixels
    height: number, // outer height, in pixels
    invalidation: Promise<void>|null // when this promise resolves, stop the simulation
}

export default Options;