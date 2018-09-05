require('../tools/mongoose')
const user = require('../models/user')

module.exports = async ctx => {
  let {
    username,
    password
  } = ctx.query
  let data = await user.findOne({
    'username': username
  })
  if (!data) {
    ctx.state = {
      code: 2,
      data: {
        msg: '用户名不存在'
      }
    }
  } else {
    if (data.password == password) {
      ctx.state = {
        code: 1,
        data: {
          msg: '登陆成功'
        }
      }
    } else {
      ctx.state = {
        code: 3,
        data: {
          msg: '密码错误'
        }
      }
    }
  }
  // } else {
  //   ctx.state = {
  //     code: 0,
  //     data: {
  //       msg: '注册失败，请稍后再试'
  //     }
  //   }
  // }
}
