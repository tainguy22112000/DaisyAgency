import About from '~/page/About'
import { HomePage } from '../page/Home'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Solution from '~/page/Solution'
import News from '~/page/News'
import NewsDetails from '~/page/NewsDetails'
import Contact from '~/page/Contact'
import GenericError from '~/page/GenericError'
import Layout from '~/layouts/layout'

export const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="solution" element={<Solution/>}/>
      <Route path="news" element={<News/>}/>
      <Route path="news/news-details" element={<NewsDetails/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="*" element={<GenericError/>}/>
   </Route> 
  )
)
