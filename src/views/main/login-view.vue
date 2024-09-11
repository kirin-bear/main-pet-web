<template>
	<div>
		<LeftMenu />
		<LoginForm/>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import LeftMenu from "@/components/main/left-menu.vue";
import LoginForm from "@/components/main/auth/login-form.vue";

export default defineComponent({
	name: 'login-view',
	components: {
		LoginForm,
		LeftMenu
	}
})
</script>

<style scoped>

</style>
