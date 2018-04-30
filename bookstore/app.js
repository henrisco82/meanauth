const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

const port = 3000;

const config = require('./config/database');
mongoose.connect(config.database);

db = mongoose.connection;

db.on('connected', ()=>{
    console.log('connected to the database correctly');
});

db.on('error', ()=>{
    console.log('error in database connection');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

const books = require('./routes/books');

app.use('/api', books)



app.get('/', (req,res,next)=>{
    res.send('I hate fucking programming');
});

app.listen(port, ()=>{
    console.log('server is running at port ' + port);
});


