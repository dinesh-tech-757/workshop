import React, { useState } from "react";
import navlogo from "/img/logo2.png";
import { IoMenu } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Service",
    },
    {
      id: 4,
      name: "Become Partner",
    },
    {
      id: 5,
      name: "Contact",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const Navbar = () => {
    return (
      <div className="flex flex-col text-sm gap-6 font-medium md:hidden bg-opacity-80 absolute bg-white p-2 left-0 top-0 w-screen h-screen ">
        <div className="flex justify-between p-4 bg-black text-white">
          <div className="flex flex-col gap-4">
            <img
              src={navlogo}
              alt=""
              className="h-[85px] w-[90px] border-red-500 border-x-4 rounded-full bg-white"
            />
            <p className="flex items-center gap-2 text-white">
              <MdAdminPanelSettings className="text-[25px]" /> ZEOS PITSHOP
            </p>
          </div>
          <div>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <IoCloseSharp className="text-[30px] border-red-500 border-x-4 rounded-full" />
              </button>
            </div>
        </div>
        {navLinks.map((item, index) => (
          <ul
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`${index == activeIndex ? "" : null} pt-4`}
          >
            <li className="bg-white inline-block px-[10px] py-[5px] rounded-l-full border-l-4 border-red-500 opacity-80 rounded-r-lg ">
              {item.name}
            </li>
          </ul>
        ))}
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center bg-gray-600 text-white py-1 px-3 md:text-[15px] text-l text-[8px]">
        <div className="flex gap-5">
          <a
            href="#"
            className="hover:text-red-400 transition-all duration-100 ease-in-out"
          >
            <i class="fa-solid fa-phone mr-2"></i>+91-6374556308
          </a>
          <a
            href="#"
            className="hover:text-red-500 transition-all duration-300 ease-in-out"
          >
            <i class="fa-solid fa-envelope mr-2"></i>zeospitshop@gmail.com
          </a>
        </div>

        <div className="md:flex gap-5 hidden">
          <a
            href="#"
            className="text-red-400 text-lg font-semibold hover:text-white transition-all duration-100 ease-in-out"
          >
            Become a Francise
          </a>
          <a href="#" className="bg-red-400 p-1">
            Language<i class="fa-solid fa-angle-down ml-2"></i>
          </a>
        </div>
      </div>

      <nav className="flex justify-between items-center shadow-md pr-7">
        <div>
          <a href="index.html">
            <img
              src={navlogo}
              alt="logo"
              className="md:h-[80px] inline-block h-10 pl-2"
            />
          </a>
        </div>

        <div className=" md:gap-8 text-sm gap-2 md:text-[22px] font-medium hidden md:flex">
          {navLinks.map((item, index) => (
            <ul
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`${
                index == activeIndex ? "border-b-4 border-red-400 " : null
              } hover:scale-110 cursor-pointer hover:text-red-400 transition-all duration-100 ease-in-out md:flex`}
            >
              <li>{item.name}</li>
            </ul>
          ))}
        </div>
        {!isOpen ? (
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="text-[26px]"
            >
              <IoMenu />
            </button>
          </div>
        ) : (
          <div className="h-screen w-screen flex md:hidden items-center justify-center">
            <Navbar />
            
          </div>
        )}
      </nav>

      
    </div>
  );
};

export default Navbar;
