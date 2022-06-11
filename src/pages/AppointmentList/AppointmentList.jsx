import { useState, useEffect } from 'react';
import * as appointmentsAPI from '../../utilities/appointments-api';


export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(function() {
    async function getAppointments() {
      const appointments = await appointmentsAPI.getAllForUser();
      console.log(appointments);
      setAppointments(appointments);
    }
    getAppointments();
  }, []);

  function handleDelete(id){
    appointmentsAPI.deleteAppointment(id);
    const newAppointments = appointments.filter(a=> a._id !== id)
    setAppointments(newAppointments);
  }

  // function handleEdit(id){
  //   appointmentsAPI.editAppointment(id);
  //   const newAppointments = appointments.filter(a=> a._id === id)
  //   setAppointments(newAppointments);
    
  // }

  


  return (
    <main>
      {appointments.map(a => 
        <div>
          <button onClick={() => handleDelete(a._id)}>X</button>
          {/* <button onClick={() => handleEdit(a._id)}>Edit</button> */}
            <p>
              {a.date}
            </p>
            <ul>
            {a.services.map(service => 
              <li>
                {service.name}
                {service.price}
                {service.emoji}
              </li>
              )} 
              </ul>
        </div> 
    )}
    </main>
  );
}