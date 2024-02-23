//frontend/routes/application.js
import Route from '@ember/routing/route';
console.log('Hello from routes/.js');
export default class LoginRoute extends Route {
  model() {
    let storedFormData = localStorage.getItem('formData');
    let formData = storedFormData
      ? JSON.parse(storedFormData)
      : {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          address: '',
        };
    return formData;
  }
}
