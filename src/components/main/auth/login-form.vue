<template>
	<div class="main__auth__login-form">
		<el-form
			class="main__auth__login-form__el-form"
			label-position="top"
			label-width="100px"
			:model="form"
			style="max-width: 660px"
		>
			<el-form-item :label="$t('main.auth.AuthForm.email')">
				<el-input v-model="form.email" />
			</el-form-item>
			<el-form-item :label="$t('main.auth.AuthForm.password')">
				<el-input type="password" v-model="form.password" />
			</el-form-item>
			<el-form-item class="main__auth__login-form__el-form__button">
				<el-button type="primary" @click="onSubmit">Войти</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import api from "@/plugins/kirin-bear-api/api";

export default defineComponent({
	name: "login-form",
	setup: function() {

		const form = reactive({
			email: '' as string,
			password: '' as string,
		});

		const onSubmit = () => {
			api.auth(form.email, form.password);
		}

		return { form, onSubmit };
	}
});
</script>

<style lang="scss" scoped>
@import 'src/assets/mixins/media';

.main__auth__login-form {
	width: 100%;
	height: 100vh;
	background-color: rgb(0 0 0 / 80%);
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;

	&__el-form {
		width: 300px;

		&__button {
			padding-top: 15px;
			& button {
				width: 100%;
			}
		}
	}

}

@include forMobile() {
	.main__auth__login-form__el-form {
		width: 75%;
	}
}

</style>