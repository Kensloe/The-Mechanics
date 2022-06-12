import { useState, useEffect } from "react";
import ServiceList from "../ServiceList/ServiceList";
import * as servicesAPI from '../../utilities/services-api';
import * as appointmentsAPI from '../../utilities/appointments-api';
import { useNavigate } from "react-router-dom";



export default function NewAppointmentPage({ user, setUser }) {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');

  const [availServices, setAvailServices] = useState([]);




  useEffect(function () {
    async function getServices() {
      const services = await servicesAPI.getAll();
      setAvailServices(services);
      console.log(services);
      setSelectedService(services[0]._id)
    }
    getServices();
  }, []);

  function addService() {
    const service = availServices.find(s => s._id === selectedService);
    const updatedAvailServices = availServices.filter(s => s._id !== selectedService);
    setAvailServices(updatedAvailServices);
    setSelectedService(updatedAvailServices[0] ? updatedAvailServices[0]._id : '')
    setSelectedServices([...selectedServices, service]);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const payload = {
      date,
      services: selectedServices
    }
    const newAppointment = await appointmentsAPI.create(payload)
    console.log(newAppointment);
    navigate('/appointments')
  }


  function invalidData() {
    return date.length !== 10 || selectedServices.length === 0;
  };



  return (
    <main className="NewApointmentPage">
      <h1>Enter New Appointment</h1>


      <form onSubmit={handleSubmit}>
        <input type="date" min={new Date().toISOString().slice(0, 10)} value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
          {
            availServices.map((service) => (
              <option key={service._id} value={service._id}>
                {service.name}
              </option>
            ))}
        </select>
        <button type="submit" disabled={invalidData()}>Create Appointment</button>
      </form>
      <button type="button" disabled={availServices.length === 0} onClick={addService}>Add</button>
      <ServiceList services={selectedServices} />
      
    </main>

  );

}