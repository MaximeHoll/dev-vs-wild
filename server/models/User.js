module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        id_user: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(30),
            required: true
        },
        password: {
            type: DataTypes.STRING(300),
            required: true
        },
        date_creation: {
            type: "TIMESTAMP",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        }
    }, {timestamps: false, freezeTableName: true});
    
    
    return User
    
    }