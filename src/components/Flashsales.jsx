import Button from "./Button";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Countdown from "./Countdown";
const Flashsales = ({arrow , button ,time , title , caption }) => {
 
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mt-[3em] mx-[1.5em] md:mx-[4em]">
        <div className="flex flex-col">
          <div className="flex gap-[20px]">
            <span className="h-[30px] w-[20px] bg-red-500  "></span>
            <p className="text-[18px] text-red-500 font-medium">{title}</p>
          </div>
          <h2 className="capitalize font-[600] text-[32px] ">{caption}</h2>
        </div>
     {
      time && (
        <div>
        <Countdown /> 
     </div>
      )
     }
      {
        arrow && (
          <div className="arrow flex gap-[20px]">
          <BsArrowLeft className="arrows" size={40} cursor='pointer'  />{" "}
          <BsArrowRight className="arrows" size={40} cursor='pointer' />
        </div>
        )
      }
      {
        button && (
          <div>
          <Button text="View All" />
        </div>
        )
      }
       
      </div>
    </>
  );
};

export default Flashsales;
