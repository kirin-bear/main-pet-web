<script type="ts">
import D3GraphNetworkV2 from "@/components/libs/d3/d3-graph-network-v2.vue";
import {defineComponent, ref} from "vue";
import {useMemoriesStore} from "@/stores/memories/memory";
import {useMemoriesLinksStore} from "@/stores/memories/memory-link";

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default defineComponent({
    name: "memories",
    components: {
        D3GraphNetworkV2
	},
	setup: function() {

        const memoriesStore = useMemoriesStore();
        const memoriesLinksStore = useMemoriesLinksStore();

        const nodes = [];
        const links = [];

        const draw = ref(false);

        async function fetchMemories() {

            await memoriesStore.fetch();
            memoriesStore.list.forEach((memory) => {
                nodes.push({
                    id: memory.id,
                    group: random(1, 4)
                });
            });

            await memoriesLinksStore.fetch();
            memoriesLinksStore.list.forEach((memoryLink) => {
                links.push({
                    source: memoryLink.sourceId,
                    target: memoryLink.targetId,
                    value: 2
                });
            })

            draw.value = true;
        }

        fetchMemories();

        return {nodes, links, draw}
	},
});
</script>



<template>
    <div class="main__user__memories">
        <div><h1>Мои воспоминания</h1></div>
        <div style="width: 100%;height: 100vh;">
            <D3GraphNetworkV2 v-if="draw" :nodes="nodes" :links="links" />
        </div>
    </div>
</template>

<style scoped>

</style>