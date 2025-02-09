<script lang="ts">
import {defineComponent} from 'vue'
import type Project from "@/stores/projects/types/project";

export default defineComponent({
	name: "project-about",
	props: {
		project: {
			type: Object as () => Project,
			required: true,
		}
	},
})
</script>

<template>
	<div class="main__project-about">
		<div class="main__project-about__header">
			<h1>{{ project.title }}</h1>
			<el-divider/>
		</div>
		<div class="main__project-about__body">
			<h2>🥅 Цели</h2>
			<div>{{ project.goal}}</div>
			<el-divider />
			<h2>📝 Описание</h2>
			<div> Заказчик: {{ project.customer }}</div><br>
			<div>{{ project.description }}</div>
			<el-divider />
			<h2>👥 Команда</h2>
			<ul>
				<li v-for="roleCount in project.team">{{ roleCount.count }} {{ roleCount.role }}</li>
			</ul>
			<el-divider />
			<h2>🧑‍💻 Роль и обязанности</h2>
			<p><b>Роль:</b> {{ project.role }}</p>
			<div><b>Обязанности:</b></div>
			<ul>
				<li v-for="responsibility in project.responsibilities">{{ responsibility }}</li>
			</ul>
			<el-divider />
			<h2>🛠 Технологии</h2>
			<ul>
				<li v-for="technology in project.technologies">{{ technology }}</li>
			</ul>
			<el-divider />
			<h2>⌛️ Затраченное время</h2>
			<div>{{ project.estimatedDays }} дней</div>
			<el-divider />
			<h2>⁉️ Сложности и решения</h2>
			<ul>
				<li style="margin-bottom: 10px" v-for="solutions in project.solutions">{{ solutions }}</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss">
.main__project-about {

	&__header {
		& h1 {
			margin-top: 0;
		}
	}
}
</style>
