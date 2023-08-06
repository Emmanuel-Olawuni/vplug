import React from "react";
import HeroImage from "../assets/hero.png";
import {Link} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Hero = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${HeroImage})` }  }
        className="h-[70vh] md:h-[100vh] w-[100%] hero-image bg-cover bg-[top] relative "
     >
   
        <div className="hero-text  ">
          <p className="font-bold uppercase text-white text-[min(9vw)] md:text-[70px]  drop-shadow-xl">stylist picks beat the heat</p>
          <button >
            <Link to='/shop'> Shop now </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
