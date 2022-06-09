require('dotenv').config();
require('./config/database');

const Service = require('./models/service');

// Pattern:  IIFE
(async function() {

  await Service.deleteMany({});
  const services = await Service.create([
    {name: 'Oil Change', emoji: '🛢️', price: 40},
    {name: 'Tire Replacement', emoji: '🛞', price: 25},
    {name: 'Coolant System Services', emoji: '💧', price: 25},
    {name: 'Wheel Balance and Rotation', emoji: '🚙', price: 60},
    {name: 'Battery Replacement', emoji: '🔋', price: 20},
    {name: 'Windshield Wipers and Fluid', emoji: '💧', price: 20},
    {name: 'Scheduled Maintenance', emoji: '🔧', price: 30},
    {name: 'Cabin Filter Replacement', emoji: '🚗', price: 40},
    {name: 'Headlights', emoji: '🚘', price: 30},
   
  ]);

  console.log(services)

  process.exit();

})();