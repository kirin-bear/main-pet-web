<script lang="ts">
import {defineComponent} from "vue";
import Welcome from "@/components/main/welcome.vue";

export default defineComponent({
	name: "body",
	components: {
		Welcome
	}
})
</script>

<template>
	<Welcome />
</template>

<style scoped>

</style>
