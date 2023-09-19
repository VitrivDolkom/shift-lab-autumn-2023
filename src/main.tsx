import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/App/router'
import '@/App/styles/fonts.css'
import '@/App/styles/theme.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
