module.exports = (sequelize, DataTypes) => {
    const Inventory = sequelize.define("inventories", {
        id_inventory: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_user: {
            type: DataTypes.INTEGER,
            required: true
        },
        id_item: {
            type: DataTypes.INTEGER,
            required: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    }, {timestamps: false, freezeTableName: true});


    return Inventory

}