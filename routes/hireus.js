const express = require('express');
const router = express.Router();

const hireusController = require('../controllers/hireus_controller');

router.get('/show_hireus', hireusController.hireus);
router.post('/create', hireusController.create);

module.exports = router;