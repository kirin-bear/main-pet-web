<script lang="ts">
import {defineComponent, ref} from "vue";
import {useUserInformationStore} from "@/stores/user-information";

export default defineComponent({
	name: 'user-about',
	setup: function () {

		// подключим store для вывода информации
		const userInformationStore = useUserInformationStore();
		// вытащим данные
		userInformationStore.fetch();

		// присвоим их элементу на странице
		let email = ref(userInformationStore.email);

		return { email }
	}
})
</script>

<template>
	<div>Какая-то информация о пользователе {{ email }}</div>
</template>

<style scoped>

</style>