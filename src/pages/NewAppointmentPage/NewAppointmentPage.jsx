import { useState, useEffect, } from "react";
import * as servicesAPI from '../../utilities/services-api';


export default function NewAppointmentPage({user, setUser }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [selectedServices, setSelectedServices] = useState([]);
  const [availServices, setAvailServices] = useState([]);



  useEffect(function() {
    async function getServices() {
      const services = await servicesAPI.getAll();
      setAvailServices(services);
    }
    getServices();
  }, []);



  function invalidData() {
    return date.length !== 10 || selectedServices.length === 0;
  };



  return (
    <main className="NewApointmentPage">
      <h1>Enter New Appointment</h1>

 <form> 
  <input type="date" min={new Date().toISOString().slice(0, 10)} value={date}
  onChange={(e) => setDate(e.target.value)}
/>
  <button type="submit" disabled={invalidData()}>Create Appointment</button>
  </form>
  </main>

  );
  
}