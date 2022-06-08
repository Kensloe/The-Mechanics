const express = require('express');
const router = express.Router();
const servicesCtrl = require('../../controllers/api/services');

// GET /api/services
router.get('/', servicesCtrl.index);


module.exports = router;