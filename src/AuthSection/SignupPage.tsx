import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';
import { increment } from "../store/CounterSlice";
 const SignupPage:React.FC=()=> {
  const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(increment());
    },[])
    const [isOrganizer, setIsOrganizer] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white">
      {/* Toggle Button */}
      <div className="flex items-center  p-3 space-x-4 mb-8 border border-solid  border-[#CEF23F] rounded-full">
        <button
          className={`px-4 py-2 rounded-full
            ${isOrganizer?"bg-[#CEF23F] text-black":""}
            `}
          onClick={() => setIsOrganizer(true)}
        >
          For Organizer
        </button>
        <button
          className={`px-4 py-2 rounded-full 
              ${!isOrganizer?"bg-[#CEF23F] text-black":""}
            `}
          onClick={() => setIsOrganizer(false)}
        >
          For Players
        </button>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-lg bg-gray-bg p-8 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row">
          {/* Welcome Message */}
          <div className="flex-1 p-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-2">
              Welcome {isOrganizer ? 'Organizer' : 'Champion'}
            </h2>
            <p className="text-highlight text-lg">
              {isOrganizer
                ? 'Manage your tournaments, engage with players, and create unforgettable experiences.'
                : 'Enter the arena and continue your journey towards greatness.'}
            </p>
          </div>

          {/* Form */}
          <div className="flex-1 p-4">
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email/Username *
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 bg-dark-bg border border-gray-600 rounded-md text-white"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password *
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Your Password"
                  className="w-full px-3 py-2 bg-dark-bg border border-gray-600 rounded-md text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 mt-4 bg-highlight text-black rounded-md font-semibold"
              >
                Log in
              </button>
            </form>

            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-600" />
              <span className="px-3 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-600" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center py-2 border border-highlight rounded-md text-highlight font-semibold"
            >
              <img src="path/to/google-icon.png" alt="Google" className="h-5 mr-2" />
              Log in with Google
            </button>

            <p className="text-center mt-4 text-sm">
              Don’t have an account?{' '}
              <a href="/signup" className="text-highlight underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SignupPage
