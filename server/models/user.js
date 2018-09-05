const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    default: ''
  },
  password: String,
  email: {
    type: String,
    default: ''
  },
  tel: Number,
  date: {
      type: Date,
      default: new Date
  },
  type: {
    type: String,
    default: 'normal'
  },
  collections: {
      type: Array,
      default: []
  },
  history: {
    type: Array,
    default: []
  }
})

const User = mongoose.model('user', userSchema)

module.exports = User
