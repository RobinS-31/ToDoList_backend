// == Import : npm
const express = require('express');
const router = express.Router();

// == Import : local
const goalCtrl = require('../controllers/goalController');

router.get('/getgoals', goalCtrl.getGoals);

module.exports = router;
