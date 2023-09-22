import { createBrowserRouter } from 'react-router-dom'
import { LinuxPage } from '~/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: LinuxPage
  }
])
