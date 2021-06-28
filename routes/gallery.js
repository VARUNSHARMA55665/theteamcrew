const express = require('express');
const router = express.Router();

const galleryController = require('../controllers/gallery_controller');

router.get('/show_gallery', galleryController.services);

module.exports = router;