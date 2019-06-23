import React, { PureComponent } from "react"
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer
} from "recharts"

const data = [
  {
    name: "18-24",
    uv: 31.47,
    fill: "#95E7FF"
  },
  {
    name: "35-39",
    uv: 13.22,
    fill: "#FFE2A0"
  },
  {
    name: "50+",
    uv: 22.63,
    fill: "#FFA195"
  },
  {
    name: "unknow",
    uv: 16.67,
    fill: "#C4C3FF"
  }
]

const style = {
  height: "150px",
  top: "50%",
  right: "0%",
  transform: "translate(0%, -50%)",
  display: "flex",
  alignItems: "center",
  lineHeight: "35px"
}

export default class Radial extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9km41z5z/"

  render() {
    return (
      <ResponsiveContainer width="100%" height={315}>
        <RadialBarChart
          cx="36%"
          cy="50%"
          barSize={6}
          data={data}
          innerRadius="8%"
          outerRadius="70%"
        >
          <RadialBar minAngle={15} background clockWise dataKey="uv" />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    )
  }
}
