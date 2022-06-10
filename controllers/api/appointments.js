const Service = require('../../models/service');
const Appointment = require('../../models/appointment');
const appointment = require('../../models/appointment');
module.exports = {

    show,
    create,
    newAppointment,
    deleteAppointment,
    editAppointment,
    forUser,

};

function show(req, res) {
    
    }

function create(req, res) {
    req.body.user = req.user._id
    const newAppointment = new Appointment(req.body)
    newAppointment.save();
    
}

async function deleteAppointment(req, res) {
    const remove = await Appointment.findByIdAndDelete(req.params.id);
    res.json(remove);
    
}
function editAppointment(req, res) {
    

  }

function forUser(req, res) {
    
    }


 async function newAppointment(req, res) {
    req.body.user = req.user._id
    console.log(req.body);
    const newAppointment = await Appointment.create(req.body)
    res.json(newAppointment);
    
}



