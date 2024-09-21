import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App';
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route path= "signup"  />
        <Route path='tournaments'  />
        <Route path= "tournaments/details" />
        <Route path= "academies"  />
  
  
      </Route>))
  
  export function Router() {
    return <RouterProvider router={router} />;
  }
  