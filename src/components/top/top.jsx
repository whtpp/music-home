import React, { Component } from "react";
import {
  SearchOutlined,
  BankOutlined,
  SwitcherOutlined,
  ExpandAltOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Input, Button } from "antd";

import { Link, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

export default class Top extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <ul
              style={{
                float: "left",
                marginLeft:'-60px',
                width: "400px",
              }}
            >
              <li className="li-btn">
                <Button
                  className="Btn"
                  style={{
                    backgroundColor: "rgb(228, 60, 48)",
                  }}
                  type="primary"
                  shape="circle"
                  icon={<BankOutlined />}
                  onClick={() => window.history.go("/")}
                />
              </li>
              <li className="li-btn">
                <Button
                  style={{
                    backgroundColor: "rgb(251, 195, 32)",
                  }}
                  className="Btn"
                  type="primary"
                  shape="circle"
                  icon={<SwitcherOutlined />}
                />
              </li>
              <li className="li-btn">
                <Button
                  style={{
                    backgroundColor: "rgb(39, 152, 70)",
                  }}
                  className="Btn"
                  type="primary"
                  shape="circle"
                  icon={<ExpandAltOutlined />}
                />
              </li>
              <li  className="li-btn"></li>
              <li  className="li-btn"></li>
              <li className="li-btn">
                <Button
                  style={{
                    backgroundColor: "#fff",
                  }}
                  className="Btn"
                  shape="circle"
                  icon={<CaretLeftOutlined />}
                  onClick={() => window.history.go(-1)}
                />
              </li>
              <li className="li-btn">
                <Button
                  style={{
                    backgroundColor: "#fff",
                  }}
                  className="Btn"
                  shape="circle"
                  icon={<CaretRightOutlined />}
                  onClick={() => window.history.go(1)}
                />
              </li>
            </ul>

            <div
              style={{
                display: "inline-block",
                float: "right",
                width: "300px",
                height: "100%",
                marginTop: "15px",
              }}
            >
              <Input
                placeholder="爱在西元前"
                style={{
                  display: "inline-block",
                  float: "left",
                  width: "200px",
                  fontSize: "12px",
                }}
              />
              <Button
                type="primary"
                style={{
                  display: "inline-block",
                  float: "left",
                  width: "40px",
                  backgroundColor: "transparent",
                  border: "0px",
                }}
                icon={<SearchOutlined />}
              />
            </div>
          </Header>
          <Content
            style={{
              padding: "0 50px",
              backgroundColor:'#f0f5ff'
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
                backgroundColor:'#f0f5ff'
              }}
            >
              <Sider className="site-layout-background" style={{
                height:'300px'
              }} width={200}>
                <ul
                  style={{
                    height: "100%",
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  <Link
                    style={{
                      color: "#fff",
                    }}
                    to="/recommend"
                  >
                    {" "}
                    <li
                      className="Navli"
                      style={{
                        listStyle: "none",
                        fontSize: "15px",
                        height: "25%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      推荐
                    </li>
                  </Link>

                  <Link
                    style={{
                      color: "#fff",
                    }}
                    to="/col"
                  >
                    <li
                      style={{
                        listStyle: "none",
                        fontSize: "15px",
                        height: "25%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      收藏
                    </li>
                  </Link>
                      
                  <Link
                    style={{
                      color: "#fff",
                    }}
                    to="/high"
                  >
                    <li
                      style={{
                        listStyle: "none",
                        fontSize: "15px",
                        height: "25%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Top榜
                    </li>
                  </Link>

                  <Link
                    style={{
                      color: "#fff",
                    }}
                    to="/mv"
                  >
                    <li
                      style={{
                        listStyle: "none",
                        fontSize: "15px",
                        height: "25%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      MV
                    </li>
                  </Link>
                </ul>
              </Sider>
              <Content
                style={{
                  padding: "0 24px",
                  minHeight: 280,
                }}
              >
                <Outlet></Outlet>
              </Content>
            </Layout>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              fontSize: "16px",
              backgroundColor:'#f0f5ff',
              marginBottom:'100px'
            }}
          >
            剩速度回应，向银河逼近
          </Footer>
        </Layout>
        <div style={{
          backgroundColor: "rgb(0, 21, 41)",
          position:'fixed',
          bottom:'0',
          width:'100%',
          height:'90px'
        }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <audio
              style={{
                width: "600px",
                height: "40px",
              }}
              controls
              loop
              src=""
            ></audio>
          </div>
        </div>
      </div>
    );
  }
}
