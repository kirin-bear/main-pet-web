<script lang="ts">
import {defineComponent} from 'vue'
import HighchartInvoices from "@/components/main/user/finance/highchart-invoices.vue";

export default defineComponent({
	name: "finance",
	components: {HighchartInvoices},
	setup: function () {
	}
})
</script>

<template>
	<div class="main__user__finance">
		<h1>Мои финансы</h1>
		<HighchartInvoices title="Общее" type="general" />
		<HighchartInvoices title="%" type="percentage_of_income" />
		<HighchartInvoices title="Категории" type="expense_category_type" />
		<HighchartInvoices title="Постоянные" type="expense_fixed_category" />
		<HighchartInvoices title="Ситуационные" type="expense_dynamic_category" />
	</div>
</template>

<style scoped>
</style>
