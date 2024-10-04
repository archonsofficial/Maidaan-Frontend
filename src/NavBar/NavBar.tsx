
import { NavLink } from 'react-router-dom';
import logo from "../assets/Logo.png"
const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-3 ">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-16"
          />
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center  border border-white rounded-3xl gap-4 px-4 py-2" >
          <NavLink to="" className={({isActive})=>` hover:text-gray-200 py-2 px-2 rounded-3xl text-sm font-light ${isActive?"text-[#CEF23F] bg-[#FFFFFF15]":"text-white"}`}>
            Home
          </NavLink>
          <NavLink to="tournaments" className={({isActive})=>` hover:text-gray-200 py-2 px-2 rounded-3xl text-sm font-light ${isActive?"text-[#CEF23F] bg-[#FFFFFF15]":"text-white"}`}>
            Tournaments
          </NavLink>
          <NavLink to="events" className={({isActive})=>` hover:text-gray-200 py-2 px-2 rounded-3xl text-sm font-light ${isActive?"text-[#CEF23F] bg-[#FFFFFF15]":"text-white"}`}>
            Events
          </NavLink>
          <NavLink to="academies" className={({isActive})=>` hover:text-gray-200 py-2 px-2 rounded-3xl text-sm font-light ${isActive?"text-[#CEF23F] bg-[#FFFFFF15]":"text-white"}`}>
            Academies
          </NavLink>
          <NavLink to="schemes" className={({isActive})=>` hover:text-gray-200 py-2 px-2 rounded-3xl text-sm font-light ${isActive?"text-[#CEF23F] bg-[#FFFFFF15]":"text-white"}`}>
            Schemes
          </NavLink>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-3">
          <button className="bg-transparent text-[#CEF23F] hover:text-lime-500 font-light px-4 py-2 rounded-full text-sm font-light">
            Host an Event
          </button>
          <button className="bg-[#CEF23F] hover:bg-lime-500 text-black px-4 py-2 rounded-full text-sm font-light">
            Sign in
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
          >
            {/* Mobile hamburger menu icon */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
