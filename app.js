import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import initRoutes from './src/routes'
const session = require('express-session')
const flash = require('connect-flash')
import * as libs from './src/services/libs'
require('dotenv').config()

const path = require('path');
const handlebars = require('express-handlebars');
const hbs = handlebars.create({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'src/views/layouts'),
    partialsDir: path.join(__dirname, 'src/views/partials'),
    helpers: libs
})

//setup app
const app = express()
app.engine('hbs', hbs.engine)
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", 'GET', 'PUT', "DELETE"]
}))

//app use
app.use(session({
    secret: 'hoang',
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(cookieParser())
app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'src/public')));


//router
initRoutes(app)

//start server
const port = process.env.PORT || 8888
const listener = app.listen(port, () => {
    console.log(`Server is running on the port ${listener.address().port}`)
})

