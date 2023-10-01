import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import AuthObserver from 'components/router/auth-observer'

import router from 'configs/router'

import store from 'store/index'

function App() {
  return (
    <Provider store={store}>
      <AuthObserver>
        <RouterProvider router={router} />
      </AuthObserver>
    </Provider>
  )
}

export default App
