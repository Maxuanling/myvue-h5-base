/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 马璇玲
 * @Date: 2020-04-01 09:57:04
 * @LastEditors: 马璇玲
 * @LastEditTime: 2020-05-21 15:37:44
 */ 
import fetch from "utils/fetch.js";

export default {
    // 获取直播列表
    getZMLiveList: (params) => fetch({
        url: `/subject/web/operationLivesList`,
        method: 'GET',
        params
    }),
  }