<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: 杨兰
 * @Date: 2020-03-26 11:25:58
 * @LastEditors: 马璇玲
 * @LastEditTime: 2020-05-27 17:50:19
 -->
<template>
    <div class="home">
        <router-link tag="button" to="/store">state状态学习</router-link>
        <router-link tag="button" to="/store02">其他学习</router-link>
        <router-view></router-view>
    </div>
</template>
<style scoped>
    .home{
        width:100%;
        height:100%;
        padding:100px;
    }
    button{
        border:2px solid red;
        width:200px;
        height:80px;
        margin:20px;
    }
    p{
        font-size:28px;
    }
    h2{
        font-size:36px;
    }
</style>

<script>
    export default {
        name:"home",
        data(){
            return {
                
            }
        },
        computed:{
            
        },
        watch:{
            
        },
        methods:{
            
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