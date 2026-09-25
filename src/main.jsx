function Contact() {
  return (
    <div className="page">
      <h1 className="display">Come by the shop.</h1>
      <p className="lede">
        123 Range Road. Open Tuesday to Saturday, 10 to 6. Call (555) 010-0100.
      </p>
    </div>
  )
}

export default Contact
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
