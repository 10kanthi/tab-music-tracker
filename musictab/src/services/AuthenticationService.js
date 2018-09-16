// hiting the resgistered endpoint
import Api from '@/services/Api'

export default {
  // obj which allow us to call the register method
  // that will hit the 'register' endpoint and wwe will give the credentials
  // (email and psw for example)
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//    email: 'testing@gmail.com',
//    password: '123456'
// })
