const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/api/appointments');

// CREATE /api/appointment/


router.post('/new', appointmentsCtrl.newAppointment);


module.exports = router;