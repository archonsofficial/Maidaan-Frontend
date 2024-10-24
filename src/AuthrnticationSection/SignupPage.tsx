import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { increment } from "../store/CounterSlice";
 const SignupPage:React.FC=()=> {
  const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(increment());
    },[])
  return (
    <div>
      
    </div>
  )
}

export default SignupPage
