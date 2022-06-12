import { useState, useEffect } from 'react';
import * as appointmentsAPI from '../../utilities/appointments-api';
import EditAppointmentForm from '../../components/EditAppointmentForm/EditAppointmentForm';


export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  const [appointment, setAppointment] = useState();



  useEffect(function () {
    async function getAppointments() {
      const appointments = await appointmentsAPI.getAllForUser();
      console.log(appointments);
      setAppointments(appointments);
    }
    getAppointments();
  }, []);

  function handleDelete(id) {
    appointmentsAPI.deleteAppointment(id);
    const newAppointments = appointments.filter(a => a._id !== id)
    setAppointments(newAppointments);
  }

  function handleEdit(id) {
    appointmentsAPI.editAppointmentForm(id);
    // debugger
    const appointmentToEdit = appointments.filter(a => a._id === id)
    setAppointment(appointmentToEdit)
    //   // setAppointments(newAppointments);

  }



  console.log(appointment);
  return (
    <main>
      {appointment && <EditAppointmentForm id={appointment[0]._id}{...appointment[0]

      } />}

      {appointments.map(a =>
        <div>
          <button onClick={() => handleDelete(a._id)}>X</button>
          <button onClick={() => handleEdit(a._id)}>Edit</button>
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