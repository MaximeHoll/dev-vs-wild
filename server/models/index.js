const sequelize = require('../config/sequelizeDb')
const { Sequelize, DataTypes } = require("sequelize");

//filling db variable with models with sequelize+Datatypes to use them elsewhere

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require("./User")(sequelize, DataTypes);
db.arbres_tinder = require("./Timder")(sequelize, DataTypes);
db.journal=require('./Journal')(sequelize, DataTypes)

//Relationships between models

db.users.hasMany(db.journal, {foreignKey: 'id_user'});
db.journal.belongsTo(db.users);



//With Sequelize sync should be done with force:false to avoid tables dropping at every connection. Gives a bug here (probably because Models and db have a slight variation) but the db works fine still.
//Code can be left commented.


module.exports = db