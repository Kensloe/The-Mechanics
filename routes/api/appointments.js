const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/api/appointments');

// CREATE /api/appointment/


router.post('/new', appointmentsCtrl.newAppointment);

router.delete('/:id',appointmentsCtrl.deleteAppointment);


module.exports = router;