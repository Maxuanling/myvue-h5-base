<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: 马璇玲
 * @Date: 2020-05-27 16:37:05
 * @LastEditors: 马璇玲
 * @LastEditTime: 2020-05-27 17:51:13
--> 
<template>
  <div>
      lssllsls我是第二个
    
  </div>
</template>

<style scoped>

</style>

<script>
  import {DECREASE} from "store/mutation-types.js"
  
  export default {
    data(){
      return {
        msg:"haha",
        msgTip:"",
        liveList:[],
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
    created(){

    },
    mounted(){
      
    }
  }
</script>

