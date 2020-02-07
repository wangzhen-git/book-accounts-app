
//这一部分的内容都是为了配置 css sprite loader ，这块儿的内容等项目做完之后你要好好研究一下
const path =require('path')


module.exports = {
  lintOnSave:false,
    chainWebpack:config=>{
      const dir = path.resolve(__dirname,'src/assets/icons')

      config.module
          .rule('svg-sprite')
          .test(/\.svg$/)
          .include.add(dir).end() //只包含 icons 目录
          .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
      //接下来配置插件
      config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite:true}])
      config.module.rule('svg').exclude.add(dir)
    }

}
