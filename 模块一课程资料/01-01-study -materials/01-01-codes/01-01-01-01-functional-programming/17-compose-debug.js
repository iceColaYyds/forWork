// 函数组合 调试 
// NEVER SAY DIE  --> never-say-die

const _ = require('lodash')

// 查找错误在哪里
const log = v => {
  console.log(v)
  return v
}

// trace是log的升级版本，通过柯理化的方法打印值v，tag自己记录
const trace = _.curry((tag, v) => {
  console.log(tag, v)
  return v
})

// _.split()
const split = _.curry((sep, str) => _.split(str, sep))

// _.toLower()
const join = _.curry((sep, array) => _.join(array, sep))

const map = _.curry((fn, array) => _.map(array, fn))

const f = _.flowRight(join('-'), trace('map 之后'), map(_.toLower), trace('split 之后'), split(' '))

console.log(f('NEVER SAY DIE'))