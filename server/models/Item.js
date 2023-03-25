module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("items", {
        id_item: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            required: true
        },
        craft: {
            type: DataTypes.JSON,
            defaultValue: null
        },
        obtention: {
            type: DataTypes.STRING(20)
        }
    }, {timestamps: false, freezeTableName: true});


    return Item

}