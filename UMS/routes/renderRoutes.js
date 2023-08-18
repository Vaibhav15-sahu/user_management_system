const express = require('express') ;
const axios = require('axios');
const path = require('path');
const { data } = require('../model/userData');
const { render } = require('ejs');
const renderRouter = express.Router();

renderRouter.route('/').get( (req, res)=>{

    axios.get('http://localhost:8080/api/users').then((result) => {
        res.render('index', {data : result.data});
    }).catch((err) => {
        res.send(err);
    });
});

renderRouter.route('/').post( (req, res)=>{
    axios.get('http://localhost:8080/api/users').then((result) => {
        res.render('index', {data : result.data});
    }).catch((err) => {
        res.send(err);
    });
});


renderRouter.route('/register').get((req, res) => {
    res.render('register');
})

renderRouter.route('/update').get((req, res)=>{
    res.render('update');
})

module.exports = renderRouter;