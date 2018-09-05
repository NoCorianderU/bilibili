
// const db = require('../tools/mongodb').getDB()
require('../tools/mongoose')
const video = require('../models/video')

let data = ''
video.countDocuments({}, (err, count) => {
  if (err) {
    console.log(err)
  } else {
    video.create({
      videoTitle: '【老E】50 VS 50！街舞高手的终极Battle！',
      upIDsss: 'EdmundDZha2222ng',
      // videoID: `av${count + 1}`
    }, (err, doc) => {
      if (err) {
        data = 'aa'
      } else {
        data = doc
      }
    })
  }
})

module.exports = async ctx => {
  ctx.state.data = {
    msg: data
  }
}
