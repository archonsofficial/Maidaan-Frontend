import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
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
