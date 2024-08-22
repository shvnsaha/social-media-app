import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from './components/ui/sonner.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </StrictMode>,
)
