import requestURLs from './urls'

import { login, logout } from 'store/auth'

const asyncRegister =
  ({ firstName, lastName, email, password }) =>
  async dispatch => {
    const requestURL = requestURLs.register
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password }),
    }
    const response = await fetch(requestURL, requestOptions)
    const data = await response.json()
    dispatch(login({ user: { id: 1 }, token: data.token })) // TODO -> update user object
  }

const asyncLogin =
  ({ email, password }) =>
  async dispatch => {
    const requestURL = requestURLs.login
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }
    const response = await fetch(requestURL, requestOptions)
    const data = await response.json()
    dispatch(login({ user: { id: 1 }, token: data.token })) // TODO -> update user object
  }

const asyncLogout = () => async dispatch => {
  // TODO -> call logout API here if needed
  return dispatch(logout())
}

export { asyncRegister, asyncLogin, asyncLogout }
