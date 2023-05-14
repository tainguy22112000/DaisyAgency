import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Footer } from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
