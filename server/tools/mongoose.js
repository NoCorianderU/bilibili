const mongoose = require('mongoose')
const Config = require('./config')

mongoose.connect(`${Config.url}/${Config.dbName}`, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('数据库已连接~~~')
})
