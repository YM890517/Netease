import axios from "axios"

var baseUrl = "/api"

axios.interceptors.response.use(config => {
  console.log(config);
  return config
})

//手机登录
export const reqPhone = (data) =>{
  return axios({
    url:baseUrl+"/login/cellphone",
    method:"get",
    params:data
  })
}

//发送验证码
export const reqCaptcha = (phone) => {
  return axios({
    url:baseUrl+"/captcha/sent",
    method:"get",
    params:phone
  })
}

//验证验证码对错
export const reqVerify = (phone) => {
  return axios({
    url:baseUrl+"/captcha/verify",
    method:"get",
    params:phone
  })
}

//推荐的请求
export const reqTuijian = () => {
  return axios({
    url:baseUrl + "/personalized",
    method:"get"
  })
}

//歌曲详情列表
export const reqList = (id) => {
  return axios({
    url:baseUrl + "/playlist/detail",
    method:"get",
    params:id
  })
}

//评论请求
export const reqComment = (id) => {
  return axios({
    url:baseUrl + "/comment/music",
    method:"get",
    params:id
  })
}

//排行榜请求
export const reqTop = () => {
  return axios({
    url:baseUrl + "/toplist/detail",
    method:"get"
  })
}

//默认搜索关键词
export const reqSearchot = () => {
  return axios({
    url:baseUrl + "/search/hot",
    method:"get"
  })
}

//搜索词
export const reqSearch = (data) => {
  return axios({
    url:baseUrl + "/search",
    method:"get",
    params:data
  })
}

