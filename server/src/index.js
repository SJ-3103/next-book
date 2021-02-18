import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import Database from './Database'
import AppRouter from './api/AppRouter'

var app = express()

var PORT = 4000;

var db = new Database();

app.use(logger('dev'))
app.use(express.json())

app.use(cors());

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
})

db.mongodbConnect();

app.use(AppRouter);

app.listen(PORT, () => {
    console.log('App is working on port ' + PORT);
})