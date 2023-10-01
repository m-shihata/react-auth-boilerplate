import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

function useAutoLogin() {
  const { user, token } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const { state } = useLocation()

  const from = (state && state.from !== '/logout' && state.from) || '/'

  useEffect(() => {
    if (user && token && from) {
      navigate(from, { replace: true })
    }
  }, [user, token, navigate, from])
}

export default useAutoLogin
