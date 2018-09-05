// const db = require('../tools/mongodb').getDB()
require('../tools/mongoose')
const video = require('../models/video')

module.exports = async ctx => {
  video.countDocuments({}, function (err, count) {
    console.log('there are %d jungle adventures', 1);
  })
  let data = await video.create(ctx.query)
  if(data.__v === 0) {
    ctx.state = {
      code: 1,
      data: {
        msg: '上传成功'
      }
    }
  } else {
    ctx.state = {
      code: 0,
      data: {
        msg: data
      }
    }
  }
}
