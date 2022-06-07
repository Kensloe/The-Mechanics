const Service = require(../models/service);
const Appointment = require('../models/appointment);
module.exports = {

    show,
    create,
    new: newAppointment,
    deleteAppointment,
    editAppointment,
    forUser,
    Update,

};

function show(req, res) {
    Appointment.find{}, functions(err, appointment) {
        res.render('appointments/show', { title: 'Appointment Details', appointment });
    }
}

function create(req, res) {
    const appointment = new Appointment(req.body);
    // Assign logged in user's id
    appointment.user = req.user._id;
    appointment.save(function(err){
        console.log(appointment);
        if (err) return res.redirect('/appointments/new')
        res.redirect('/teams');
    });

}

function deleteAppointment(req, res) {
    Appointment.findOneDelete(
        {_id: req.params.id, user: req.user._id}, function(err) {
              res.redirect('/teams');
        }

    );

}
function edit(req, res) {
    Appointment.findOne({_id: req.params.id, userRecommending: req.user._id}, function(err, appointment) {
      if (err || !appointment) return res.redirect('/appointments');
      res.render('appointments/edit', {appointment});
    });
  }

function forUser(req, res) {
    Appointment.find({user: req.user._id}, (err, appointments)=>{
       res.render('appointments/index', {title: 'My Appointments', appointments } )
    });


function newAppointment(req, res) {
    res.render('appointments/new',{title: 'Add Appointment'} );

}

