import { useState } from "react";


export default function NewAppointmentPage({user, setUser }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [services, setServices] = useState([]);
  const [availServices, setAvailServices] = useState([]);

  function invalidData() {
    return date.length !== 10 || services.length === 0;
  }



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