const cors = require("cors");
const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const sequelize = require('./config/sequelizeDb')
const db = require('./models/index')


//connection to db

sequelize.authenticate().then(() => {
    
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

db.sequelize.sync({force: false})
.then(() => {
    console.log('Resync done')
})

// running app

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(express.json())


//routes


//app listen

app.listen(process.env.PORT, () => {
    console.log(`App server now listening on port ${process.env.PORT}`);
});

module.exports = app;
