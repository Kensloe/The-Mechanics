const Service = require('../../models/service');


module.exports = {
    index,    
};


async function index(req, res) {
  console.log('Im here')
  const services = await Service.find({}).sort('name');
  res.json(services);
}


        


      
  