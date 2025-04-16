import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Counter } from './App.jsx'


const r =createRoot(document.getElementById('root'));
r.render(
  <StrictMode>
    <App />
    <Counter />
  </StrictMode>,
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <Counter />
//   </StrictMode>, 
// )
