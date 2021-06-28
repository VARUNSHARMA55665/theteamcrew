const express = require('express');
const router = express.Router();


module.exports.home = function(req,res){
        return res.render('layout');
}

