import {
  getRecommendlist,
  getBannerList,
  getMv,
  getNewsong,
} from "../../../api/recommend";
import { Carousel, Card, Divider, Col, Row } from "antd";
import React, { Component } from "react";
export default class Rec extends Component {
  constructor() {
    super();
    this.state = {
      banners: [],
      recommendList: [],
      newsong: [],
      mv: [],
      songUrl: "",
    };
  }
  componentDidMount() {
    this.getBannersData();
    this.getRecommendListData();
    this.getNewSongData();
    this.getMVData();
  }

  async getBannersData() {
    const res = await getBannerList();
    console.log(res.data);
    if (res.data.code === 200) {
      // alert('轮播图数据请求成功！')

      this.setState({
        banners: res.data.banners,
      });
    }
  }

  async getRecommendListData() {
    const res = await getRecommendlist();

    if (res.data.code === 200) {
      // alert('推荐歌单数据请求成功！')
      this.setState({
        recommendList: res.data.result,
      });
    }
  }

  async getNewSongData() {
    const res = await getNewsong();

    if (res.data.code === 200) {
      // alert('最新音乐数据请求成功！')
      this.setState({
        newsong: res.data.result,
      });
    }
  }

  async getMVData() {
    const res = await getMv();

    if (res.data.code === 200) {
      // alert('最新mv数据请求成功！')
      this.setState({
        mv: res.data.result,
      });
    }
  }

  swiperRender() {
    const { banners } = this.state;
    const contentStyle = {
      textAlign: "center",
    };
    return (
      <Carousel autoplay {...contentStyle}>
        {banners.map((item) => {
          return (
            <div key={item.targetId}>
              <img src={item.imageUrl} alt=""></img>
            </div>
          );
        })}
      </Carousel>
    );
  }
  recommendListRender() {
    const { recommendList } = this.state;
    const { Meta } = Card;
    return (
      <div>
        <Divider orientation="left">Hi,今日为您推荐</Divider>
        {recommendList.map((item) => {
          return (
            <Card
              hoverable
              style={{
                width: 240,
                display: "inline-block",
                marginLeft: "30px",
                marginBottom: "20px",
              }}
              cover={<img alt="" src={item.picUrl} />}
            >
              <Meta title={item.name} description="" />
            </Card>
          );
        })}
      </div>
    );
    //
  }
  newsongRender() {
    const { newsong } = this.state;
    return (
      <div>
        <Divider orientation="left">最新上架</Divider>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            {newsong.map((item) => {
              return (
                <Col span={8}>
                  <Card
                    style={{
                      marginTop: "10px",
                    }}
                    title={item.name}
                    bordered={false}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        width: "50%",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        src={item.picUrl}
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        display: "inline-block",
                        width: "50%",
                        textAlign: "center",
                        fontSize: "15px",
                      }}
                    >
                      {item.song.artists[0].name}
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
  mvRender() {
    const { mv } = this.state;
    return (
      <div>
        <Divider orientation="left">数字专辑</Divider>

        {mv.map((item) => {
          return (
              <div
                className="site-card-border-less-wrapper"
                style={{
                  marginBottom: "30px",
                  // padding:'20px 30px',
                  background: "#ececec",
                }}
              >
                <Card
                  title={item.playCount}
                  bordered={false}
                  style={{
                    width: "40%",
                    height:'100%',
                    // display: "flex",
                    marginRight:'50px'
                  }}
                >
                  <p>{item.copywriter}</p>
                  <p>{item.artistName}</p>
                </Card>
                <div
                  style={{
                    display: "inline-block",
                    width: "50%",
                    height: "100%",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={item.picUrl}
                    alt=""
                  />
                </div>
              </div>
          );
        })}
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.swiperRender()}
        {this.recommendListRender()}
        {this.newsongRender()}
        {this.mvRender()}
      </div>
    );
  }
}
