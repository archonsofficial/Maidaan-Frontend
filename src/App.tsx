import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import './App.css'
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <>
     
        <NextUIProvider >
        
          <NavBar />
          <Outlet />
          <Footer />
          
        </NextUIProvider>
      
    </>
  );
}

export default App;
