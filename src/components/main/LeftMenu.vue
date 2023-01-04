<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";
import {RouterLink} from "vue-router";

export default defineComponent({
	name: "LeftMenu",
	setup() {

		const state = reactive({
			isOpened: false as boolean,
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
			custom-class="main__left-menu__drawer"
		>
			<el-divider>
				<el-icon><div class="main__left-menu__drawer__icon"></div></el-icon>
			</el-divider>
			<el-menu
				class="el-menu-vertical-demo"
			>
				<el-menu-item>
					<RouterLink to="/">
						<el-icon><HomeFilled /></el-icon><span>Главная</span>
					</RouterLink>
				</el-menu-item>
				<el-menu-item>
					<RouterLink to="/sandbox">
						<el-icon><Setting /></el-icon><span>Песочница</span>
					</RouterLink>
				</el-menu-item>
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
		min-width: 55%;

		.el-drawer__body {
			padding: 0;
		}

		&__icon {
			width: 1em;
			height: 1em;
			background-size: 10%;
			background: no-repeat url("@/assets/images/logo/bear-head-white-72x72.png");
			background-size: contain;
		}

		a {
			color: #ffffff !important;
			text-decoration: unset;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			font-size: 20px;

			> span {
				margin-left: 10px;
			}
		}
	}
}
</style>