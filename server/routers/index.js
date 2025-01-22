const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const forumRouter = require('./forumRouter')
const textusersRouter = require('./textusersRouter')

router.use('/user', userRouter)
router.use('/textusers', textusersRouter)
router.use('/forum', forumRouter)

module.exports = router