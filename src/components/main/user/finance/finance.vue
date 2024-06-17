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
		<HighchartInvoices title="%" type="general_percent" />
		<HighchartInvoices title="Категории" type="category" />
		<HighchartInvoices title="Постоянные" type="fixed" />
		<HighchartInvoices title="Ситуационные" type="dynamic" />
	</div>
</template>

<style scoped>

</style>
