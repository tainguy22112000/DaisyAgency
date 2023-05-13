import About from '~/page/About'
import { HomePage } from '../page/Home'
import { createBrowserRouter } from 'react-router-dom'
import Solution from '~/page/Solution'
import News from '~/page/News'
import NewsDetails from '~/page/NewsDetails'
import Contact from '~/page/Contact'
import GenericError from '~/page/GenericError'

export const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: '/home',
    index: true
  },
  {
    element: <About />,
    path: '/about',
    children: [{
      element: <></>,
      path: ''
    }]
  },
  {
    element: <Solution />,
    path: '/solution'
  },
  {
    element: <News/>,
    path: '/news',
  },
  {
    element: <NewsDetails/>,
    path: '/news/news-details'
  },
  {
    element: <Contact/>,
    path: '/contact'
  },
  {
    element: <GenericError/>,
    path: '*'
  }

])
