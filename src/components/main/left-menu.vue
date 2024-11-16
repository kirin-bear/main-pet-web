<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";

import {useAuthStore} from "@/stores/auth";

export default defineComponent({
	name: "left-menu",
	setup() {

		const authStore = useAuthStore();

		const state = reactive({
			isOpened: false as boolean,
			isAuthenticated: authStore.isAuthenticated as boolean,
		});

		return { ...toRefs(state) }
	},
	methods: {
		toggleMenu: function () {
			this.isOpened = !this.isOpened;
		}
	}
})
</script>

<template>
	<div class="main__left-menu">
		<div @click="toggleMenu" :class="{'open': isOpened, 'hamburger-button': true}">
			<div class="icon-left"></div>
			<div class="icon-right"></div>
		</div>
		<el-drawer
			v-model="isOpened"
			title="I am the title"
			:with-header="false"
			direction="ltr"
			class="main__left-menu__drawer"
		>
			<el-divider>
				<el-icon><div class="main__left-menu__drawer__icon"></div></el-icon>
			</el-divider>
			<el-menu
				class="el-menu-vertical-demo"
			>
				<el-menu-item class="main__left-menu__item">
					<RouterLink to="/">
						<el-icon><Cpu /></el-icon><span>Главная</span>
					</RouterLink>
				</el-menu-item>
				<el-menu-item class="main__left-menu__item">
					<RouterLink :to="{name: 'projects'}">
						<el-icon><Suitcase /></el-icon><span>Примеры работ</span>
					</RouterLink>
				</el-menu-item>
				<el-sub-menu class="main__left-menu__item" index="2">
					<template #title>
						<el-icon><MagicStick /></el-icon><span>Frontend</span>
					</template>
					<el-menu-item class="main__left-menu__item" index="2-0">
						<RouterLink to="/frontend/graph">
							<el-icon><Grape /></el-icon><span>Граф</span>
						</RouterLink>
					</el-menu-item>
					<el-menu-item class="main__left-menu__item" index="2-1">
						<RouterLink to="/frontend/highchart">
							<el-icon><DataLine /></el-icon><span>Графики</span>
						</RouterLink>
					</el-menu-item>
				</el-sub-menu>

				<el-sub-menu class="main__left-menu__item" index="1">
					<template #title>
						<el-icon><HomeFilled /></el-icon><span>Личный кабинет</span>
					</template>
					<el-menu-item class="main__left-menu__item" index="1-0">
						<RouterLink to="/user/about"><el-icon><UserFilled /></el-icon>Обо мне</RouterLink>
					</el-menu-item>
					<el-menu-item v-show="isAuthenticated" class="main__left-menu__item" index="1-2">
						<RouterLink to="/user/finance"><el-icon><WalletFilled /></el-icon>Финансы</RouterLink>
					</el-menu-item>
					<el-menu-item v-show="isAuthenticated" class="main__left-menu__item" index="1-1">
						<RouterLink to="/user/memories"><el-icon><PictureFilled /></el-icon>Воспоминания</RouterLink>
					</el-menu-item>
				</el-sub-menu>
			</el-menu>
		</el-drawer>
	</div>
</template>

<style lang="scss">
@import 'src/assets/mixins/humburger-button';

.main__left-menu {
	.hamburger-button {
		transform: scale(0.4);
		z-index: 1000000;

		&.open > div {
			display: none;
		}
	}

	& &__drawer {
		min-width: 250px;

		.el-drawer__body {
			padding: 0;

			ul {
				border: 0;
			}
		}

		&__icon {
			width: 1em;
			height: 1em;
			background-size: 10%;
			background: no-repeat url("@/assets/images/logo/bear-head-white-72x72.png");
			background-size: contain;
		}
	}

	& &__item {

		* {
			font-size: 20px;
		}

		a {
			color: #ffffff !important;
			text-decoration: unset;
			display: flex;
			flex-direction: row;
			justify-content: left;
			align-items: center;
			width: 100%;
		}

		span {
			margin-left: 10px;
		}
	}
}
</style>
