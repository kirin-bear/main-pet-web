<script lang="ts">
import {defineComponent} from 'vue'
import {useWorksStore} from "@/stores/works/work";
import {
	BIconPersonCircle,
	BIconGearFill
} from "bootstrap-icons-vue";

export default defineComponent({
	name: "works",
	components: {
		BIconPersonCircle,
		BIconGearFill

	},
	setup: function () {

		const worksStore = useWorksStore();
		const works = worksStore.list;

		return {works}
	}
})
</script>

<template>
	<el-row class="row-bg" justify="space-evenly">
		<el-col :span="12" :xs="24" class="main__works">
			<h1>Примеры работ</h1>
			<el-divider />
				<el-row class="main__works__list">
					<el-col v-for="work in works" :span="7" :xs="24">
						<el-card class="main__works__list__card">
							<template #header>
								<div class="main__works__list__card__header">
									<div class="main__works__list__card__header__title">{{ work.title }}</div>
									<div class="main__works__list__card__header__tags">
										<el-tag type="warning"><BIconPersonCircle  /><span>{{ work.customer}}</span></el-tag>
										<el-tag type="warning"><BIconGearFill  /><span>{{ work.type}}</span></el-tag>
									</div>
								</div>
							</template>
							<p v-for="o in 4" :key="o" class="text item">Тут будет краткое описание проекта</p>
							<template #footer>Footer content</template>
						</el-card>
					</el-col>
				</el-row>
		</el-col>
	</el-row>
</template>

<style lang="scss">
.main__works {
	padding: 0 18px;
	background: #000000ad;

	& h1 {
		text-transform: uppercase;
		text-align: center;
	}

	&__list {
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
		justify-content: space-between;
		flex-direction: row;
		align-items: flex-start;

		&__card {

			margin-bottom: 18px;

			&__header {
				&__tags {

					margin-top: 5px;

					& .el-tag {
						margin-right: 5px;

						& .el-tag__content {

							& > svg {
								position: absolute;
							}

							& > span {
								margin-left: 15px;
							}
						}
					}
				}
			}
		}
	}

}
</style>
