<script lang="ts">
import {defineComponent, ref} from "vue";
import HighchartsLineChart from "@/components/libs/highchats/highcharts-line-chart.vue";
import {useInvoiceMonthStore} from "@/stores/finance/invoice-month";
import type Series from "@/components/libs/highchats/types/series";

export default defineComponent({
	name: "highchart-invoices",
	props: {
		type: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		}
	},
	components: {HighchartsLineChart},
	setup: function (props) {

		const invoiceMonthsStore = useInvoiceMonthStore();

		const loading = ref(true);
		const xAxisValues: string[] = [];
		const seriesNames: string[] = [];
		const seriesData: any|undefined[][] = [];
		const series: Series[] = [];

		async function fetchInvoiceMonths(type: string) {

			await invoiceMonthsStore.fetch(type);
			invoiceMonthsStore.list.forEach((invoiceMonth) => {

				let indexXAxis = xAxisValues.indexOf(invoiceMonth.month);
				if (indexXAxis === -1) {
					indexXAxis = xAxisValues.push(invoiceMonth.month)
					indexXAxis--;
				}

				let indexSeries = seriesNames.indexOf(invoiceMonth.name);
				if (indexSeries === -1) {
					indexSeries = seriesNames.push(invoiceMonth.name);
					indexSeries--;
				}

				if (seriesData[indexSeries] === undefined) {
					seriesData[indexSeries] = [];
				}

				if (seriesData[indexSeries][indexXAxis] === undefined) {
					seriesData[indexSeries][indexXAxis] = [];
				}

				seriesData[indexSeries][indexXAxis] = invoiceMonth.count;
			});

			seriesData.forEach((values: [], key: number) => {
				series.push({
					name: seriesNames[key],
					data: values
				})
			});

			loading.value = false;
		}

		fetchInvoiceMonths(props.type);

		return {xAxisValues, loading, series}
	}
});
</script>

<template>
	<div class="main__user__finance__highchart">
		<HighchartsLineChart v-if="!loading" :highcharts-options="{
			title: title,
			yAxisTitle: 'Рубли',
			xAxisValues: xAxisValues,
			series: series,
		}" />
	</div>
</template>

<style lang="scss">
	.main__user__finance__highchart {
		margin-bottom: 21px;
	}
</style>
