const Service = require('../../models/service');
const Appointment = require('../../models/appointment');
module.exports = {

    show,
    create,
    newAppointment,
    deleteAppointment,
    editAppointmentForm,
    getForUser,
    
};

async function show(req, res) {
    const appointment = await Appointment.findById(req.params.id);
    res.json(appointment);

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
async function editAppointmentForm(req, res) {
    console.log(req.body);
    console.log(req.params._id);
    const post = await Post.findByIdAndEdit(req.params.id, req.body, { new: true })
    console.log(post);

}

async function getForUser(req, res) {
    const appointments = await Appointment.find({ user: req.user._id })
    res.json(appointments);

}

async function newAppointment(req, res) {
    req.body.user = req.user._id
    console.log(req.body);
    const newAppointment = await Appointment.create(req.body)
    res.json(newAppointment);

}



