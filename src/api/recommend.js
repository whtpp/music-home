import request from "../utils/request";
//获取轮播图列表
export const getBannerList = () => {
  return request({
    url: '/banner',
  })
}

// 获取推荐歌单
export const getRecommendlist = ({ limit = 9 } = {}) => {
  return request({
    url: '/personalized',
    method: 'get',
    params: {
      limit,
    },
  })
}

// 获取最新音乐
export const getNewsong = ({limit = 12} = {}) => {
  return request({
    url: '/personalized/newsong',
    method: 'get',
    params:{
      limit,
    }
  })
}

// 获取推荐MV
export const getMv = ({limit = 5}={}) => {
  return request({
    url: '/personalized/mv',
    method: 'get',
    params:{
      limit,
    }
  })
}

// 获取音乐的url
export const getSongUrl = ({ id }) => {
  return request({
    url: '/song/url',
    method: 'get',
    params: {
      id,
    },
  })
}
