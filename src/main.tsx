import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router } from './Router.tsx'
import {Provider} from "react-redux"
import {store} from "./store/store.ts"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <main className="purple-dark text-foreground bg-background">
    <Router />
    </main>
    </Provider>
  </StrictMode>,
)
