import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      <div className='logo'>
      <img src="https://toppng.com/uploads/preview/car-repair-mechanic-working-on-car-logo-11563230852ir0tylqu7y.png" alt="" />
      </div>
      <div className='nav-container'>
      <Link to="/appointments/new">New Appointment</Link>
      &nbsp; | &nbsp;
      <Link to="/appointments">My Appointments</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  );
}