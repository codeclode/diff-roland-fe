import { EChartsOption } from "echarts";

export const pieOption: EChartsOption = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "data1" },
        { value: 735, name: "data2" },
        { value: 580, name: "data3" },
        { value: 484, name: "data4" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
