import React from "react";
import Layout from "../../components/Layout";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";

const Contact = () => {
  return (
    <Layout>
      <div className="p-2 mb:p-">
        <div className="breadcrumb flex justify-start ml-[15px]">
          Home / <span className="underline">Contact</span>
        </div>
        <div className=" mt-[5vh] mb-[5vh] flex justify-around items-center flex-col md:flex-row p-3 gap-4">
          <div className="left-side justify-center items-center shadow-2xl  card-shadow  rounded-[10px] p-11 h-[53vh] md:h-[70vh]">
            <div className="flex flex-col gap-[20px]">
              <div className="flex justify-start items-center gap-[10px]">
                <LuPhoneCall
                  size={50}
                  className="bg-red-500 rounded-[50%] p-3"
                  color="white"
                />
                <span className="font-semibld text-[2em]"> Call To Us</span>
              </div>
              <div className="flex flex-col gap-[20px] ">
                <div>We are available 24/7, 7 days a week.</div>

                <div>
                  Phone: <span className="font-semibold">+234164109066</span>
                </div>
              </div>
              <hr />
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-start items-center gap-[20px]">
                  <AiOutlineMail
                    size={50}
                    className="bg-red-500 rounded-[50%] p-3"
                    color="white"
                  />
                  <span className="font-semibld text-[2em]"> Write To Us</span>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <div>
                    Fill out our form and we will contact you within 24 hours
                  </div>
                  <div>
                    Phone: <span className="font-semibold">+234164109066</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side flex flex-col  shadow-2xl  card-shadow  rounded-[10px] p-11 h-[53vh] md:h-[70vh]">
            <div className="flex flex-col md:flex-row gap-[10px] items-center">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="bg-[#d2d2d2] focus:outline-none h-[50px]   p-3 "
              />
              <input
                type="text"
                placeholder="Your Email"
                required
                className="bg-[#d2d2d2] focus:outline-none h-[50px]   p-3 "
              />
              <input
                type="text"
                placeholder="Your Phone"
                required
                className="bg-[#d2d2d2] focus:outline-none h-[50px]    p-3"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="bg-[#d2d2d2] focus:outline-none h-[130px]  p-3 mt-[10px]"
            ></textarea>
            <button
              className="text-white mt-[10px] flex justify-end items-start w-[10p] bg-red-500 p-4 rounded-[10px]  hover:bg-white hover:text-red-500 duration-75 hover:border hover:border-red-500 "
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
