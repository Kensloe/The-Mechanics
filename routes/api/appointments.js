const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/api/appointments');

// CREATE /api/appointment/


router.post('/new', appointmentsCtrl.newAppointment);

router.get('/', appointmentsCtrl.getForUser);

router.delete('/:id',appointmentsCtrl.deleteAppointment);

router.put('/:id',appointmentsCtrl.editAppointmentForm);


module.exports = router;