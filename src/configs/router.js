import { createBrowserRouter } from 'react-router-dom'

import PrimaryLayout from 'components/layout/primary-layout'
import PrivateRoutes from 'components/router/private-routes'

import ContactUs from 'pages/contact-us'
import Home from 'pages/home'
import Login from 'pages/login'
import Logout from 'pages/logout'
import NotFound404 from 'pages/not-found-404'
import Register from 'pages/register'
import Reports from 'pages/reports'
import ResetPassword from 'pages/reset-password'
import Settings from 'pages/settings'

const routes = [
  {
    path: '/',
    errorElement: <NotFound404 />,
    element: (
      <PrimaryLayout>
        <PrivateRoutes />
      </PrimaryLayout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/reports',
        element: <Reports />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
  },
]

const router = createBrowserRouter(routes)
export default router
