import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './styles/style.css'

const App = () => (
  <div className="app">
    <div className="box">
      <RouterProvider router={router} />
    </div>
  </div>
)

export default App
