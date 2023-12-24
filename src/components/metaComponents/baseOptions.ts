import { EChartsOption, EChartsType, init, util } from "echarts";
import { debounce } from "lodash-es";
import { Ref, ShallowRef } from "vue";

export const baseOptions: EChartsOption = {
  xAxis: {
    axisLabel: {
      color: "#6cf",
    },
    nameGap: 5,
    nameTextStyle: {
      color: "#6cf",
    },
  },
  yAxis: {
    nameGap:8,
    nameTextStyle: {
      color: "#6cf",
    },
    axisLabel: {
      color: "#6cf",
    },
  },
  grid: {
    borderColor: "#6cf",
    bottom: 24,
    top: 24,
    left: 36,
  },
};
export function merge(...opts: EChartsOption[]) {
  return opts.reduce((a, b) =>
    util.merge<EChartsOption, EChartsOption>(util.clone(a), util.clone(b))
  );
}
export function refreshChart(
  canvas: Ref<HTMLDivElement | undefined>,
  ctx: ShallowRef<EChartsType | undefined>,
  resizeListener: Ref<(() => void) | undefined>,
  options: Ref<EChartsOption>
) {
  const dom = canvas.value;
  if (dom) {
    if (ctx.value) {
      ctx.value.clear();
    } else {
      ctx.value = init(dom);
    }
    ctx.value.setOption(merge(options.value, baseOptions));
    window.removeEventListener("resize", resizeListener.value!);
    function resize() {
      if (ctx.value) ctx.value.resize();
    }
    const dResize = debounce(resize, 300);
    resizeListener.value = dResize;
    window.addEventListener("resize", dResize);
  }
}
