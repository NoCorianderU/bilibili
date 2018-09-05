// const db = require('../tools/mongodb').getDB()
require('../tools/mongoose')
const user = require('../models/user')

module.exports = async ctx => {
  let data = await user.create(ctx.query)
  if(data.__v === 0) {
    ctx.state = {
      code: 1,
      data: {
        msg: '注册成功'
      }
    }
  } else {
    ctx.state = {
      code: 0,
      data: {
        msg: '注册失败，请稍后再试'
      }
    }
  }
}
