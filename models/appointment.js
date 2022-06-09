const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name: String,
    price: Number,
    emoji: String,
});


const appointmentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    date: {
        type: Date,
        require: true
    },
    services: [serviceSchema]
});

module.exports = mongoose.model('Appointment', appointmentSchema);