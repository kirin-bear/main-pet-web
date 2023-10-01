import * as d3 from "d3";
import type Graph from "@/components/libs/d3/types/graph";
import type Options from "@/components/libs/d3/types/options";
import type {DragBehavior} from "d3";

function forceGraph(graph: Graph, options: Options): SVGSVGElement {
    // Compute values.
    const N: number[] = d3.map(graph.nodes, options.nodeId).map(intern);
    const LS = d3.map(graph.links, options.linkSource).map(intern);
    const LT = d3.map(graph.links, options.linkTarget).map(intern);
    const T = d3.map(graph.nodes, options.nodeTitle);
    const G = d3.map(graph.nodes, options.nodeGroup).map(intern);
    const W = d3.map(graph.links, options.linkStrokeWidth);
    const L = d3.map(graph.links, options.linkStroke);

    // Replace the input nodes and links with mutable objects for the simulation.
    let nodes = d3.map(
        graph.nodes,
        (_, i) => ({ index: N[i], x: 0, y:0 }));
    let links = d3.map(
        graph.links,
        (_, i) => ({ source: LS[i], target: LT[i] })
    );

    // Construct the scales.
    const color = (G && options.nodeGroups) ? d3.scaleOrdinal(d3.sort(G), options.colors) : null;

    // Construct the forces.
    const forceNode = d3.forceManyBody();
    const forceLink = d3.forceLink(links).id((simulationNode, index) => N[index]);
    if (options.nodeStrength !== null) forceNode.strength(options.nodeStrength);
    if (options.linkStrength !== null) forceLink.strength(options.linkStrength);

    const simulation = d3
        .forceSimulation(nodes)
        .force("link", forceLink)
        .force("charge", forceNode)
        .force("center", d3.forceCenter())
        .on("tick", ticked);

    const svg = d3
        .create("svg")
        .attr("width", options.width)
        .attr("height", options.height)
        .attr("viewBox", [-options.width / 2, -options.height / 2, options.width, options.height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    const defs = svg.append("defs");

    let list = [
        {
            code: "imageUrl1",
            url: "https://img.icons8.com/arcade/512/genie.png",
        },
        {
            code: "imageUrl2",
            url: "https://img.icons8.com/arcade/512/batman-new.png",
        },
        {
            code: "imageUrl3",
            url: "https://img.icons8.com/arcade/512/ninja-turtle.png",
        },
        {
            code: "imageUrl4",
            url: "https://img.icons8.com/arcade/512/spiderman-head.png",
        },
    ];
    let codes = [];

    for (let image of list) {
        defs
            .append("pattern")
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("id", image.code)
            .attr("patternContentUnits", "objectBoundingBox")
            .append("image")
            .attr("height", "1")
            .attr("width", "1")
            .attr("href", image.url)
            .attr("preserveAspectRatio", "xMidYMid slice");
        codes.push(image.code);
    }
    const random = (min: any, max: any) => Math.floor(Math.random() * (max - min)) + min;

    const link = svg
        .append("g")
        .attr("stroke-opacity", options.linkStrokeOpacity)
        .attr("stroke-linecap", options.linkStrokeLinecap)
        .selectAll("line")
        .data(links)
        .join("line");

    const node = svg
        .append("g")
        .attr("fill", options.nodeFill)
        .attr("stroke", options.nodeStroke)
        .attr("stroke-opacity", options.nodeStrokeOpacity)
        .attr("stroke-width", options.nodeStrokeWidth)
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", options.nodeRadius)
        .call(drag(simulation));

    if (W) link.attr("stroke-width", (link, index) => W[index]);
    if (L) link.attr("stroke", (link, index) => L[index]);
    if (G)
        node.attr(
            "fill",
            () => "url(#imageUrl" + random(1, codes.length + 1) + ")"
        );
    if (T) node.append("title").text(({ index: i }) => T[i]);
    if (options.invalidation !== null) options.invalidation.then(() => simulation.stop());

    function ticked() {
        link
            .attr("x1", function (d) {
                return d.source.x
            })
            .attr("y1", function (d) {
              return d.source.y;
            })
            .attr("x2", function (d) {
                return d.target.x
            })
            .attr("y2", function (d) {
                return d.target.y;
            });

        node
            .attr("cx", function (d, index ) {
                const delta = d.x - options.width/2;
                //console.log(delta, d.x, d);
                if (delta > 0) return d.x - delta - 20;
                return d.x
            })
            .attr("cy", function (d) {
                const delta = d.y - options.height/2
                if (delta > 0) return d.y - delta - 20;
                return d.y
            });
    }

    function drag(simulation: any): DragBehavior<any, any, any> {
        function dragstarted(event: any): void {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            console.log(event);
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event: any): void {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event: any): void {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        return d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }

    const svgNode = svg.node();

    if (null === svgNode) {
        throw new Error("svg is null!!");
    }

    return Object.assign<SVGSVGElement, object>(svgNode, { scales: { color } });
}

function intern(value: any): any {
    return value !== null && typeof value === "object"
        ? value.valueOf()
        : value;
}

export default forceGraph;