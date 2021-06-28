const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('/uploads/users/avatars');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    whatiam: {
        type: String,
        // required: true
    },
    gender: {
        type: String,
        // required: true
    },
    age: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    phone: {
        type: String,
        // required: true
    },
    whatsapp: {
        // type: number,
        type: String,
        // required: true
    },
    state: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    hearaboutus: {
        type: String,
        // required: true
    }
},{
    timestamps: true
});


const Member = mongoose.model('Member', memberSchema);

module.exports = Member;