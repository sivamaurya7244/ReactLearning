import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Counter } from './App.jsx'


const r =createRoot(document.getElementById('root'));
r.render(
  <StrictMode>
    <Counter />
    <App />
    <h1>Hello Siva | first work</h1>
  </StrictMode>,
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <Counter />
//   </StrictMode>, 
// )
