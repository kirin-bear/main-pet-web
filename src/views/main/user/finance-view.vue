<template>
	<div>
		<LeftMenu />
		<Finance />
	</div>
</template>

<script>
import LeftMenu from "@/components/main/left-menu.vue";
import Finance from "@/components/main/user/finance/finance.vue";

export default {
	name: "finance-view",
	components: {
		LeftMenu,
		Finance
	}
}
</script>

<style scoped>
</style>
