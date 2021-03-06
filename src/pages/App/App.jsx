import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewAppointmentPage from '../NewAppointmentPage/NewAppointmentPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import AppointmentList from '../AppointmentList/AppointmentList';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/appointments/new" element={<NewAppointmentPage />} />
            <Route path="/appointments" element={<AppointmentList />}/>

          </Routes>
          
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
