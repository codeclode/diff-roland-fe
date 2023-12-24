<template>
  <div ref="canvas"></div>
</template>
<script setup lang="ts">
import { registerMap, EChartsOption, EChartsType } from 'echarts';
import { Ref, ref, shallowRef, watch } from 'vue';
import { refreshChart } from "./baseOptions";
import * as china from "../../assets/china.json";
// @ts-ignore
registerMap('china', china);

const geoCoordMap = {
  海门: [121.15, 31.89],
  鄂尔多斯: [109.781327, 39.608266],
  招远: [120.38, 37.35],
  舟山: [122.207216, 29.985295],
  齐齐哈尔: [123.97, 47.33],
  盐城: [120.13, 33.38],
  赤峰: [118.87, 42.28],
  青岛: [120.33, 36.07],
  乳山: [121.52, 36.89],
  金昌: [102.188043, 38.520089],
  泉州: [118.58, 24.93],
  莱西: [120.53, 36.86],
  日照: [119.46, 35.42],
  胶南: [119.97, 35.88],
  南通: [121.05, 32.08],
  拉萨: [91.11, 29.97],
  云浮: [112.02, 22.93],
  梅州: [116.1, 24.55],
  文登: [122.05, 37.2],
  上海: [121.48, 31.22],
  攀枝花: [101.718637, 26.582347],
  威海: [122.1, 37.5],
  承德: [117.93, 40.97],
  厦门: [118.1, 24.46],
  汕尾: [115.375279, 22.786211],
  潮州: [116.63, 23.68],
  丹东: [124.37, 40.13],
  太仓: [121.1, 31.45],
  曲靖: [103.79, 25.51],
  烟台: [121.39, 37.52],
  福州: [119.3, 26.08],
  瓦房店: [121.979603, 39.627114],
  即墨: [120.45, 36.38],
  抚顺: [123.97, 41.97],
  玉溪: [102.52, 24.35],
  张家口: [114.87, 40.82],
  阳泉: [113.57, 37.85],
  莱州: [119.942327, 37.177017],
  湖州: [120.1, 30.86],
  汕头: [116.69, 23.39],
  昆山: [120.95, 31.39],
};
const convertData = function () {
  var res = [];
  for (let k in geoCoordMap) {
    var geoCoord = geoCoordMap[k as keyof typeof geoCoordMap];
    res.push({
      name: k,
      value: geoCoord.concat(1)
    });
  }
  return res;
};

const canvas = ref<HTMLDivElement>();
const options = ref<EChartsOption>({
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  tooltip: {
    show: true,
    trigger: 'item',
    backgroundColor: 'rgb(0,0,0,0.5)',
    textStyle: {
      color: 'white',
      fontSize: 15,
    }
  },
  roam: false,
  legend: {
    show: false,
  },
  geo: {
    tooltip: {
      show: true
    },
    map: 'china',
    roam: false,
    center: [105.58761666, 36.86236085],
    zoom: 1.6,
    itemStyle: {
      // @ts-ignore
      normal: {
        areaColor: "#0199FE",
        borderColor: "rgba(0, 0, 0, 0.2)"
      },
      emphasis: {
        areaColor: "#3894D2",
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        borderWidth: 0
      }
    }
  },
  series: [{
    name: '监测站',
    type: 'scatter',
    coordinateSystem: 'geo',
    geoIndex: 0,
    color:"#E57C8F",
    data: convertData(),
    symbolSize: 10,
    encode: {
      value: 2
    },
    label: {
      formatter: '{b}',
      position: 'right',
      show: false
    },
    emphasis: {
      label: {
        show: true
      }
    }
  },],
});
const ctx = shallowRef<EChartsType>();
const resizeListener = ref<() => void>();
watch([canvas, options], () => {
  refreshChart(canvas, ctx, resizeListener, options as Ref<EChartsOption>);
});
</script>
<style scoped></style>