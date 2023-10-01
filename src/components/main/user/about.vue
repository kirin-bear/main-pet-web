<script lang="ts">
import {defineComponent, reactive} from "vue";
import {useUserInformationStore} from "@/stores/user-information";

export default defineComponent({
	name: 'user-about',
	setup: function () {

		interface UserInformationState {
			id: number,
			email: string
		}

		const userInformationState = reactive<UserInformationState>({
			id: 0,
			email: ''
		});

		// подключим store для вывода информации
		const userInformationStore = useUserInformationStore();

		// опишем асинхронную функцию для обновления данных
		async function fetchUserInformation() {
			await userInformationStore.fetch();
			// после запроса обновляем данные
			userInformationState.id = userInformationStore.id;
			userInformationState.email = userInformationStore.email;
		}

		// вызываем метод
		fetchUserInformation();

		return { userInformationState }
	},
})
</script>

<template>
	<div class="main__about">
		<el-row>
            <h1>Обо мне</h1>
		</el-row>
		<el-row :gutter="15">
			<el-col :xs="24" :sm="24" :md="12">
				<div class="main__about__item">
					<div class="main__about__item__title">#ID</div>
					<div class="main__about__item__value">{{ userInformationState.id }}</div>
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :md="12">
				<div class="main__about__item">
					<div class="main__about__item__title">Email</div>
					<div class="main__about__item__value">{{userInformationState.email}}</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<style lang="scss" scoped>
@import "src/assets/variables";

.main__about {
	&__item {
		background-color: $background-color-secondary;
		padding: 20px;
		border-radius: 15px;
		overflow: hidden;
		margin-bottom: 15px;

		&__title {
			font-size: 13px;
			color: #717171;
			padding-bottom: 5px;
		}
	}
}
</style>