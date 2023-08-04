import React from "react";
import AuthImage from "../../assets/signup.png";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import "./Auth.css";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <Layout>
    <div className="flex flex-col md:flex-row gap-[20px] p-6 justify-center items-left md:items-center">
      <div>
        <img src={AuthImage} alt="" />
      </div>
      <div className="flex flex-col gap-[20px] w-[full] md:w-[50%] text-center">
        <Input type="text" placeholder="Name or Username " />
   
        <Input type="password" placeholder="Password"  />

        <button
          type="submit"
          className="text-white bg-red-300 rounded-[10px] p-4 w-full shadow-xl  hover:bg-red-500 hover:text-white 
          hover:border duration-200  hover:easeIn  "
        >
         Login
        </button>
    
        <div className="flex gap-[10px] text-center justify-center items-center ">
      
          <Link to='/sign-up' className='underline underline-offset-2 text-red-500' >Register Account</Link>
          <Link to='/login' className='underline underline-offset-2 text-red-500' > Forget Password?</Link>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Login