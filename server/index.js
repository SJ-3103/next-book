const express = require('express');
const cors = require('cors');
const app = new express();

const cookieParser = require('cookie-parser')

//---------------------------------------// 
const Database = require('./Database')
var db = new Database();
db.mongodbConnect();
//---------------------------------------//

var PORT = 4000;

var routes = require('./api/routes');

app.use(cors());

app.use(express.json())

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
})

app.use(routes);

app.listen(PORT, () => {
    console.log('App is working on port ' + PORT);
})