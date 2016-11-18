'use strict';

const express = require('express');
let app = express();

app.use(express.static('public'));

app.use(function(req, res, next){
    res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(80, function () {
    console.log('Started on port 80!')
});