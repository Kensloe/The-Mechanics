import { useState, useEffect, useRef } from "react";
// import ServeList from "../../components/ServeList/ServeList";
import * as servicesAPI from '../../utilities/services-api';


export default function NewAppointmentPage({user, setUser }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedService, setSelectedService] = useState({});

  const [availServices, setAvailServices] = useState([]);
  // const servicesRef = useRef([]);


  useEffect(function() {
    async function getServices() {
      const services = await servicesAPI.getAll();
      // servicesRef.current = [...new Set(services.map(service => service.services.name))]
      setAvailServices(services);
      // setSelectedServices(servicesRef.current[0])
    }
    getServices();
  }, []);

function addService() {
  setSelectedServices(selectedServices => [...selectedServices,JSON.parse (selectedService)])
  console.log(selectedService);
}


  function invalidData() {
    return date.length !== 10 || selectedServices.length === 0;
  };



  return (
    <main className="NewApointmentPage">
      <h1>Enter New Appointment</h1>
      {/* <ServeList */}
      {/* services={servicesRef.current}
      selectedServices={selectedServices}
      setSelectedServices={setSelectedServices}
      /> */}

 <form> 
  <input type="date" min={new Date().toISOString().slice(0, 10)} value={date}
  onChange={(e) => setDate(e.target.value)}
/>
<select name="" id="" onChange={(e)=> setSelectedService(e.target.value) }>
  {availServices.filter((service)=>!selectedServices.find((otherService)=>service._id === otherService._id )
   
   ).map( (service)=>(
   <option value={JSON.stringify(service)}>
     {service.name}
   </option> 
  ) )}
</select>
<button type="button" onClick={addService}>Add</button>
  <button type="submit" disabled={invalidData()}>Create Appointment</button>
  </form>
  </main>

  );
  
}