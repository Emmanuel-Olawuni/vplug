import React from "react";
import AuthImage from "../../assets/signup.png";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import "./Auth.css";
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-[20px] p-6">
        <div>
          <img src={AuthImage} alt="" />
        </div>
        <div className="flex flex-col gap-[20px] w-[full] md:w-[50%] text-center">
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Email or Phone Number" />
          <Input type="password" placeholder="Password"  />

          <button
            type="submit"
            className="text-white bg-red-300 rounded-[10px] p-4 w-full shadow-xl  hover:bg-red-500 hover:text-white 
            hover:border duration-200  hover:easeIn  "
          >
            Create Account
          </button>
          <button className="border-red-500 text-red-500 border  p-4 rounded-[10px] shadow-xl w-full">
            Sign Up With Google
          </button>
          <div>
            <span>Already have account? </span>
            <Link to='/login' className='underline underline-offset-2' > Log In</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
