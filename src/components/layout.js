import React from "react"
import Header from "./Header"
import Dash from "./Dash"
import { Layout, Menu, Icon, Affix } from "antd"

const { Content, Sider } = Layout



export default class SiderDemo extends React.Component {
	state = {
		collapsed: true,
		mode: "inline",
		theme: "light"
	}

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		})
	}
	render() {
		return (
			<Layout>
				 <Affix offsetTop={0}>
					<Header
						isCollapsed={this.state.collapsed}
						toggle={this.toggle}
					/>
				</Affix>
				<Layout style={{ minHeight: "100vh" }}>
					<Sider
						width={200}
						style={{ background: "#fff" }}
						trigger={null}
						collapsible
						collapsed={this.state.collapsed}
					>
						<Menu
							defaultSelectedKeys={["1"]}
							defaultOpenKeys={["sub1"]}
							mode="inline"
							theme="light"
							inlineCollapsed={this.state.collapsed}
						>
							<Menu.Item key="1">
								<Icon type="home" />
								<span>Home</span>
							</Menu.Item>
							<Menu.Item key="2">
								<Icon type="pie-chart" />
								<span>Dashboard</span>
							</Menu.Item>
							<Menu.Item key="3">
								<Icon type="inbox" />
								<span>İnbox</span>
							</Menu.Item>
							<Menu.Item key="4">
								<Icon type="user" />
								<span>Account</span>
							</Menu.Item>
							<Menu.Item key="5">
								<Icon type="message" />
								<span>Message</span>
							</Menu.Item>
							<Menu.Item key="6">
								<Icon type="calendar" />
								<span>Calendar</span>
							</Menu.Item>
							<Menu.Item key="7">
								<Icon type="setting" />
								<span>Setting</span>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout style={{ padding: "0 24px 24px" }}>
						<Content
							style={{
								background: "#fff",
								padding: 24,
								margin: 0,
								minHeight: 280
							}}
						>
							<Dash/>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		)
	}
}
