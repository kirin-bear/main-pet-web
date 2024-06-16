<script lang="ts">
import {defineComponent, onMounted} from "vue";
import * as d3 from "d3";
import forceGraph from "@/components/libs/d3/force-graph";
import type Graph from "@/components/libs/d3/types/graph";
import type Options from "@/components/libs/d3/types/options";
import type Node from "@/components/libs/d3/types/node";
import type Link from "@/components/libs/d3/types/link";

export default defineComponent({
  name: 'd3-graph-network-ts',
  props: {
    nodes: {
      type: Array as () => Node[],
    },
    links: {
      type: Array as () => Link[]
    }
  },
  setup: function (props) {

    const graph: Graph = {
      nodes: props.nodes || [],
      links: props.links || [],
    }

    const options: Options = {
      nodeId: (node) => node.id, // given d in nodes, returns a unique identifier (string)
      nodeGroup: (node) => node.group, // given d in nodes, returns an (ordinal) value for color
      nodeGroups: false, // an array of ordinal values representing the node groups
      nodeTitle: (node) => node.id + '%' + node.group, // given d in nodes, a title string
      nodeFill: "currentColor", // node stroke fill (if not using a group color encoding)
      nodeStroke: "#fff", // node stroke color
      nodeStrokeWidth: 0.5, // node stroke width, in pixels
      nodeStrokeOpacity: 1, // node stroke opacity
      nodeRadius: 10, // node radius, in pixels
      nodeStrength: -2,
      linkSource: (link) => link.source, // given d in links, returns a node identifier string
      linkTarget: (link) => link.target, // given d in links, returns a node identifier string
      linkStroke: () => "#999", // link stroke color
      linkStrokeOpacity: 0.6, // link stroke opacity
      linkStrokeWidth: () => 1.5, // given d in links, returns a stroke width in pixels
      linkStrokeLinecap: "round", // link stroke linecap
      linkStrength: null,
      colors: d3.schemeTableau10, // an array of color strings, for the node groups
      width: window.innerWidth,
      height: window.innerHeight, // outer width, in pixels
      invalidation: null, // when this promise resolves, stop the simulation
    }
    const svgElement = forceGraph(graph, options) ?? '';

    onMounted(() => {
      document.getElementById("memories-graph")?.append(svgElement);
    });
  }
})
</script>

<template>
  <div id="memories-graph"></div>
</template>
