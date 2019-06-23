import React from "react"
import { Row, Col } from "antd"
import { ReactComponent as Doctor } from "../../assets/doctor.svg"
import { ReactComponent as Capsul } from "../../assets/capsul.svg"
import { ReactComponent as Operation } from "../../assets/operation.svg"
import { ReactComponent as Laboratorst } from "../../assets/laboratorst.svg"
import { ReactComponent as Feet } from "../../assets/feet.svg"
import { ReactComponent as Heart } from "../../assets/heart.svg"
import { ReactComponent as Dollar } from "../../assets/dollar.svg"
import { ReactComponent as Rip } from "../../assets/rip.svg"
import { ReactComponent as Needle } from "../../assets/needle.svg"

import Example from "../Pie"
import Radial from "../Radial"
import Chart from "../Chart"

const data = [
  {
    count: 89,
    title: "Doctors",
    icon: <Doctor />
  },
  {
    count: 899,
    title: "Nurse",
    icon: <Needle />
  },
  {
    count: 123,
    title: "Birth Report",
    icon: <Feet />
  },
  {
    count: 380,
    title: "Patients",
    icon: <Heart />
  },
  {
    count: 660,
    title: "Operation",
    icon: <Operation />
  },
  {
    count: 570,
    title: "Laboratorst",
    icon: <Laboratorst />
  },
  {
    count: 3440,
    title: "Pharmastist",
    icon: <Capsul />
  },
  {
    count: 220,
    title: "Accountants",
    icon: <Dollar />
  },
  {
    count: 1460,
    title: "Death Reports",
    icon: <Rip />
  }
]

const cardStyle = {
  marginBottom: "32px",
  background: "#fff",
  borderRadius: "4px",
  padding: "1em",
  height: "84px",
  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
  display: "table",
  width: "100%",
  verticalAlign: "middle"
}

const pieStyle = {
  background: "#fff",
  borderRadius: "4px",
  padding: "1.6em",
  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
  width: "100%",
  minHeight: "315px",
  height: "315px"
}

const Card = ({ icon, title, count }) => {
  return (
    <Col span={8}>
      <div style={cardStyle}>
        <Row style={{ display: "table-cell", verticalAlign: "middle" }}>
          <Col span={20}>
            <p style={{ fontSize: "12px", margin: 0 }}>{count}</p>
            <div
              style={{ fontSize: "14px", fontWeight: "bold", color: "#8288AC" }}
            >
              {title}
            </div>
          </Col>
          <Col span={4}>{icon}</Col>
        </Row>
      </div>
    </Col>
  )
}

export default function Dash() {
  return (
    <div>
      <Row gutter={32}>
        <Col span={16}>
          <h4
            style={{
              marginBottom: "1em"
            }}
          >
            Overview
          </h4>
          <Row gutter={32}>
            {data.map(el => (
              <Card {...el} key={el.title} />
            ))}
          </Row>
        </Col>
        <Col span={8}>
          <h4
            style={{
              marginBottom: "1em"
            }}
          >
            Budget Report
          </h4>
          <div style={pieStyle}>
            <p
              style={{
                paddingBottom: "1.4em",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                margin: 0
              }}
            >
              IPH Hospital USA
            </p>
            <Example />
            <p
              style={{
                paddingTop: "1.4em",
                margin: 0,
                borderTop: "1px solid rgba(0,0,0,0.1)"
              }}
            >
              <span
                style={{
                  height: "60px",
                  float: "left"
                }}
              >
                Quarter Budget
              </span>
              <span
                style={{
                  height: "60px",
                  float: "right",
                  fontWeight: "bold",
                  color: "#4AD991"
                }}
              >
                $32,650.00
              </span>
            </p>
          </div>
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span={16}>
          <h4
            style={{
              marginBottom: "1em"
            }}
          >
            Branches Report
          </h4>
          <Row
            style={{
              background: "#fff",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
            }}
          >
            <Col span={12}>
              <Radial />
            </Col>
            <Col span={12}>
              <Radial />
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <h4
            style={{
              marginBottom: "1em"
            }}
          >
            Diagram of IPH Hospitals
          </h4>
          <div style={{...pieStyle, paddingLeft: "0"}}>
            <Chart />
          </div>
        </Col>
      </Row>
    </div>
  )
}
