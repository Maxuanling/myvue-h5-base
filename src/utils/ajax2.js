
import axios from "axios";
// 1封装
export function request(config){
    // 1.1创建axios局部实例
    const instance = axios.create({
        baseURL:"http:123.4.4.5:9000",
        timeout:3000
    })
    // 拦截器并不是非要不可的，看实际开发需求

    // 1.2 创建局部axios请求拦截
    // 请求拦截的作用：1.2.1 比如config配置中的一些信息不符合服务器的要求
    // 1.2.2 比如每次发送网络请求时，都希望在界面中显示一个请求的转圈圈图标，等到网络请求成功之后再隐藏
    // 则可以在请求拦截中显示，在响应拦截中隐藏
    // 1.2.3 比如某些网络请求（例如登录）需要携带一些特殊的信息（例如token令牌）
    // 此时可以在请求拦截中判断config中的url是否是特例，是则携带上token
    instance.interceptors.request.use(config =>{
        console.log(config);
        // 拦截器，顾名思义就是把东西拦下来。因此对config处理完之后需要把它返回去，否则请求会发送不出去
        return config;
    },err =>{
        // 请求发送不出去时跳到这里
        console.log(err);
    })
    // 1.3创建局部axios响应拦截
    instance.interceptors.response.use(res=>{
        // 服务器成功返回数据则到这里
        // 此处的res不仅包括data、还有config、headers、status、statusText等等配置信息
        // 因此可以在这里将返回的res先简单处理一下再return出去,毕竟大部分调用者实际只需要res.data这个数据而已。
        console.log(res);
        // 拦截器顾名思义就是把东西拦下来，因此处理完res之后需要把它返回去，否则请求失败拿不到所需数据
        return res.data;
    },err=>{
        // 服务器返回数据失败跳到这里
        console.log(err);
    })
    // 此处return的是一个promise
    return instance(config);
}

// 4.2在.vue页面中调用
request({
    // config即基本配置
    url:url1,
    timeout:4000,
    params:{id:2}
})
.then(res =>{
    // 请求成功返回数据res
})
.catch(err =>{
    // 请求失败返回数据err
})
