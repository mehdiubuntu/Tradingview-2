import * as echarts from "echarts";
import barData from "@/__mock__/barEcharts.json";
import radarData from "@/__mock__/radarEcharts.json";
import moment from "moment";
import "moment/locale/fa";

const minSize = {
  axisLine_width: 10,
  splitLine_length: 0,
  axisLabel_fontSize: 0,
  detail_fontSize: 12,
};

const customStyle = {
  fontSize: 16,
  fontWeight: "bold",
  fontFamily: "YekanBakh",
  fontColor: "#333333",
};
const colorList = [
  // "#5470c6",
  // "#91cc75",
  // "#fac858",
  // "#ee6666",
  // "#73c0de",
  // "#3ba272",
  // "#fc8452",
  // "#9a60b4",
  // "#ea7ccc",

  "#dd6b66",
  "#759aa0",
  "#e69d87",
  "#8dc1a9",
  "#ea7e53",
  "#eedd78",
  "#73a373",
  "#73b9bc",
  "#7289ab",
  "#91ca8c",
  "#f49f42",
];

const titleOption = (title, isMinimal = false) =>
  title
    ? {
        text: title,
        left: "center",
        // top: "bottom",
        // bottom: -5,
        textStyle: {
          color: customStyle.fontColor,
          fontSize: isMinimal ? minSize?.detail_fontSize : customStyle.fontSize,
          fontWeight: "bold",
          fontFamily: customStyle.fontFamily,
        },
      }
    : null;

const toolbox = {
  show: true,
  orient: "vertical",
  left: "right",
  top: "center",
  feature: {
    mark: { show: true },
    dataView: { show: true, readOnly: false },
    magicType: { show: true, type: ["line", "bar", "stack"] },
    restore: { show: true },
    saveAsImage: { show: true },
  },
};
//------------------------------------------------

export const BarOptions = ({ title = null, data = barData }) => {
  const labelOption = {
    show: false,
    rotate: 30,
    formatter: "{b}", //{b} | {c}
    fontSize: 10,
    position: "bottom",
    fontFamily: customStyle.fontFamily,
    distance: 10,
    rich: {
      name: {},
    },
  };
  return {
    title: titleOption(title),
    color: colorList,
    // grid: {
    //   bottom: 100,
    // },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      // axisTick: {
      //   alignWithLabel: true,
      // },
      axisLabel: {
        interval: 0,
        rotate: 55,
        width: 120,
        overflow: "truncate",
        ellipsis: "...",
        // margin: 8,
        textStyle: {
          // baseline: "top",
          // color: "#333",
          // fontSize: 10,
          // fontWeight: "bold",
        },
      },
      // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: data?.map((item) => item.name),
    },
    yAxis: {
      type: "value",
    },
    // toolbox: toolbox,
    series: [
      {
        data: data?.map((item) => item.value),
        // data: [
        //   120,
        //   {
        //     value: 200,
        //     itemStyle: {
        //       color: "#a90000",
        //     },
        //   },
        //   150,
        //   80,
        //   70,
        //   110,
        //   130,
        // ],
        type: "bar",
        label: labelOption,
      },
    ],
  };
};

export const GaugeOptions = (title, data) => {
  return {
    title: title
      ? {
          text: title,
          left: "center",
          top: "bottom",
        }
      : null,
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "50%"],
        radius: "80%",
        min: 0,
        max: 1,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 6,
            color: [
              [0.25, "#26ff2d"],
              [0.5, "#ffdd26"],
              [0.75, "#ff681c"],
              [1, "#CE2029"],
            ],
          },
        },
        pointer: {
          icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
          length: "12%",
          width: 20,
          offsetCenter: [0, "-50%"],
          itemStyle: {
            color: "auto",
          },
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: "auto",
            width: 2,
          },
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: "auto",
            width: 5,
          },
        },
        axisLabel: {
          color: "#464646",
          fontSize: 16,
          distance: -60,
          rotate: "tangential",
          formatter: function (value) {
            if (value === 0.875) {
              return "خطرناک";
            } else if (value === 0.625) {
              return "متوسط";
            } else if (value === 0.375) {
              return "خوب";
            } else if (value === 0.125) {
              return "ایمن";
            }
            return "";
          },
        },
        title: {
          offsetCenter: [0, "-20%"],
          fontSize: 30,
        },
        detail: {
          fontSize: 16,
          offsetCenter: [0, "0%"],
          valueAnimation: true,
          formatter: function (value) {
            // return Math.round(value * 100) + "درجه";
            return Math.round(value * 100);
          },
          color: "auto",
        },
        data: [
          {
            value: data,
            // name: "Grade Rating",
          },
        ],
      },
    ],
  };
};

