import { HomePage } from '../page/home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: '/home'
  }
])
