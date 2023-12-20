import { EChartsOption, graphic } from "echarts";

let base = +new Date(2023, 11, 3);
let oneDay = 24 * 3600 * 1000;
let date = [];
let data = [Math.random() * 100];
for (let i = 1; i < 100; i++) {
  var now = new Date((base += oneDay));
  date.push([now.getFullYear(), now.getMonth()+1 , now.getDate()].join("/"));
  data.push(Math.round((Math.random()) * 100 ));
}
export const areaOption: EChartsOption = {
  tooltip: {
    trigger: "axis",
    position: function (pt) {
      return [pt[0], "10%"];
    },
  },
  title: {
    left: "center",
    text: "Large Area Chart",
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: date,
  },
  yAxis: {
    type: "value",
    boundaryGap: [0, "100%"],
  },
  dataZoom: [
    {
      type: "slider",
      start: 0,
      end: 10,
      show:false
    },
    {
      start: 0,
      end: 10,
      show:false
    },
  ],
  series: [
    {
      name: "Fake Data",
      type: "line",
      symbol: "none",
      sampling: "lttb",
      itemStyle: {
        color: "rgb(255, 70, 131)",
      },
      areaStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(255, 158, 68)",
          },
          {
            offset: 1,
            color: "rgb(255, 70, 131)",
          },
        ]),
      },
      data: data,
    },
  ],
};
