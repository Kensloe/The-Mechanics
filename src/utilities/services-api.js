// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/services';

export function signAll(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }
  