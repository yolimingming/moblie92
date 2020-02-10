const {
  sep
} = require('path')

module.exports = ({
  file
}) => {
  const rootValue = file.dirname.indexOf(`node_modules${sep}vant`) !== -1
    ? 37.5
    : 75
  // 遇到vant元素用37.5的值, 若是自己添加的元素用75 的值
  return {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue,
        propList: ['*']
      }
    }
  }
}
