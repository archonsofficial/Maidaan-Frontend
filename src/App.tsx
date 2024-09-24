import { Outlet } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import './App.css'
import FaqMain from "./LpFAQ/FaqMain";


function App() {
  return (
    <>
      <div className="landingPage">
        <NextUIProvider>
          <NavBar />
          <Outlet />
          <FaqMain/>
          <Footer />
        </NextUIProvider>
      </div>
    </>
  );
}

export default App;
