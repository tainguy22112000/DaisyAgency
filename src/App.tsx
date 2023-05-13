import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Footer } from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header/>
      <RouterProvider router={router}></RouterProvider>
      <Footer/>
    </div>
  )
}

export default App
