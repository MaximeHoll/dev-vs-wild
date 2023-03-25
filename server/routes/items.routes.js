const express = require("express") ;
const router = express.Router()
const itemsController = require('../controller/items.controller')


router.route('/')
    .post(itemsController.create)
    .get(itemsController.getAll)
    

router.route('/:id')
    .get(itemsController.getOne)
    .put(itemsController.update)
    .delete(itemsController.remove)

router.route('/craft/:id')
    .post(itemsController.craft)


router.route('/user/:id')
    .get(itemsController.getAllForUser)

router.route('/crafts/options')
    .get(itemsController.getAllItemsWithCraftOptions)

router.route('/give/:id')
    .post(itemsController.give)

module.exports = router