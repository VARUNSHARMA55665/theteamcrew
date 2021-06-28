const express = require('express');
const router = express.Router();
const Company = require('../models/companies');

module.exports.hireus = function(req,res){
    res.render('hireus');
}


module.exports.create = function(req,res){
    try{
        Company.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            companyName: req.body.companyName,
            aboutEvent: req.body.aboutEvent
    }, function(err, company){
        if(err){
            console.log('Problem in adding company: ', err);
        }
        
    });

    return res.redirect('back');

}
    catch(err){
        // console.log('Error in adding company');
        console.log('Error in adding company:', err);
        return res.redirect('back');
    }
}