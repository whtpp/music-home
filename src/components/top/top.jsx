import React, { Component } from "react";
import {
  AlignLeftOutlined,
  StarOutlined,
  CustomerServiceOutlined,
  VideoCameraOutlined,
  SwapLeftOutlined,
  SwapRightOutlined,
  FieldTimeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Input, Button } from "antd";

// const { Search } = Input;

// const onSearch = (value) => console.log(value);

const { Header, Content, Footer, Sider } = Layout;
const items1 = [SwapLeftOutlined, SwapRightOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: ``,
  };
});
const items2Label = ["推荐", "收藏", "Top榜", "MV", ""];
const items2 = [
  CustomerServiceOutlined,
  AlignLeftOutlined,
  StarOutlined,
  VideoCameraOutlined,
  FieldTimeOutlined,
].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `${items2Label[index]}`,
  };
});

export default class Top extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo" />
            {/* <Search
              placeholder="爱在西元前"
              onSearch={onSearch}
              enterButton
              style={{
                display:'inline-block',
                float:'right',
                width:'200px',
                marginTop:'15px',
              }}
              size='10px'
            /> */}
            <div style={{
                display:'inline-block',
                float:'right',
                width:'300px',
                height:'100%',
                marginTop:'15px'
            }}>
              <Input
                placeholder="爱在西元前"
                style={{
                  display: "inline-block",
                  float: "left",
                  width: "200px",
                  fontSize:'12px'
                }}
              />
              <Button
                type="primary"
                style={{
                  display: "inline-block",
                  float:'left',
                  width:'40px',
                  backgroundColor:'transparent',
                  border:'0px'
                }}
                icon={<SearchOutlined />}
              />
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items1}
            />
          </Header>
          <Content
            style={{
              padding: "0 50px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "20px 0",
                fontSize: "20px",
              }}
            >
              <Breadcrumb.Item>Music Home</Breadcrumb.Item>
            </Breadcrumb>
            <Layout
              className="site-layout-background"
              style={{
                padding: "24px 0",
              }}
            >
              <Sider className="site-layout-background" width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{
                    height: "100%",
                  }}
                  items={items2}
                  theme="dark"
                />
              </Sider>
              <Content
                style={{
                  padding: "0 24px",
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            剩速度回应，向银河逼近
          </Footer>
        </Layout>
      </div>
    );
  }
}
