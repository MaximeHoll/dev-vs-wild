const asyncHandler = require('express-async-handler')
const db = require('../models')
const { hashSync, genSaltSync } = require("bcrypt")

//create Models


const User = db.users


//CREATE

//create one user
//POST api/users

const create = asyncHandler(async (req,res) =>{
    
    const { username, password } = req.body
    

    if (!username || !password) {
            return res.json({
                message: "Mandatory username and password",
            });
        }

    const salt = genSaltSync(10);
    passwordHashed = hashSync(password, salt);

    const newUser = await User.create({username, password: passwordHashed})

    res.json({message: `User ${newUser.username} was created with ID ${newUser.id_user}`})
})

//READ

// get all users
// GET /api/users

const getAll = asyncHandler(async (req,res) => {

    const users = await User.findAll({
        attributes: { exclude: ['password'] }
    })

    res.json(users)
})

//get one users
//GET /api/users/:id

const getOne = asyncHandler(async (req,res) => {

    const id_user = req.params.id

    
    const user = await User.findOne({where: {id_user}, attributes: { exclude: ['password'] }})

    res.json(user)
})

//UPDATE

//update one user
//PUT /api/users/:id

const update = asyncHandler(async (req,res) =>{
    const { username, password } = req.body
    const id_user = req.params.id
    

    if (!username || !password) {
            return res.json({
                message: "Username and password required"
            });
        }

    const foundUser = await User.findOne({where: {id_user}})
    
    if(password) {
        const salt = genSaltSync(10)
        passwordHashed = hashSync(password, salt)
        foundUser.password = passwordHashed
    }

    foundUser.username = username

    const updatedUser = await foundUser.save()

    res.json({message: `Updated ${updatedUser.username}`})

})


//DELETE

//delete one user
//DELETE /api/users/:id

const remove = asyncHandler(async (req,res) =>{

    const id_user = req.params.id

    await User.destroy({where: {id_user}})

    res.json({message: `User ${id_user} was deleted`})
    
})

module.exports = {
    getOne,
    getAll,
    update,
    create,
    remove
}