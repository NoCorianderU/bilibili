// const db = require('../tools/mongodb').getDB()
require('../tools/mongoose')
const user = require('../models/user')

module.exports = async ctx => {
  let { username } = ctx.request.query
  let data = await user.findOne({"username": username})
  ctx.state.data= data
}
