
// const db = require('../tools/mongodb').getDB()

require('../tools/mongoose')
const user = require('../models/user')

module.exports = async ctx => {
  let { username } = ctx.query
  let data = await user.find({'username': username})
  if(data.length === 0) {
    ctx.state = {
      code: 1,
      data: {
        msg: '用户名可用'
      }
    }
  } else {
    ctx.state = {
      code: 0,
      data: {
        msg: '用户名已存在'
      }
    }
  }
}
