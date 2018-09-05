/**
 * ajax 服务路由集合
 */
const router = require('koa-router')()
const controllers = require('../controllers')

router.get('/demo', controllers.demo)
// router.get('/list', controllers.list)
router.get('/checkUsername', controllers.checkUsername)
router.get('/request', controllers.request)

router.post('/register', controllers.register)
router.post('/login', controllers.login)
router.post('/uploadvideo', controllers.uploadvideo)

module.exports = router
