const express = require('express');
const router = express.Router();
const Member = require('../models/team_crew_member');


module.exports.crewform = function(req,res){
    res.render('crewform');
}

module.exports.create = function(req,res){
    try{
        Member.create({
            name: req.body.name,
            whatiam: req.body.whatiam,
            gender: req.body.gender,
            age: req.body.age,
            email: req.body.email,
            phone: req.body.phone,
            whatsapp: req.body.whatsapp,
            state: req.body.state,
            city: req.body.city,
            // address: req.body.address,
            hearaboutus: req.body.hearaboutus
    }, function(err, member){
        if(err){
            console.log('Problem in adding member: ', err);
        }
        
    });

    return res.redirect('back');

}
    catch(err){
        // console.log('Error in adding member');
        console.log('Error in adding member:', err);
        return res.redirect('back');
    }
}