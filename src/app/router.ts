import { LinuxPage } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: LinuxPage
  }
])
