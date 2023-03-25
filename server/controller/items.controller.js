const asyncHandler = require('express-async-handler')
const db = require('../models')

//create Models


const Item = db.items
const User = db.users
const Inventory = db.inventories

//CREATE

//create one item
//POST api/items

const create = asyncHandler(async (req,res) =>{
    const {name, craftItem1, craftItem2} = req.body

    if(craftItem1 && craftItem2) {
        const craft = {items: [craftItem1,craftItem2]}
        const obtention = "craft"
        const createdItem = await Item.create({name, craft, obtention})

        res.json(createdItem)
    } else {
        const obtention = "harvest"
        const craft = null
        const createdItem = await Item.create({name, craft, obtention})

        res.json(createdItem)
    }
    
})

//give one item to user
//POST api/items/give/:id

const give = asyncHandler(async (req,res) =>{
    const {id_item} = req.body
    const id_user = req.params.id

    const foundItem = await Item.findOne({where:{id_item}})
    const foundInventory = await Inventory.findOne({where: {id_item, id_user}})
    
    if(foundInventory){
        foundInventory.quantity = (foundInventory.quantity + 1)
        await foundInventory.save()
        res.json(`You now have ${foundInventory.quantity} ${foundItem.name} `)
    } else {
        await Inventory.create({id_item, id_user})
        res.json(`You now have 1 ${foundItem.name}`)
    }
})

//craft one item with two
//POST api/items/craft/:id

const craft = asyncHandler(async (req,res) =>{
    const {item1, item2, craftedItem} = req.body
    const id_user = req.params.id

    const foundUser = await User.findOne({where: {id_user}})
    const alreadyExistingItem = await Inventory.findOne({where:{id_user, id_item: craftedItem}})

    const foundInventory1 = await Inventory.findOne({where:{id_user, id_item: item1}})
    const foundInventory2 = await Inventory.findOne({where:{id_user, id_item: item2}})

    if(foundInventory1.quantity >= 1) {
        foundInventory1.quantity = (foundInventory1.quantity - 1)
        await foundInventory1.save()
    }
    if(foundInventory2.quantity >= 1) {
        foundInventory2.quantity = (foundInventory2.quantity - 1)
        await foundInventory2.save()
    }
    if(foundInventory1.quantity < 1) {
        await Inventory.destroy({where:{id_user, id_item: item1}})
    }
    if(foundInventory1.quantity < 1) {
        await Inventory.destroy({where:{id_user, id_item: item2}})
    }

    if(!alreadyExistingItem) {
        const newItem = await Item.findOne({where:{id_item: craftedItem}})
        foundUser.addItem(newItem)
        res.json(`Crafted ${newItem.name}`)
    }

    if(alreadyExistingItem) {
        alreadyExistingItem.quantity = (alreadyExistingItem.quantity + 1)
        await alreadyExistingItem.save()
        const craftedItem = await Item.findOne({where: {id_item: alreadyExistingItem.id_item}})
        res.json(`Crafted ${craftedItem.name}`)
    }

    

    
})

//READ

// get all items
// GET /api/items

const getAll = asyncHandler(async (req,res) => {

    const foundItems = await Item.findAll()

    res.json(foundItems)
    
})

//get one item
//GET /api/items/:id

const getOne = asyncHandler(async (req,res) => {

    const id_item = req.params.id

    const foundItem = await Item.findOne({where: {id_item}})

    res.json(foundItem)
    
})


//get all items for user
//GET /api/items/user/:id

const getAllForUser = asyncHandler(async (req,res) => {

    const id_user = req.params.id

    const foundUser = await User.findOne({where:{id_user}, include: Item})

    res.json(foundUser.items)
    
})

//get all craftable items and their craft ingredient
//GET /api/items/craftOptions

const getAllItemsWithCraftOptions = asyncHandler(async (req,res) => {

    const itemsForCraft = await Item.findAll({where: {obtention: "craft"}})

    const itemsWithCraftItems = []

    for await (const item of itemsForCraft) {
        const name1 = item.craft.items[0]
        const name2 = item.craft.items[1]

        const firstItem = await Item.findOne({where:{name: name1}})
        const secondItem = await Item.findOne({where:{name: name2}})

        const itemsAndOptions = {craft: item, ingredients: {1: firstItem, 2: secondItem}}

        itemsWithCraftItems.push(itemsAndOptions)

    }

    res.json(itemsWithCraftItems)
    
})


//UPDATE

//update one item
//PUT /api/items/:id

const update = asyncHandler(async (req,res) =>{
    const id_item = req.params.id
    const {name, craftItem1, craftItem2, obtention} = req.body

    const craft = {items: [craftItem1,craftItem2]}
    const foundItem = await Item.findOne({where: {id_item}})

    foundItem.name = name
    foundItem.craft = craft
    foundItem.obtention = obtention

    const updatedItem = await foundItem.save()

    res.json(updatedItem)

})


//DELETE

//delete one item
//DELETE /api/items/:id

const remove = asyncHandler(async (req,res) =>{

    const id_item = req.params.id

    await Item.destroy({where: {id_item}})

    res.json(`Deleted item`)
    
})



module.exports = {
    getOne,
    getAll,
    update,
    create,
    remove,
    getAllForUser,
    getAllItemsWithCraftOptions,
    craft,
    give
}