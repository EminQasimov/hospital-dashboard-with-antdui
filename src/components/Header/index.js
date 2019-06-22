import React from "react"
import "./header.css"
import { Icon, Row, Col, Input, Badge, Select, Avatar } from "antd"
import { ReactComponent as Logo } from "../../assets/logo.svg"

function SearchInput() {
  return (
    <Input
      size="large"
      placeholder="Search medical records"
      prefix={
        <Icon
          type="search"
          style={{ fontSize: "16px", color: "rgba(0,0,0,.25)" }}
        />
      }
    />
  )
}

function Bell() {
  return (
    <Badge dot>
      <Icon
        type="bell"
        style={{ fontSize: "16px", color: "rgba(0,0,0,.25)" }}
      />
    </Badge>
  )
}

const { Option } = Select

class Account extends React.Component {
  handleChange = value => {
    console.log(value)
  }

  render() {
    return (
      <Select
        labelInValue
        defaultValue={{ key: "Emilia Clarke" }}
        onChange={this.handleChange}
      >
      </Select>
    )
  }
}

export default function(props) {
  return (
    <div className="header">
      <Row className="verticalCenter" style={{ height: "70px" }}>
        <Col span={8}>
          <div style={{ display: "flex" }}>
            <div className="verticalCenter" style={{ width: "80px" }}>
              <Icon
                className="trigger"
                type={props.isCollapsed ? "menu" : "menu"}
                onClick={props.toggle}
                style={{
                  width: "80px",
                  fontSize: "16px",
                  textAlign: "center",
                  color: "rgba(0,0,0,.25)"
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <SearchInput />
            </div>
          </div>
        </Col>
        <Col span={8} className="verticalCenter">
          <Logo />
        </Col>
        <Col span={8} style={{textAlign:"right"}}>
          <Bell />
          <Account />
		  <Avatar size={42} src="https://i.pravatar.cc/150?img=32" />
        </Col>
      </Row>
    </div>
  )
}
