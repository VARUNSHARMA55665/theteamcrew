// const { Router } = require('express');
const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log('router loaded');

router.get('/', homeController.home);

router.use('/layout', require('./layout'));
router.use('/gallery', require('./gallery'));
router.use('/crewform', require('./crewform'));
router.use('/hireus', require('./hireus'));

module.exports = router;