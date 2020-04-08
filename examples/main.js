/*
 * @Descripttion: Vincent
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2020-04-08 10:14:59
 * @LastEditors: vincent_Huanghd@126.com
 * @LastEditTime: 2020-04-08 21:25:31
 * @description: 
 */

import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import sliderVerify from './../packages/index'
// 注册组件库
Vue.use(sliderVerify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
