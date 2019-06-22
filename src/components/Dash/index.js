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

const CardStyle = {
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

const Card = ({ icon, title, count }) => {
  return (
    <Col span={8}>
      <div style={CardStyle}>
        <Row style={{ display: "table-cell", "vertical-align": "middle" }}>
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
        <h4>Overview</h4>
      <Row gutter={32}>
        <Col span={16}>
          <Row gutter={32}>
            {data.map(el => (
              <Card {...el} key={el.title} />
            ))}
          </Row>
        </Col>
        <Col span={8}>pie</Col>
      </Row>
    </div>
  )
}
