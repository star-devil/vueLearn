//每次打包之后需要重启
const path = require ('path');
module.exports = {
    // 设置之后打包文件可以取消Map.js文件（指出错误行）
    productionSourceMap: false,

    //自定义打包输出路径
    outputDir: './myDist',

    //在生产环境下的css文件用指定路径，开发环境用根路径
    publicPath: process.env.NODE_ENV === 'production' ? 'http://www.duyiedu.com' : '/',

    //将 js css img统一放在一个包下
    assetsDir: 'assets',

    //webpack隐藏配置，是一个函数
    chainWebpack: config => {
        //给文件起别名
        config.resolve.alias.set('_v', path.resolve(__dirname, 'src/views'))
    },

    //配置webpack
    configureWebpack: {
        // plugin:[],
        // moudle:{}
    },

    //配置服务代理
    devServer: {
        proxy: {
            '/mediListData':{ //当请求的url为这个时，就会走下面的代理，实现跨域
                target: 'https://www.easy-mock.com/mock/5dd5fa1c151112721f49f25a/specialPort'
            }
        }
    },

    // 插件“vue add style-resources-loader”下载好之后的代码块
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
            path.resolve(__dirname,'src/assets/styles/variable.less'),//将路径放在全局中，就不用再组件中import了
        ]
      }
    }
}