export const RadarOptions = ({
  title = null,
  data = radarData,
  score = null,
}) => {
  return {
    title: score ? titleOption(`${score}\n\n\n${title}`) : titleOption(title),

    radar: {
      // shape: "circle",

      indicator: data?.indicator,
      axisName: {
        color: "rgb(0, 77, 0)",
        fontFamily: customStyle.fontFamily,
        // width: 120,
        // overflow: "truncate",
        // ellipsis: "...",
      },
      axisLabel: {
        rotate: 90,
      },
      splitLine: {
        lineStyle: {
          color: [
            "rgba(76, 76, 82, 0.5)",
            "rgba(76, 76, 82, 0.6)",
            "rgba(76, 76, 82, 0.7)",
            "rgba(76, 76, 82, 0.8)",
            "rgba(76, 76, 82, 0.9)",
            "rgba(76, 76, 82, 1)",
          ].reverse(),
        },
      },

      // center: ["25%", "40%"],
      radius: 80,
    },
    series: [
      {
        // name: "Budget vs spending",
        type: "radar",
        // tooltip: {
        //   trigger: "item",
        // },
        areaStyle: {},
        // title: {
        //   fontSize: 20,
        //   color: "#333333",
        //   // fontWeight: "bold",
        // },
        data: [
          {
            value: data?.value,
            name: { title },
            // symbol: 'rect',
            // symbolSize: 12,
            // lineStyle: {
            //   type: 'dashed'
            // },
            label: {
              show: true,
              fontFamily: customStyle.fontFamily,
              formatter: function (params) {
                return params.value;
              },
            },
          },
        ],
      },
    ],
  };
};

