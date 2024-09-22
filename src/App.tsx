import { Outlet } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <NextUIProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </NextUIProvider>
    </>
  );
}

export default App;
