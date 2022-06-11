import * as React from "react";
import { useNavigate, Link } from "react-router-dom";


export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
}

const navigate = useNavigate();

// async function editAppointment() {
//   const editAppointment = await appointmentsAPI.update(formData, appointment._id)
//   const updated = posts.map(p => p._id === editAppointment._id ? editAppointment : a)
//   editAppointment(edited)
//   navigate('../')
// }

  function handleEdit(id){
    appointmentsAPI.editAppointment(id);
    const newAppointments = appointments.filter(a=> a._id === id)
    setAppointments(newAppointments);
    
  }


const ongang = () => console.log('ongang')

function EditAppointmentForm({ appointments }) {
  return (
    <main>
      {appointments.map(a => 
        <div>
          {/* <button onClick={() => handleDelete(a._id)}>X</button> */}
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
