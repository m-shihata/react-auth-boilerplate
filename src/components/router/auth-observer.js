import useLocalStorage from 'hooks/use-local-storage'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login } from 'store/auth'

function AuthObserver({ children }) {
  const [isInit, setIsInit] = useState(true)

  const { user, token } = useSelector(state => state.auth)
  const [savedUser, setSavedUser] = useLocalStorage('user', null)
  const [savedToken, setSavedToken] = useLocalStorage('token', null)

  const dispatch = useDispatch()
  const dispatchLoginFromLocalStorage = useCallback(() => {
    dispatch(login({ user: savedUser, token: savedToken }))
  }, [dispatch, savedUser, savedToken])

  const inStoreNotInLocal = !!(user && token && !savedUser && !savedToken)
  const inLocalNotInStore = !!(savedUser && savedToken && !user && !token)

  useEffect(() => {
    // Auto login from local storage
    if (inLocalNotInStore && isInit) {
      dispatchLoginFromLocalStorage()
      setIsInit(false)
    }
  }, [inLocalNotInStore, isInit, dispatchLoginFromLocalStorage, setIsInit])

  useEffect(() => {
    // Save to local storage from store
    if (inStoreNotInLocal && isInit) {
      setSavedUser(user)
      setSavedToken(token)
      setIsInit(false)
    }
  }, [inStoreNotInLocal, isInit, setSavedUser, user, setSavedToken, token, setIsInit])

  useEffect(() => {
    // Logout
    if (!isInit && !user && !token) {
      setSavedUser(null)
      setSavedToken(null)
      setIsInit(true)
    }
  }, [isInit, user, token, setSavedUser, setSavedToken, setIsInit])

  return children
}

export default AuthObserver
