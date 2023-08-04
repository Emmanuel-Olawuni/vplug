import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import AppleLogo from "../assets/apple.png";
import GoogleLogo from "../assets/google.png";
import QRCode from "../assets/Qrcode.png";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col md:flex-row py-6 pb-14 px-4 gap-[20px] justify-around">
        <div className="flex flex-col gap-[10px]">
          <div className=" text-[22px] font-extrabold"> EXCLUSIVE</div>
          <span>Subscribe</span>
          <span>Get 10% off your first order</span>
          <div className="relative">
            <input
              placeholder="Enter your email"
              className="w-[13em] h-[3em] focus:outline-none rounded-[5px] text-white p-3 border-white  bg-[transparent] border placeholder:opacity-25 placeholder:text-[13px] z-[2]"
            />
            <button type="submit">
              <SiMinutemailer
                size="20"
                className="absolute top-0 right-5 transform translate-x-[50%] translate-y-[50%] z-10 bg-black w-[30px]"
                color="white"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className=" text-[22px] font-extrabold"> Support</div>
          <span>111, Victoria Island, Lagos, Nigeria</span>
          <span>
            <a href="mailto:emmanuelolawuni2001@gmail.com" className="">
              Mail the Developer
            </a>
          </span>
          <span>
            <a href="tel:+2348164109066" className="">
              +2348164109066
            </a>
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className=" text-[22px] font-extrabold"> Account</div>
          <a href="" className="">
            My Account
          </a>
          <a href="" className="">
            Login / Register
          </a>
          <a href="" className="">
            Cart
          </a>
          <a href="" className="">
            Wishlist
          </a>
          <a href="" className="">
            Shop
          </a>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className=" text-[22px] font-extrabold"> Quick Links</div>
          <a href="" className="">
            Privacy Policy
          </a>
          <a href="" className="">
            Terms of Use
          </a>
          <a href="" className="">
            FAQ
          </a>
          <a href="" className="">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className=" text-[22px] font-extrabold"> Download Our App</div>
          <span>Save $3 with App New User Only</span>
          <div className="flex gap-[10px]">
            <div>
              <img src={QRCode} alt="" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <img src={GoogleLogo} alt="" />
              <img src={AppleLogo} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-[30px] mt-2">
            <BsFacebook size={30} /> <BsTwitter size={30} />{" "}
            <BsInstagram size={30} /> <BsLinkedin size={30} />
          </div>
        </div>
      </div>
      <hr className="   opacity-80" />

      <div className="flex text-center bg-black text-white items-center justify-center text-[14px] text-opacity-40 p-3">
      &Copy; Copyright Rimel 2022. All right reserved
      </div>
    </>
  );
};
export default Footer;
