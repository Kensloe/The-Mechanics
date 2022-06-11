import { useState, useEffect } from 'react';
import * as appointmentsAPI from '../../utilities/appointments-api';

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(function() {
    async function getAppointments() {
      const appointments = await appointmentsAPI.getAllForUser();
      setAppointments(appointments);
    }
    getAppointments();
  }, []);

  return (
    <main>
      {appointments.map(a => 
        <div>
            <p>{a.date}
            </p>
        </div> 
    )}
    </main>
  );
}