export const ProgressOptions = ({
  title = null,
  data = [],
  isMinimal = false,
}) => {
  return {
    title: titleOption(title, isMinimal),
    series: [
      {
        type: "gauge",

        axisLine: {
          lineStyle: {
            width: isMinimal ? minSize?.axisLine_width : 20,
            color: [
              [0.2, "#26ff2d"],
              [0.4, "#ffdd26"],
              [0.6, "#FFB034"],
              [0.8, "#ff681c"],
              [1, "#CE2029"],
            ],
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          length: isMinimal ? minSize?.splitLine_length : 5,
          lineStyle: {
            width: 2,
            color: "#999",
          },
        },
        axisLabel: {
          distance: 25,
          color: "auto",
          fontSize: isMinimal ? minSize?.axisLabel_fontSize : 10,
        },
        //   anchor: {
        //     show: true,
        //     showAbove: true,
        //     size: 25,
        //     itemStyle: {
        //       borderWidth: 10,
        //     },
        //   },

        // title: {
        //   offsetCenter: [0, "120%"],
        //   fontSize: isMinimal ? minSize?.axisLine_width : 20,
        //   color: "#333333",
        //   // fontWeight: "bold",
        // },
        pointer: {
          itemStyle: {
            color: "auto",
          },
        },
        detail: {
          valueAnimation: true,
          fontSize: isMinimal ? minSize?.detail_fontSize : 32,
          offsetCenter: [0, "90%"],
          fontFamily: customStyle.fontFamily,
          color: customStyle.fontColor,
        },
        data: [
          {
            value: data,
            // name: title,
          },
        ],
      },
    ],
  };
};

export const netOptions = (title, data) => {
  data?.nodes?.forEach(function (node) {
    node.label = {
      show: node.symbolSize > 30,
    };
  });

  return {
    title: titleOption(title),
    tooltip: {},
    // Global palette:
    color: colorList,

    legend: [
      {
        orient: "vertical",
        type: "scroll",
        left: 0,

        // left: 0,
        // top: 0,
        // bottom: 5,
        textStyle: {
          fontFamily: customStyle.fontFamily,
        },
        // selectedMode: 'single',
        data: data?.categories?.map(function (a) {
          return a.name;
        }),
      },
    ],
    animationDuration: 1500,
    animationEasingUpdate: "quinticInOut",
    // toolbox: toolbox,
    series: [
      {
        name: "اختلالات",
        type: "graph",
        layout: "none",
        data: data?.nodes,
        links: data?.links,
        categories: data?.categories,
        roam: true,
        label: {
          // show: true,
          position: "right",
          formatter: "{b}",
        },
        // labelLayout: {
        //   hideOverlap: true,
        // },
        // scaleLimit: {
        //   min: 0.4,
        //   max: 2,
        // },
        lineStyle: {
          color: "source",
          width: 1,
          curveness: 0.3,
        },
        emphasis: {
          focus: "adjacency",
          lineStyle: {
            width: 10,
          },
        },
      },
    ],
  };
};

export const pieLineOptions = ({ title = "", data = [] }) => {
  const ListOfLineChart = data?.map((item, index) => {
    if (index !== 0)
      return {
        type: "line",
        smooth: true,
        seriesLayoutBy: "row",
        emphasis: { focus: "series" },
      };
  });
  return {
    legend: {},
    title: titleOption(title),
    tooltip: {
      trigger: "axis",
      showContent: false,
    },
    color: colorList,
    dataset: {
      source: data,
      // [
      //   ["isacs", "2012", "2013", "2014", "2015", "2016", "2017"],
      //   ["فاوا", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
      //   ["مالی", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
      //   ["سلامت", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
      //   ["حمل و نقل", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
      //   ["انرژی", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
      // ],
    },

    xAxis: {
      type: "category",
      axisLabel: {
        rotate: 30,
      },
    },
    yAxis: { gridIndex: 0 },
    grid: { top: "55%" },
    // toolbox: toolbox,
    series: [
      ...ListOfLineChart,
      {
        type: "pie",
        id: "pie",
        radius: "30%",
        center: ["50%", "25%"],
        emphasis: {
          focus: "self",
        },
        label: {
          formatter: `{b}: {@${data[0][data[0]?.length - 1]}} ({d}%)`,
        },
        encode: {
          itemName: "isacs",
          value: `${data[0][data[0]?.length - 1]}`, //2012
          tooltip: `${data[0][data[0]?.length - 1]}`, //2012
        },
      },
    ],
  };
};

export const BarCategoryOptions = ({
  title = null,
  data = {},
  duration = "daily",
}) => {
  const labelOption = {
    show: true,
    rotate: 90,
    align: "left",
    verticalAlign: "middle",
    formatter: "{a}", //{b} | {c}  "{name|{a}}"
    fontSize: 10,
    position: "insideBottom",
    fontFamily: customStyle.fontFamily,
    distance: 15,
    rich: {
      name: {},
    },
  };

  let generatedSeries = [];
  let generatedXAxis = data[duration] ? Object.keys(data[duration]) : [];
  data?.entitiesList?.forEach((element) => {
    let temp = {
      name: element,
      type: "bar",
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: "series",
      },
      data: [],
    };
    let tem = [];
    for (const property in data[duration]) {
      tem.push(data[duration][property][element]);
    }
    temp.data = tem;
    generatedSeries.push(temp);
  });

  return {
    legend: { data: data?.entitiesList },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    color: colorList,
    toolbox: toolbox,
    xAxis: {
      type: "category",
      axisTick: { show: false },
      data: generatedXAxis,
    },
    yAxis: [
      {
        type: "value",
      },
    ],
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: generatedSeries,
  };
};

