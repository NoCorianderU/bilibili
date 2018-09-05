const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  videoTitle: {
    type: String
  },
  videoID: {
    type: String
  },
  upID: {
    type: String
  },
  summary: {
    type: String,
    default: ''
  },
  // time: {
  //   type: String
  // },
  parse: {
    type: Array,
    default: []
  },
  play: {
    type: Number,
    default: 0
  },
  danmu: {
    type: Number,
    default: 0
  },
  coins: {
    type: Number,
    default: 0
  },
  collections: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
  },
  comments: {
    type: Array,
    default: []
  }
})

videoSchema.pre('save', function (next) {
  next()
})

const Video = mongoose.model('video', videoSchema)


module.exports = Video
