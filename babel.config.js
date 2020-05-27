/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 马璇玲
 * @Date: 2020-05-21 16:08:24
 * @LastEditors: 马璇玲
 * @LastEditTime: 2020-05-22 15:30:28
 */ 
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
