import { prefixBaseURL } from 'utils/services'

const baseURL = 'https://reqres.in/api'

const requestPaths = {
  login: '/login',
  register: '/register',
  user: '/user',
}

export default prefixBaseURL(requestPaths, baseURL)
