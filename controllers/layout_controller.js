const express = require('express');
const router = express.Router();

module.exports.services = function(req,res){
    res.render('services');
}