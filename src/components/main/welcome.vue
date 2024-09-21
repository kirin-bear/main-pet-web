<script lang="ts">
import {defineComponent} from "vue";
import {
	BIconGithub,
	BIconTelegram,
	BIconInstagram,
	BIconGoogle,
	BIconEnvelope,
	BIconLinkedin,
	BIconSteam,
	BIconPlaystation

} from "bootstrap-icons-vue";
import IconVk from "@/components/icons/IconVk.vue";
import IconSetka from "@/components/icons/IconSetka.vue";
import IconHabr from "@/components/icons/IconHabr.vue";

export default defineComponent({
	name: "left-menu",
	components: {
		BIconGithub,
		BIconTelegram,
		BIconInstagram,
		BIconGoogle,
		BIconEnvelope,
		BIconLinkedin,
		BIconSteam,
		BIconPlaystation,
		IconVk,
		IconSetka,
		IconHabr
	},
	methods: {
		windowOpen: function (url: string): void {
			window.open(url, '_blank');
		}
	}
});
</script>

<template>
	<div class="main__welcome">
		<div class="main__welcome__title">
			Кирин Антон
		</div>
		<div class="main__welcome__description">
			<div class="main__welcome__description__profession">
				Fullstack web-developer
			</div>
			<div class="main__welcome__description__navigation">
				<div class="main__welcome__description__navigation__item">
					<RouterLink :to="{name: 'works'}">
						<span>Примеры работ</span>
					</RouterLink>
				</div>
				<div class="main__welcome__description__navigation__item">
					<RouterLink :to="{name: 'works'}">
						<span>Опыт работы</span>
					</RouterLink>
				</div>
				<div class="main__welcome__description__navigation__item">
					<RouterLink :to="{name: 'user-about'}">
						<span>Личный кабинет</span>
					</RouterLink>
				</div>
			</div>
<!--			<div>Таймер с первого дня разработки (аля опыт)</div>-->
<!--			<div>Таймер с официальной работы в разработке (аля опыт)</div>-->
<!--			<div>PHP // VUE // MySQL // ClickHouse</div>-->
			<div class="main__welcome__description__socials">
				<div class="main__welcome__description__socials__item" @click="windowOpen('https://vk.com/kirin.bear')">
					<IconVk />
				</div>
				<div class="main__welcome__description__socials__item" @click="windowOpen('https://www.instagram.com/kirin.bear?igsh=dDljYXh2NWt5eGM5&utm_source=qr')">
					<BIconInstagram />
				</div>
				<div class="main__welcome__description__socials__item" @click="windowOpen('tata')">
					<BIconLinkedin />
				</div>
				<div class="main__welcome__description__socials__item" @click="windowOpen('https://set.ki/gcrKTjj')">
					<IconSetka />
				</div>
				<div class="main__welcome__description__socials__item" @click="windowOpen('mailto:otzizem@yandex.ru')">
					<BIconEnvelope />
				</div>
				<div class="main__welcome__description__socials__item" @click="windowOpen('https://github.com/kirin-bear')">
					<BIconGithub />
				</div>
			</div>
		</div>
	</div>
</template>i

<style scoped lang="scss">
	.main__welcome {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90vh;
		flex-direction: column;
		align-content: center;

		&__title {
			text-transform: uppercase;
			font-size: 50px;
			font-weight: 900;
		}

		&__description {
			text-align: center;

			&__profession {
				text-transform: uppercase;
				font-size: 35px;
			}

			&__navigation {
				display: flex;
				align-content: center;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				margin: 20px 0;

				&__item {
					margin: 0 10px;
					border-bottom: 1px solid transparent;

					&:hover {
						border-bottom: 1px solid white;
					}

					& > a {
						text-decoration: none;
						color: white;
						text-transform: uppercase;

						&:hover {
							cursor: pointer;
						}
					}
				}
			}

			&__socials {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 10px;

				&__item {
					background: #503316;
					border-radius: 50px;
					height: 40px;
					width: 40px;
					margin: 0 5px;
					overflow: hidden;
					display: flex;
					align-content: center;
					justify-content: space-evenly;
					flex-direction: column-reverse;
					align-items: stretch;
					flex-wrap: wrap;

					&:hover {
						opacity: 0.7;
						cursor: pointer;
					}
				}
			}
		}

	}
</style>
