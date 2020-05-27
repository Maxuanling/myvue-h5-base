/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 杨兰
 * @Date: 2020-03-26 11:25:58
 * @LastEditors: 马璇玲
 * @LastEditTime: 2020-05-27 17:39:50
 */
// const path = require("path");
// function resolve(dir){
//     return path.resolve(_dirname,dir);
// }

let subjectTarget = 'http://onlineschoolapi.beta.hqjy.com/';

module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                "assets":"@/assets",
                "common":"@/common",
                "components":"@/components",
                "network":"@/network",
                "views":"@/views",
                "utils":"@/utils",
                "store":"@/store",
            }
        }
    },
    devServer: {
        open: false,//浏览器是否自动打开页面
        host: 'localhost',
        port: 8080,
        https: false,
        proxy: {//配置跨域
            '/subject': {
                target: subjectTarget,//跨域地址
                changeOrigin: true,//允许跨域
                pathRewrite: {
                  '^/subject': '/onlineschool',
                }
            },
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit:75,
                        exclude:"/node_modules/i",
                    }), // 换算的基数
                ]
            }
        }
    }
}

