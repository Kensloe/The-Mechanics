// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/appointments';

export function create(appointment) {
  console.log(appointment);

  return sendRequest(`${BASE_URL}/new`, 'POST', appointment);
}

export function deleteAppointment(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function getAllForUser() {
  return sendRequest(BASE_URL);
}



