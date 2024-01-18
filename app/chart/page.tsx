"use client";
import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";

const Chart = () => {
  type EChartsOption = echarts.EChartsOption;

  var option: EChartsOption;

  let base = +new Date(1968, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let date = [];

  let data = [Math.random() * 300];

  for (let i = 1; i < 20000; i++) {
    var now = new Date((base += oneDay));
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  }

  option = {
    xAxis: {
      type: "category",
      show: false,
      boundaryGap: false,
      data: date,
    },
    yAxis: {
      show: false,
      type: "value",
      min: 0,
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 10,
      },
    ],
    series: [
      {
        name: " Data",
        type: "line",
        symbol: "Eurusd",
        sampling: "lttb",
        itemStyle: {
          color: "rgb(255, 70, 131)",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
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

  return (
    <ReactEcharts
      option={option}
      className="container h-full w-full p-3 border-2 border-green-500 mx-auto"
    />
  );
};
export default Chart;
