import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router } from './Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="purple-dark text-foreground bg-background">
    <Router />
    </main>
  </StrictMode>,
)
