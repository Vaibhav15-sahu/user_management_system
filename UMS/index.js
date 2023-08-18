const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const renderRouter = require('./routes/renderRoutes');
const dotenv = require('dotenv').config();
const app = express();

const port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/api/users', require('./routes/routes'));
app.use('/', renderRouter);

app.listen(port, ()=>{
    console.log(`Sever running on : http://localhost:${port}`);
}) 