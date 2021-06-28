const express = require('express');
const router = express.Router();

const crewformController = require('../controllers/crewform_controller');

router.get('/show_crewform', crewformController.crewform);
router.post('/create', crewformController.create);

module.exports = router;