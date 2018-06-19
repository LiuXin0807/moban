import axios from 'axios'
import Cookies from 'js-cookie'
import router from '../router'
import store from '../store'

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(
  response => {
    // console.log('success', response)
    return response
  },
  error => {
    // console.log('error', error)
    // return Promise.stop()
    return Promise.reject(error)
  })

const apiResult = {
  ax: null,
  fetch(ax){
    this.ax = ax
    return this
  },
  then(successed, failed){
    if (!this.ax)
      return
    return this.ax.then(res => {
      if (res.data.code === 200 || !res.data.code) {
        if (successed)
          successed(res.data)
      } else {
        if (failed) {
          failed(res.data)
        } else {
          if(res.data.code == -1){
            store.state.apierr=true
            store.state.apierrMsg=res.data.msg
          }
          if ( res.status == 403 ) {
            // window.location = store.state.oldUrl+'login'
            router.push({name: 'login'})
          }
          // console.log('error2', res.data)
          //Message({
          //  type: 'error',
          //  message: res.data.msg,
          //  // duration: 0
          //})
        }
      }
    }).catch(error => {
      // if (error.response) {
      //   // The request was made and the server responded with a status code
      //   // that falls out of the range of 2xx
      //   console.log(error.response.data);
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
      // } else if (error.request) {
      //   // The request was made but no response was received
      //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      //   // http.ClientRequest in node.js
      //   console.log(error.request);
      // } else {
      //   // Something happened in setting up the request that triggered an Error
      //   console.log('Error', error.message);
      // }
      if (failed) {
        failed({code: 999, msg: error.message})
      } else {
        // console.log(error)
        //Message({
        //  title: 'error',
        //  message: error.message,
        //  // duration: 0
        //})
      }
    })
  }
}

export default {
  post(url, data) {
    var openId = Cookies.get('ICMPY_WX_OPENID')
    var originalId = Cookies.get('ICMPY_WX_ORIGINALID')
    if ( !!data ) {
      data.openId = openId
    } else {
      data = {
        openId: openId
      }
    }
    let ax = axios({
      method: 'post',
      url,
      data: data,
      headers: {"openId": openId,'originalId':originalId},
      timeout: 30000
    })
    return apiResult.fetch(ax)
  },
  get(url, params) {
    var openId = Cookies.get('ICMPY_WX_OPENID')
    var originalId = Cookies.get('ICMPY_WX_ORIGINALID')
    if ( !!params ) {
      params.openId = openId
    } else {
      params = {
        openId: openId
      }
    }
    let ax = axios({
      method: 'get',
      url,
      params,
      dataType: 'jsonp',
      // header:'Access-Control-Allow-Headers:x-requested-with,content-type',
      headers: {"openId": openId,'originalId':originalId},
      timeout: 30000
    })
    return apiResult.fetch(ax)
  }
}
