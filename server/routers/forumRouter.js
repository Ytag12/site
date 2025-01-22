const Router = require('express')
const router = new Router()
const forumController = require('../controllers/forumController')

router.post('/create', forumController.create)
router.get('/get', forumController.get)
// router.get('/:id', forumController.getOne)

module.exports = router