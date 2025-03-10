import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import MyTodoApp from './MyTodoApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyTodoApp />
  </StrictMode>,
)
