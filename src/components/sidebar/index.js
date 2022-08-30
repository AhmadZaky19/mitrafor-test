import React, { Component } from 'react';
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { NavLink, Outlet } from "react-router-dom";

class Sidebar extends Component {
  render() { 
    return (
      <Layout>
      <Layout.Sider
        style={{
          position: "fixed",
          height: "100vh",
          background: "white",
        }}
      >
        <Menu mode="inline" defaultSelectedKeys={["/home"]}>
          <Menu.Item key="/home" icon={<HomeOutlined />}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
            <NavLink to="/about">About</NavLink>
          </Menu.Item>
          <Menu.Item key="/contact" icon={<MailOutlined />}>
            <NavLink to="/contact">Contact</NavLink>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content
        style={{ padding: 32, marginLeft: 200, minHeight: "100vh" }}
      >
        <Outlet />
      </Layout.Content>
    </Layout>
    );
  }
}
 
export default Sidebar;