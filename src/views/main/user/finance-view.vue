<template>
	<div>
		<LeftMenu />
		<h1>Мои финансы</h1>
		<HighchartsLineChart :highcharts-options="{
			title: 'Карманные расходы',
			yAxisTitle: 'Рубли',
			xAxisValues: ['Апрель 2024', 'Май 2024'],
			series: [{name: 'Рубли', data: [5000, 10000,]}],
		}" />
	</div>
</template>

<script>
import LeftMenu from "@/components/main/left-menu.vue";
import HighchartsLineChart from "@/components/libs/highchats/highcharts-line-chart.vue";

export default {
	name: "finance-view",
	components: {
		LeftMenu,
		HighchartsLineChart
	}
}
</script>

<style scoped>
</style>
