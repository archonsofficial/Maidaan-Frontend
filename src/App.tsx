import { Outlet } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import './App.css'


function App() {
  return (
    <>
      <div className="landingPage">
        <NextUIProvider>
          <NavBar />
          <Outlet />
          <Footer />
        </NextUIProvider>
      </div>
    </>
  );
}

export default App;
