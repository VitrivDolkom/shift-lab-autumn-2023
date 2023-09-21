import { createBrowserRouter } from 'react-router-dom'
import { LinuxPage } from 'src/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: LinuxPage
  }
])
