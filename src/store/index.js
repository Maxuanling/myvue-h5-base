/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 杨兰
 * @Date: 2020-03-26 11:25:58
 * @LastEditors: 马璇玲
 * @LastEditTime: 2020-05-22 10:34:03
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import {DECREASE} from "./mutation-types.js"

const store = new Vuex.Store({
    state:{
        students:[
            {name:"明明",
            age:19,
            height:1.98},{
                name:"xiaohong",
                age:77,
                height:1.22
            },{
                name:"lili",
                age:30,
                height:1.55
            }
        ],
        money:80,
        msg:"我是state的数据",
        number:10
    },
    getters:{
        // 相当于vue中的computed
        // getters第一种定义
        more23stu(state){
            return state.students.filter(s => s.age > 23);
        },
        // getters第二种定义
        more23stuLength(state,getters){
            return getters.more23stu.length;
        },
        // getters第三种定义
        moreAgestu(state){
            return function(age){
                return state.students.filter(s => s.age >age);
            }
        }
    },
    mutations:{
        // 相当于vue中的methods，不过这里只能跑同步操作
        // 对state的更改只能在mutations中进行。
        // 第一种用法
        addMoney(state){
            state.money += 5;
        },
        // 第二种用法：传参
        addNumMoney(state,num){
            state.money += num;
        },
        // 第三种用法：传payload荷载对象
        addObjMoney(state,payload){
            state.money += payload.num;
            console.log(payload)
        },
        // mutation-type用法
        [DECREASE](state,num){
            state.money -= num;
        },
        chgNum(state,payload){
            state.number += payload.num;
        }

    },
    actions:{
        //所有异步操作只能在actions中进行，也相当于vue中的methods
        //不过这里不是直接变更state，而是提交mutations（我们说过变更state只能在mutations中进行）
        aaddMoney(context){
            context.commit("addMoney");
        },
        achgNum(context,payload){
            setTimeout(()=>{
                context.commit("chgNum",payload);
            },1000)
        },
        achgNum2(context,payload){
            function aa(){
                const p = new Promise((resolve,reject) => {
                    setTimeout(()=>{
                        context.commit("chgNum",payload);
                        console.log("aa")
                    })
                    resolve(payload);
                    reject("error");
                }).then(value =>{
                    console.log(value);
                    console.log("success");
                }).catch(err =>{
                    console.log(err);
                })
            }
            aa();
        }
    },
    modules:{

    }
})

export default store;