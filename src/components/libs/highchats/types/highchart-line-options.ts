import type Series from "@/components/libs/highchats/types/series";

interface HighchartOptions {
    title: string,
    yAxisTitle: string,
    xAxisValues: string[],
    series: Series[]
}

export default HighchartOptions;
