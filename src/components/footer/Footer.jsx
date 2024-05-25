import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-4 gap-8">
        <div className="w-full h-full flex flex-col gap-8">
            <img className="w-32" src={logo} alt="logo" />
            <div className="flex gap-4">
                <span className="bannerIcon">
                    <FaFacebookF />
                </span>
                <span className="bannerIcon">
                    <FaTwitter />
                </span>
                <span className="bannerIcon">
                    <FaLinkedinIn />
                </span>
            </div>
        </div>
        <div className="w-full h-full">
            <h3 className="text-xl uppercase text-designColor tracking-wider">
                Quick Link
            </h3>
            <ul className="flex flex-col gap-4 font-titleFont font-medium py-6">
                <li>
                    <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
                    relative group">
                        About
                     <span className="absolute h-[1px] w-full inline-flex
                    bg-designColor -bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0
                    transition-transform duration-300"></span></span>
                </li>
                <li>About</li>
                <li>About</li>
            </ul>
        </div>
        <div className="w-full h-full"></div>
        <div className="w-full h-full"></div>
    </div>
  )
}

export default Footer