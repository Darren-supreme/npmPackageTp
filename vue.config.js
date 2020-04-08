/*
 * @Descripttion: Vincent
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2020-04-08 10:15:59
 * @LastEditors: vincent_Huanghd@126.com
 * @LastEditTime: 2020-04-08 10:20:25
 * @description: 
 */
module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    //扩展webpack配置，使webpack加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                //修改重置其选项..
                return options
            })
    }
}