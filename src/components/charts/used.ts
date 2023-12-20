import { EChartsOption } from "echarts";

export const usedOption: EChartsOption = {
  series: [
    {
      type: "gauge",
      startAngle: 90,
      endAngle: 450,
      min: 0,
      max: 100,
      itemStyle: {
        color: "#20A53A",
        shadowColor: "rgba(0,138,255,0.45)",
        shadowBlur: 10,
        shadowOffsetX: 2,
        shadowOffsetY: 2,
      },
      progress: {
        show: true,
        roundCap: true,
        width: 12,
      },
      pointer: {
        show: false,
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 12,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10,
      },
      axisLabel: {
        show: false,
      },
      detail: {
        fontSize: 14,
        color: "rgb(67, 144, 212)",
        offsetCenter: [0, 0],
        valueAnimation: true,
        formatter: function (value) {
          return "" + value.toFixed(0) + "%";
        },
      },
      data: [
        {
          value: 100,
        },
      ],
    },
  ],
};
