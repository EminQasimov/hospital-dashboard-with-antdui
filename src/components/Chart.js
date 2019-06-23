import React, { PureComponent } from "react"
import {
 Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  ResponsiveContainer
} from "recharts"

const data = [
  {
    name: "A",
    uv: 40,
    pv: 240,
    amt: 240
  },
  {
    name: "B",
    uv: 60,
    pv: 138,
    amt: 220
  },
  {
    name: "C",
    uv: 80,
    pv: 680,
    amt: 220
  },
  {
    name: "D",
    uv: 118,
    pv: 398,
    amt: 200
  },
  {
    name: "E",
    uv: 189,
    pv: 480,
    amt: 281
  },
  {
    name: "F",
    uv: 130,
    pv: 380,
    amt: 200
  },
  {
    name: "G",
    uv: 49,
    pv: 430,
    amt: 200
  }
]

export default class Chart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/"

  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          {/* <CartesianGrid strokeDasharray="6 6" /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}
