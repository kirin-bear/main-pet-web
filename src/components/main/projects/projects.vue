<script lang="ts">
import {defineComponent, ref} from 'vue'
import {useProjectStore} from "@/stores/projects/store";
import {
	BIconPersonCircle,
	BIconGearFill,
	BIconTools
} from "bootstrap-icons-vue";
import ProjectAbout from "@/components/main/projects/project-about.vue";
import type Project from "@/stores/projects/types/project";

export default defineComponent({
	name: "projects",
	components: {
		ProjectAbout,
		BIconPersonCircle,
		BIconGearFill,
		BIconTools
	},
	setup: function () {

		const projectStore = useProjectStore();
		const projects = projectStore.list;
		const projectIsOpened = ref(false);
		const projectSelected = ref({} as Project);

		function openProject(project: Project) {
			projectIsOpened.value = true;
			projectSelected.value = project;
		}

		return {projects, projectIsOpened, openProject, projectSelected}
	},
})
</script>

<template>
	<el-row class="row-bg scroll-full-height" justify="space-evenly">
		<el-col :span="12" :xs="24" class="main__projects">
			<h1>Примеры работ</h1>
			<el-divider />
				<el-row class="main__projects__list">
					<el-col v-for="project in projects" :span="7" :xs="24">
						<el-card class="main__projects__list__card">
							<template #header>
								<div class="main__projects__list__card__header">
									<div class="main__projects__list__card__header__title">
										<span @click="openProject(project)">{{ project.title }}</span>
									</div>
									<div class="main__projects__list__card__header__tags">
										<el-tag v-for="technology in project.technologies" type="warning">{{ technology }}</el-tag>
									</div>
								</div>
							</template>
							<div class="main__projects__list__card__body">
								<div class="main__projects__list__card__body__goal">{{ project.description }}</div>
							</div>
							<template #footer>Footer content</template>
						</el-card>
					</el-col>
				</el-row>
		</el-col>
	</el-row>
	<el-drawer :show-close="true" class="main__drawer__project-about" v-model="projectIsOpened" :with-header="true">
		<project-about :project="projectSelected" />
	</el-drawer>
</template>

<style lang="scss">
@import "src/assets/variables";

.main__projects {
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

				&__title {
					& span:hover {
						cursor: pointer;
						text-decoration: underline;
					}
				}

				&__tags {

					margin-top: 10px;

					& .el-tag {
						margin-right: 5px;
						margin-top: 5px;

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

			&__body {
				&__goal {
					font-size: $font-size-small;
				}
			}
		}
	}
}

@import 'src/assets/mixins/media';

@include forNotMobile() {
	.main__drawer__project-about {
		& .el-drawer__header {
			display: none;
		}
	}
}

@include forMobile() {
	.main__drawer__project-about {
		width: 100% !important;

		& .el-drawer__close-btn > i {
			width: 36px;
			height: 36px;
			color: white;

			& svg {
				height: 2em;
				width: 2em;
			}
		}

		& > div {
			padding-top: 0;
		}
	}
}
</style>
