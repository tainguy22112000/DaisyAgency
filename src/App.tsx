import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import styles from './style.module.scss'

function App() {
  return (
    <div className={styles.appBackground}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
