import React, { useEffect, useRef, useState } from "react";

const Countdown = () => {
  const [day, setDays] = useState("00");
  const [mins, setMins] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [hour, setHours] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDate = new Date("December 30 2023 00:00:00").getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDate - now;
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days < 10 ? "0" + days : days.toString());
        setHours(hours < 10 ? "0" + hours : hours.toString());
        setMins(minutes < 10 ? "0" + minutes : minutes.toString());
        setSeconds(seconds < 10 ? "0" + seconds : seconds.toString());
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className="flex flex-row gap-[12px]">
      <div className="flex flex-col">
        {" "}
        <span className="text-[16px] font-[500]"> Days</span> <div className="text-[20px] font-extrabold " > {day}</div>{" "}
      </div>{" "}
      <div className="separator font-[500] text-[32px] text-red-500">:</div>
      <div className="flex flex-col">
        {" "}
        <span className="text-[16px] font-[500]"> Hours</span> <div className="text-[20px] font-extrabold " > {hour}</div>{" "}
      </div>{" "}
      <div className="separator  font-[500] text-[32px] text-red-500">:</div>
      <div className="flex flex-col">
        {" "}
        <span className="text-[16px] font-[500]"> Mins</span> <div className="text-[20px] font-extrabold " > {mins}</div>{" "}
      </div>{" "}
      <div className="separator font-[500]  text-[32px] text-red-500">:</div>
      <div className="flex flex-col">
        {" "}
        <span className="text-[16px] font-[500]"> Seconds</span> <div className="text-[20px] font-extrabold " >{seconds} </div>{" "}
      </div>
 
    </div>
  );
};

export default Countdown;
