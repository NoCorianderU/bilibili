const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')

const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
const config = require('./config')

// 使用响应处理中间件
app.use(response)

// 解析请求体
app.use(bodyParser())

// app.use(async (ctx, next) => {
//   console.time('time')
//   await next()
//   console.log(ctx.params)
//   console.timeEnd('time')
// })

app.use(cors({
  origin: function (ctx) {
      // if (ctx.url === '/test') {
      //     return "*" // 允许来自所有域名请求
      // }
      return 'http://localhost:8080';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

// app.use(async (ctx, next) => {
//   console.log('request come,' + ctx.url)
//   await next()
// })

// 引入路由分发
const router = require('./routes')
app.use(router.routes())

// 启动程序，监听端口
app.listen(config.port, () =>{
  console.log(`port ${config.port} on`)
})
