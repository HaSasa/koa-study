import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'

function serviceProtocol() {
    // return 'https:'
    let protocol = window.location.protocol || 'http:';
    if (protocol == 'file:') protocol = 'https:';
    return protocol;
}

// import * as _ from './whole'
axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://www.guinaben.com:8070';
// axios.defaults.baseURL = 'http://192.168.1.129:8383';
//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    // _.toast("错误的传参");
    // console.warn("错误的传参");
    return Promise.reject(error);
});
//code状态码200判断
axios.interceptors.response.use((res) =>{
    if(!res.data.hasOwnProperty('status')) {
        return Promise.reject(res.data);
    }
    return res.data;
}, (error) => {
    return Promise.reject(error);
});

function fetch(options) {
    options = options || {};
    let pos = options.url.search(/^http/i);
    if (pos == -1) options.url = serviceProtocol() + options.url;
    options.headers = options.headers || {};
    options.headers['Accept'] = 'application/json';
    options.headers['Content-Type'] = 'application/json';
    options.headers['Access-Control-Allow-Origin'] = '*'
    options.headers['mode'] = 'no-cors'
    // options.headers['HC-ACCESS-TOKEN'] = Cookies.get('hanmaker_auth') || window.localStorage.getItem('hc_access_token')

    return axios(options)
}

export default fetch;