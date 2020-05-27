/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 马璇玲
 * @Date: 2020-05-21 16:08:24
 * @LastEditors: 马璇玲
 * @LastEditTime: 2020-05-27 17:46:35
 */ 
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: resolve => require(['@/views/home.vue'], resolve),
        meta: {
            title: '首页'
        },
        children:[
            {
                path: 'store',
                name: 'store',
                component: resolve => require(['@/components/study/study_store/index'], resolve),
                meta: {
                    title: 'state状态学习'
                },
            },
            {
                path: 'store02',
                name: 'store02',
                component: resolve => require(['@/components/study/study02/index'], resolve),
                meta: {
                    title: 'state状态学习'
                },
            },
        ]
    },
    
]

let router = new Router({
    mode: 'history',
    routes,
})
  
export default router;