<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: 杨兰
 * @Date: 2020-03-26 11:25:58
 * @LastEditors: 马璇玲
 * @LastEditTime: 2020-05-22 15:21:44
 -->
<template>
    <div class="home">
        <p>{{$store.state.students}}</p>
        <p>$store.getters.more23stu————{{$store.getters.more23stu}}</p>
        <p>$store.getters.more23stuLength————{{$store.getters.more23stuLength}}</p>
        <p>$store.getters.moreAgestu(55)————{{$store.getters.moreAgestu(55)}}</p>

        <h2>mutations</h2>
        <button @click="addMoney">+5</button>
        <button @click="addNumMoney(10)">+10</button>
        <button @click="addObjMoney(15)">+15</button>
        <button @click="decrease(10)">-10</button>
        <p>{{$store.state.money}}元</p>
        <br>
        <hr>
        <br>
        <h2>actions</h2>
        <button @click="aaddMoney">actions第一种用法:+5</button>
        <button @click="achgNum(10)">actions异步操作用法:number+10</button>
        <button @click="achgNum2(20)">actions异步操作用法:number+20</button>
        <p>{{$store.state.number}}</p>
        <br>
        <hr>
        <br>
        <input type="text" v-model="msg">
        <p>{{tip}}</p>
        <p>{{msgTip}}</p>
        <p>{{liveList}}</p>
    </div>
</template>
<style scoped>
     /* @import "assets/css/common/Normalize.css"; */
    p{
        font-size:28px;
    }
    h2{
        font-size:36px;
    }
</style>

<script>
    import {DECREASE} from "../store/mutation-types.js"
    
    export default {
        name:"home",
        data(){
            return {
                msg:"haha",
                msgTip:"",
                liveList:[],
            }
        },
        computed:{
            tip(){
                if(this.msg.length>6 && this.msg.length <10){
                    return "信息长度大于6啦"
                }else if(this.msg.length >11 && this.msg.length <15){
                    return "信息长度大于11啦"
                }else{
                    return ""
                }
            }
        },
        watch:{
            msg(newVal,oldVal){
                if(newVal.length >6 && newVal.length <10){
                    this.msgTip = "信息长度大于6啦";
                }else if(newVal.length > 11 && newVal.length < 15){
                    this.msgTip = "信息长度大于11啦";
                }
            }
        },
        methods:{
            addMoney(){
                this.$store.commit("addMoney");
            },
            addNumMoney(num){
                this.$store.commit("addNumMoney",num);
            },
            addObjMoney(num){
                this.$store.commit("addObjMoney",{num});
            },
            [DECREASE](num){
                this.$store.commit(DECREASE,num);
            },
            aaddMoney(){
                this.$store.dispatch("aaddMoney")
            },
            achgNum(num){
                this.$store.dispatch("achgNum",{num});
            },
            achgNum2(num){
                this.$store.dispatch("achgNum2",{num});
            },
            test(){
                new Promise((resolve,reject)=> {
                    // 这里是异步请求操作
                    resolve("success"); //成功时调用这个
                    reject("error");    //失败时调用这个
                }).then(function(value){
                    console.log(value); //成功时调用这个函数，输出success
                    return "success2";
                }).then(function(value){
                    console.log(value); //输出success2
                }).catch(function(err){
                    console.log(err);   //失败时调用这个函数，输出error
                })
            }
        },
        created(){
            this.$api.getZMLiveList({platform :"app"}).then(res=>{
                if(res.code === 200){
                    this.liveList = res.data;
                }
            })
        }
    }
</script>