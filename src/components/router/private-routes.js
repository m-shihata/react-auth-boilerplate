import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function PrivateRoutes() {
  const { user, token } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isAuthenticatedUser = !!user && !!token

  useEffect(() => {
    if (!isAuthenticatedUser) {
      navigate('/login', { state: { from: pathname } })
    }
  }, [isAuthenticatedUser, navigate, pathname])

  return <Outlet />
}

export default PrivateRoutes
