import axios from 'axios'
// AXIOS is a library used to make http requests to the backend
// this api can be used to hit different endpoints
export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}
