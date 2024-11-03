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
    <div className={`flex flex-col  items-center justify-center min-h-screen  text-white`}>
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
     
      <div className={`loginCard h-max w-[75%] max-md:w-[90%] xl:w-[1024px] bg-[#FFFFFF15] px-10 py-12 flex flex-col ${!isOrganizer?"max-lg:flex-col-reverse":null} justify-center align-middle lg:flex-row lg:justify-evenly`}>
        {/* Welcome Message */}
        {isOrganizer?
         <div className="welcomeMessage w-full lg:w-1/2  flex flex-col align-middle justify-center">
        <div className='flex flex-col h-max text-4xl text-center font-semibold justify-center align-middle'>
          <p>Welcome</p>
          <p className='text-[#CEF23F]'>Organizer</p>
          
        </div>
        <div className='w-full font-medium text-base mt-5 text-center'>
        Manage your tournaments, engage with players,  and create unforgettable experiences.
        </div>
        
         </div>
         :null}
         
         
         {/* <form className="Form h-max w-max border flex flex-col border-spacing-1 border-[#CEF23F]">
          
           <div className='flex flex-col gap-3 '>
            <label className='font-secondaryFont font-medium text-lg ' aria-required htmlFor="Email">Email/Username</label>
            <input className='border border-[#939393] rounded-lg h-11 px-2 py-3' type="text" />
           </div>
         
           <div></div>
         </form> */}

        <div className={`flex flex-col max-lg:border-t ${isOrganizer?"lg:border-l":"lg:border-r"} border-[#CEF23F] items-center justify-center h-max  py-5 px-6 mt-9 lg:mt-0`}>
      {/* <div className=" w-max p-6  rounded-md shadow-md"> */}
        
        <form className=" flex flex-col justify-between gap-2">
          <label className="block text-lg font-medium ">
            Email / Username
          </label>
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 mb-2 text-[#FFFFFF40] bg-[#FFFFFF15]  border-[#939393] rounded-md focus:outline-none focus:border-lime-500"
          />

       <label className="block text-lg font-medium ">
           Create Your Password
          </label>
          <input
            type="text"
            placeholder="Your Password"
            className="w-full px-4 py-2 mb-2 text-[#FFFFFF40] bg-[#FFFFFF15] border-[#939393] rounded-md focus:outline-none focus:border-lime-500"
          />

           <label className="block text-lg font-medium ">
            Confirm Password
          </label>
          <input
            type="text"
            
            className="w-full px-4 py-2 mb-2 text-[#FFFFFF40] bg-[#FFFFFF15]  border-[#939393] rounded-md focus:outline-none focus:border-lime-500"
          />

          <button
            type="submit"
            className="w-full px-4 py-2 mt-6 text-base font-bold text-[#0A0A0A] bg-[#CEF23F] rounded-md  focus:outline-none"
          >
           Create Account
          </button>
        </form>

        <div className="my-4 flex items-center justify-center text-gray-400">
          <span className="flex-grow border-t border-gray-600" />
          <span className="mx-2">or</span>
          <span className="flex-grow border-t border-gray-600" />
        </div>

        <button
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-[#CEF23F] border border-[#CEF23F] rounded-md  focus:outline-none"
        >
          <img
            src="https://www.gstatic.com/images/branding/product/2x/gsa_48dp.png"
            alt="Google Icon"
            className="w-5 h-5 mr-2"
          />
          Sign up using Google
        </button>

        <p className="mt-6 text-sm text-center text-white">
         Already have an account?{' '}
          <a href="#" className="text-[#CEF23F] hover:underline">
            Log in
          </a>
        </p>
      </div>
      {!isOrganizer?
         <div className="welcomeMessage w-full lg:w-1/2 flex flex-col align-middle justify-center">
        <div className='flex flex-col h-max text-4xl text-center font-semibold justify-center align-middle'>
          <p>Welcome</p>
          <p className='text-[#CEF23F]'>Champion</p>
          
        </div>
        <div className='w-full font-medium text-base mt-5 text-center'>
        Enter the arena and continue your journey towards greatness.        </div>
        
         </div>
         :null}
    </div>
      </div>
    
    // </div>
  );
};


export default SignupPage
