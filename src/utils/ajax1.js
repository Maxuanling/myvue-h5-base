
// axios返回的是一个promise

// 一、---------------------全局创建axios------------

axios.defaults.baseURL = "http://127.0.0.1";
axios.defaults.timeout = "4000";
axios({
    // 请求配置
    url:"hqjy.learnnewcenter.com",
    method:"get",
    params:{id:1}
})
// 请求成功
.then(res =>{
    console.log(res);
})
// 请求失败
.catch(err =>{
    console.log(err);
})

// 二、------------两个全局ajax请求同时进行----------
// -----1.1 请求成功后第一种数据方式
axios.all([axios({
    url:url1,
    methods:"POST"
}),axios({
    url:url2,
    params:{id:1,name:"xioaming"}
})])
.then(results =>{
    // 这里返回的results是一个数组[res1,res2]

})
.catch(err =>{

})

// -----1.2、请求成功后的第二种数据处理方式
axios.all([axios({
    url:url1,
    method:"POST"
}),axios({
    url:url2,
    params:{id:1,name:"xioaming"}
})])
.then(axios.spread((res1,res2)=>{
    // res1为第一个请求返回的数据
    // res2为第二个请求返回的数据
}))
.catch(err =>{

})



// 三、局部创建axios实例
const instance1 = axios.create({
    baseURL:"http://hqjy.com",
    timeout:1000
})
instance1({
    url:url1,
    params:"",
})
.then(res =>{

})
.catch(err =>{

})

instance1({
    url:url2,
    params:"",
})
.then(res =>{

})
.catch(err =>{

})


// 四、 实际项目开发过程中，不应该每个.vue页面中都引入axios，都编写一遍请求操作
// 而应该将其封装起来，export一个出口
// 做法是：创建一个request.js文件，封装一个axios
// 4.1封装
export function request(config){
    const instance = axios.create({
        baseURL:"http:123.4.4.5:9000",
        timeout:3000
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
