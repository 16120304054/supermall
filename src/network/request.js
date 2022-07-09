import axios from "axios";
export function request(config){
    // 1.创建实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout: 5000
    })
    // 2.1请求拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err=> {

    })
    // 2.2 响应拦截器
    instance.interceptors.response.use(res => {
        return res;
    }, err => {

    })
    // 3.发送真正的网络请求
    return instance(config);
}

export function requestData(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    }, err=>{

    })
    instance.interceptors.response.use(config => {
        return config;
    }, err => {

    })
    return instance(config);
}