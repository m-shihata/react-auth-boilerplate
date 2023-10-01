import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { asyncLogout } from 'services/reqres/requests'

function Logout() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncLogout())
  }, [dispatch])
}

export default Logout
