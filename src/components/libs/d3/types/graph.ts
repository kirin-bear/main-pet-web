import type Node from "@/components/libs/d3/types/node";
import type Link from "@/components/libs/d3/types/link";

interface Graph {
    nodes: Node[],
    links: Link[]
}

export default Graph;