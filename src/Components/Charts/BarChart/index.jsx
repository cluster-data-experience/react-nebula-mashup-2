import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import { useNebula } from "../../../Context/Nebula";
import Loader from "../../Loader";
import { cloneDeep } from "lodash";

export default function BarChart({ id, style }) {
  const { app } = useNebula();
  const [data, setData] = useState();
  const [qlikData, setQlikData] = useState();
  const [finalOptions, setFinalOptions] = useState({
    baseOption: {
      color: [
        "#F98561",
        "#FDB949",
        "#427E89",
        "#38BC9A",
        "#9665CD",
        "#EE87BD",
        "#5176BD",
        "#55B6EB",
      ],
      title: {
        textStyle: {
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 18,
          lineHeight: 24,
          color: "#0D3C44",
        },
      },
      label: {
        show: false,
      },
      tooltip: {
        trigger: "axis",
        position(point, params, dom, rect, size) {
          dom.style.transform = "translateZ(0)";
        },
        backgroundColor: "rgba(39,57,57,0.9)",
        textStyle: {
          fontFamily: "Poppins",
          fontStyle: "normal",
        },
        axisPointer: {
          type: "shadow",
          shadowStyle: {
            color: "rgba(39,57,57,0.15)",
          },
        },
      },
      grid: {
        bottom: "0",
        right: "1%",
        left: "1%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        axisLine: {
          lineStyle: {
            color: "#97AEB2",
          },
        },
        axisLabel: {
          color: "#89A0A5",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: 14,
        },
        axisTick: {
          show: true,
        },
        splitLine: {
          lineStyle: {
            color: "#D2DCDD",
          },
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#97AEB2",
          },
        },
        axisLabel: {
          color: "#89A0A5",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: 14,
        },
        splitLine: {
          lineStyle: {
            color: "#D2DCDD",
          },
        },
      },
      legend: {
        right: "4%",
        textStyle: {
          color: "#637B7B",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: 13,
        },
        type: "scroll",
      },
      orientation: "horizontal",
      series: {
        default: {
          type: "bar",
        },
      },
    },
    media: [
      {
        query: {
          maxWidth: 368,
        },
        option: {
          legend: {
            top: "8%",
          },
          grid: {
            bottom: "10%",
          },
        },
      },
    ],
  });
  const [loading, setLoading] = useState(true);

  return (
    <div style={style ? style : { width: "100%", height: '300px' }}>
      {loading ? (
        <Loader />
      ) : (
        <ReactEcharts
          notMerge={true}
          lazyUpdate={true}
          option={finalOptions}
          style={{ height: "100%", width: "100%" }}
        />
      )}
    </div>
  );
}
