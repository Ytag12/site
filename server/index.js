require('dotenv').config()

const express = require('express')

const sequelize = require('./db')

const modules = require('./models/models')

const cors = require('cors')

const fileUpload = require('express-fileupload')

const router = require('./routers/index')
const errorHandler = require('./midleware/ErrorHandlingMiddleware')
const PORT = process.env.PORT || 5000
const path = require('path');

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
//Error obrabotchik
app.use(errorHandler)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>console.log(`Listening on ${PORT}`))
    } catch (e){
        console.log('Ошибка при подключении к базе данных:')
    }
}

start()
