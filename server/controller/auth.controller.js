const db = require("../models")
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//create Models

const User = db.users

//@desc Login
//@route POST /auth
//@access Public

const login = asyncHandler(async (req,res) => {
    const { username, password } = req.body

    if(!username || !password){
        return res.status(400).json({ message: 'Username et mot de passe requis'})
    }

    const foundUser = await User.findOne({where: {username}})
    

    if(!foundUser) {
        return res.status(401).json({message: "L'User n'existe pas, veuilez vérifier l'email"})
    }

    const match = await bcrypt.compare(password, foundUser.password)

    if (!match) return res.status(401).json({message: 'Mot de passe incorrect'})


    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "id": foundUser.id_user
            }
        },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
    )

    res.cookie('timber', accessToken, {
        // httpOnly: true,
        secure: true,
        sameSite: 'None', 
        maxAge: 7*24*60*60*1000
    })


    res.json("Vous êtes connecté")
})



//@desc Logout
//@route POST /auth/logout
//@access Public - clear cookies if any

const logout = (req,res) => {
    
    res.status(202).clearCookie('timber').send('cookie cleared')

}

module.exports = {
    login,
    logout
}