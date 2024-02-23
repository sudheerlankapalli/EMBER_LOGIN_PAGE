/* eslint-disable prettier/prettier */
// frontend/app/services/ajax.js
import Service from '@ember/service';
import fetch from 'fetch';
console.log('Hello from services/.js');
export default class AjaxService extends Service {
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}
