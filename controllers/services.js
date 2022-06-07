const Service = require(../models/service);
const Appointment = require('../models/appointment);


module.exports {
    new: newService,
    create,
    addAppointment
};

function create(req, res) {
    Service.create(req.body, function (err, service) {
        res.redirect('/services/new');
      });
    }

    function newService(req, res) {
        Service.find({}).sort('name').exec(function (err, service) {
          res.render('services/new', {
            title: 'Add Service',
            services
          });
        });
      }

      function addAppointment(req, res) {
        Appointment.findById(req.params.id, function(err, appointment) {
            const newService = new Service(req.body);
            newService.save(()=>{
            team.services.push(newService._id);
            team.save(()=>{
              res.redirect(`/appointments/${appointment._id}`);  
            })
            });
          });
        
        }
        


      
  