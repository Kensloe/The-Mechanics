const Service = require('../../models/service');
const Appointment = require('../../models/appointment');
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

function deleteAppointment(req, res) {
    



}
function editAppointment(req, res) {
    

  }

function forUser(req, res) {
    
    }


function newAppointment(req, res) {
    

}