export const BarCategoryOptions2 = ({ title = null, data = {} }) => {
  const labelOption = {
    show: true,
    rotate: 90,
    align: "left",
    verticalAlign: "middle",
    formatter: "{a}", //{b} | {c}  "{name|{a}}"
    fontSize: 10,
    position: "insideBottom",
    fontFamily: customStyle.fontFamily,
    distance: 15,
    rich: {
      name: {},
    },
  };

  let generatedSeries = [];
  let generatedXAxis = data?.exposurePhases
    ? Object.keys(data?.exposurePhases)
    : [];
  data?.missionsList?.forEach((element) => {
    let temp = {
      name: element,
      type: "bar",
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: "series",
      },
      data: [],
    };
    let tem = [];
    for (const property in data?.exposurePhases) {
      tem.push(data?.exposurePhases[property][element]);
    }
    temp.data = tem;
    generatedSeries.push(temp);
  });

  return {
    legend: { data: data?.missionsList },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    color: colorList,
    toolbox: toolbox,
    xAxis: {
      type: "category",
      axisTick: { show: false },
      data: generatedXAxis,
    },
    yAxis: [
      {
        type: "value",
      },
    ],
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: generatedSeries,
  };
};

export const pieOptions = ({ title = null, data = [] }) => {
  return {
    title: titleOption(title),
    tooltip: {
      trigger: "item",
    },
    color: [
      "#dd6b66",
      "#759aa0",
      "#e69d87",
      "#8dc1a9",
      "#ea7e53",
      "#eedd78",
      "#73a373",
      "#73b9bc",
      "#7289ab",
      "#91ca8c",
      "#f49f42",
    ],

    legend: {
      bottom: 10,
      left: "center",
      // data: ['CityA', 'CityB', 'CityD', 'CityC', 'CityE']
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data,
        animation: false, // disable animation
        progressive: true, // enable progressive rendering
        progressiveThreshold: 1000, // render 1000 data points at a time
        progressiveChunkMode: "mode", // render every other chunk
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
};

export const CalendarPieOptions = ({ title = null, data = {} }) => {
  const cellSize = [80, 80];
  const pieRadius = 30;
  function getVirtualData() {
    const date = +echarts.time.parse("2017-02-01");

    const end = +echarts.time.parse("2017-03-01");
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        echarts.time.format(time, "{yyyy}-{MM}-{dd}", false),
        Math.floor(Math.random() * 10000),
      ]);
    }
    return data;
  }
  const scatterData = getVirtualData();
  const pieSeries = scatterData.map(function (item, index) {
    return {
      type: "pie",
      id: "pie-" + index,
      center: item[0],
      radius: pieRadius,
      coordinateSystem: "calendar",
      label: {
        formatter: "{c}",
        position: "inside",
      },
      data: [
        { name: "بسیار کم", value: Math.round(Math.random() * 24) },
        { name: "کم", value: Math.round(Math.random() * 24) },
        { name: "متوسط", value: Math.round(Math.random() * 24) },
        { name: "شدید", value: Math.round(Math.random() * 24) },
        { name: "بسیار شدید", value: Math.round(Math.random() * 24) },
      ],
    };
  });

  return {
    title: titleOption(title),
    color: colorList,

    tooltip: {},
    legend: {
      data: ["بسیارکم", "کم", "متوسط", "شدید", "بسیار شدید"],
      bottom: 20,
    },
    calendar: {
      top: "middle",
      left: "center",
      orient: "vertical",
      cellSize: cellSize,
      yearLabel: {
        show: false,
        fontSize: 30,
      },
      dayLabel: {
        margin: 20,
        firstDay: 1,
        nameMap: [
          "شنبه",
          "یکشنبه",
          "دوشنبه",
          "سه شنبه",
          "چهارشنبه",
          "پنج شنبه",
          "جمعه",
          "شنبه",
        ],
      },
      monthLabel: {
        show: false,
      },
      range: ["2017-02"],
    },
    series: [
      {
        id: "label",
        type: "scatter",
        coordinateSystem: "calendar",
        symbolSize: 0,
        label: {
          show: true,
          formatter: function (params) {
            return echarts.time.format(params.value[0], "{dd}", false);
          },
          offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
          fontSize: 14,
        },
        data: scatterData,
      },
      ...pieSeries,
    ],
  };
};
