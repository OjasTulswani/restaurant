import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HttpMethodContextProvider } from './context/HttpMethodProvider.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HttpMethodContextProvider>
      <App />
    </HttpMethodContextProvider>
  </StrictMode>,
)
