/*
 * @Descripttion: Vincent
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2020-04-08 21:18:03
 * @LastEditors: vincent_Huanghd@126.com
 * @LastEditTime: 2020-04-08 21:19:50
 * @description:
 */
// 导入组件，组件必须声明 name
import sliderVerify from './src/vue-slider-verify.vue'

// 为组件提供 install 安装方法，供按需引入
sliderVerify.install = function (Vue) {
    Vue.component(sliderVerify.name, sliderVerify)
}

// 默认导出组件
export default sliderVerify
