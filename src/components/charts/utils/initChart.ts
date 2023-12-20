import { EChartsOption, EChartsType, init } from "echarts";
import { Ref, ShallowRef } from "vue";

export function initChart(
  option: EChartsOption,
  target: Ref<HTMLDivElement | undefined>,
  chart: ShallowRef<EChartsType | undefined>,
) {
  if (target.value) {
    if (chart.value) chart.value.clear();
    chart.value = init(target.value);
    chart.value.setOption({
      ...option,
      ...{
        grid: {
          top: 20,
          bottom: 20,
          left:40,
          right:0,
        },
        title: {
          show: false,
        },
      },
    });
  }
}
