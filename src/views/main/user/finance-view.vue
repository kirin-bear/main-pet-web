<script lang="ts">
import LeftMenu from "@/components/main/left-menu.vue";
import Finance from "@/components/main/user/finance/finance.vue";
import {defineComponent} from "vue";

export default defineComponent({
	name: "finance-view",
	components: {
		LeftMenu,
		Finance
	}
})
</script>

<template>
	<div>
		<LeftMenu />
		<Finance />
	</div>
</template>

<style scoped>
</style>
