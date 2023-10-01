import { createSlice } from '@reduxjs/toolkit'

const authState = {
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout(state) {
      state.user = null
      state.token = null
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
