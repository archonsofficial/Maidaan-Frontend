import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App';
import LandingPage from './Pages/LandingPage';
import SignupPage from './AuthSection/SignupPage';
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route path= "" element={<LandingPage/>}  />
        <Route path= "signup"  element={<SignupPage/>}  />
        <Route path='tournaments'  />
        <Route path= "tournaments/details" />
        <Route path= "academies"  />
  
  
      </Route>))
  
  export function Router() {
    return <RouterProvider router={router} />;
  }
  