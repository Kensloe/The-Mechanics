// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/appointments';

export function create(appointment) {
  return sendRequest(BASE_URL, 'POST', appointment);
}
