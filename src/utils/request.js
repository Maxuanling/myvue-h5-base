import axios from "axios";
// 1封装
export function request(config){
    // 1.1创建axios局部实例
    const instance = axios.create({
        baseURL:"http:123.4.4.5:9000",
        timeout:3000
    })
    // 1.2 创建局部axios请求拦截
    instance.interceptors.request.use(config =>{
        console.log(config);
        return config;
    },err =>{
        // 请求发送不出去时跳到这里
        console.log(err);
    })
    // 1.3创建局部axios响应拦截
    instance.interceptors.response.use(res=>{
        console.log(res);
        return res.data;
    },err=>{
        console.log(err);
    })
    return instance(config);
}
