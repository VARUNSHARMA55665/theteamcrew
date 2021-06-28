const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const layoutController = require('../controllers/layout_controller.js');

router.get('/show_services', layoutController.services);

module.exports = router;