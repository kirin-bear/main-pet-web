<script lang="ts">
import {defineComponent, type PropType, reactive, toRefs} from "vue";
import { Chart } from "highcharts-vue";
import type HighchartLineOptions from "@/components/libs/highchats/types/highchart-line-options";

export default defineComponent({
	name: 'highcharts-line-chart',
	props: {
		highchartsOptions: {
			type: Object as PropType<HighchartLineOptions>,
			required: true,
		}
	},
	components: {Chart},
	setup: function (props) {

		// пример через 1 объект
		const state = reactive({
			chartOptions: {
				title: {
					text: props.highchartsOptions.title,
					align: 'left'
				},
				subtitle: {
					text: '',
					align: 'left'
				},
				yAxis: {
					title: {
						text: props.highchartsOptions.yAxisTitle
					}
				},

				xAxis: {
					//accessibility: {
					//	rangeDescription: 'Range: 2010 to 2020'
					//},
					categories: props.highchartsOptions.xAxisValues,
				},

				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle'
				},

				series: props.highchartsOptions.series,

				responsive: {
					rules: [{
						condition: {
							maxWidth: 500
						},
						chartOptions: {
							legend: {
								layout: 'horizontal',
								align: 'center',
								verticalAlign: 'bottom'
							}
						}
					}]
				},
			}
		});

		return { ...toRefs(state) }
	}
})
</script>

<template>
	<Chart :options="chartOptions" ref="line-chart"></Chart>
</template>

<style scoped>

</style>
