/*
 * @Descripttion: Vincent
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2020-04-08 21:20:43
 * @LastEditors: vincent_Huanghd@126.com
 * @LastEditTime: 2020-04-08 21:49:17
 * @description:
 */
// 导入颜色选择器组件
import sliderVerify from './vue-slider-verify'

// 存储组件列表
const components = [
    sliderVerify
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    console.log(components)
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    sliderVerify
}
