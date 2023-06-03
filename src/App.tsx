import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  return (
    <div style={{backgroundColor: "#FBFBFB"}}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
