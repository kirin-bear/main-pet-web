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
		let id = ref(userInformationStore.id);

		return { email, id }
	}
})
</script>

<template>
	<div class="main__about">
		<el-row>
			<el-col :span="12">
				<el-statistic class="main__about__statistic" title="#ID" :value="id" />
			</el-col>
			<el-col :span="12">
				<el-statistic class="main__about__statistic" title="Email" :value="email" />
			</el-col>
		</el-row>
	</div>
</template>

<style lang="scss" scoped>
@import "src/assets/variables";

.main__about {
	&__statistic {
		background-color: $background-color-secondary;
		padding: 20px;
		border-radius: 15px;
		margin-right: 15px;
		overflow: hidden;
	}
}
</style>