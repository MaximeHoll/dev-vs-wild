const express = require("express") ;
const router = express.Router()
const usersController = require('../controller/users.controller')


router.route('/')
    .post(usersController.create)
    .get(usersController.getAll)
    

router.route('/:id')
    .get(usersController.getOne)
    .put(usersController.update)
    .delete(usersController.remove)

module.exports = router