import axios from 'axios'

const api = axios.create({
    baseURL: 'https://nlw-server-proffy.herokuapp.com/'
})


export default api