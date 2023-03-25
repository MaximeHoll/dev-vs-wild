module.exports = (sequelize, DataTypes) => {
    const Journal = sequelize.define("journal", {
        id_entry: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        entry: {
            type: DataTypes.TEXT,
            required: true
        },
        entry_type: {
            type: DataTypes.STRING(30),
            required: true
        },
        creation_date: {
            type: "TIMESTAMP",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        }
    }, {timestamps: false, freezeTableName: true});


    return Journal

}