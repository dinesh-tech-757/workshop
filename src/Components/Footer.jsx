import React from "react";
import footlogo from "/img/logo2.png"
import { MdMiscellaneousServices } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <section className="md:flex md:justify-between px-2 md:flex-nowrap flex-wrap pt-[20px] gap-4">
        <section className="flex gap-4 items-center md:border-none justify-between px-[10px] border-b-4 rounded-3xl pb-10">
          <div className="bg-black inline-block rounded-full">
            <img src={footlogo} alt="" className="h-[150px] w-[150px] bg-white rounded-full m-[0]"/>
          </div>
          <div>
          <div>
            <h1 className="text-[22px] font-semibold tracking-wider border-b-4 border-red-500 rounded-full inline-block mb-[15px] px-[10px]"><i class="fa-solid fa-location-dot mr-[5px] text-red-500 text-[28px]"></i>ADDRESS</h1>
            <address className="text-[12px] pl-[20px]">
              23-c3, Palladam road, AVT Opp,
              <br />
              Othakkalmandapam - 641 022
            </address>
          </div>
          <div>
            <h1 className="text-[22px] font-semibold tracking-wider border-b-4 border-red-500 rounded-full inline-block mb-[15px] px-[10px] mt-[20px]"><i class="fa-solid fa-phone mr-[5px] text-red-500 text-[28px]"></i>PHONE</h1>
            <p className="text-[12px] pl-[20px]">+91 6374556308</p>
          </div>
          <div>
            <h1 className="text-[22px] font-semibold tracking-wider border-b-4 border-red-500 rounded-full inline-block mb-[15px] px-[10px] mt-[20px]"><i class="fa-solid fa-envelope mr-[5px] text-red-500 text-[28px]"></i>EMAIL US</h1>
            <p className="text-[12px] pl-[20px]">inquery@zeopitshop</p>
          </div>
          </div>
        </section>

        <section className="flex justify-between items-center md:border-none px-[20px] mt-4 mb-6 pb-10 border-b-4 rounded-3xl">
            <div className="bg-white inline-block rounded-full p-2 md:hidden">
            <MdMiscellaneousServices className="h-[150px] w-[150px] bg-black text-white rounded-full m-[0]"/>
            </div>
          <div className="md:flex flex-col md:gap-4">
            <h1 className="text-[22px] font-semibold tracking-wider border-b-4 border-red-500 rounded-full inline-block mb-[15px] px-[10px] mt-[20px]">OUR SERVICE</h1>
            <p className="text-[12px] pl-[20px]">Door step service</p>
            <p className="text-[12px] pl-[20px]">No Long Queues Now</p>
            <p className="text-[12px] pl-[20px]">On Road Breakdown Support</p>
            <p className="text-[12px] pl-[20px]">Timely Service Reminders</p>
            <p className="text-[12px] pl-[20px]">Spares Warranty</p>
            <p className="text-[12px] pl-[20px]">Lubricant</p>
            <p className="text-[12px] pl-[20px]">Spares</p>
            <p className="text-[12px] pl-[20px]">Insurance</p>
          </div>
        </section>

        <section className="flex justify-between items-center px-[20px] mt-4 md:border-none mb-6 pb-10 border-b-4 rounded-3xl">
        <div className="bg-white inline-block rounded-full p-2 md:hidden">
            <FaNewspaper className="h-[150px] w-[150px] bg-black text-white rounded-full m-[0]"/>
            </div>
          <div className="">
            <h1 className="text-[22px] font-semibold tracking-wider border-b-4 border-red-500 rounded-full inline-block mb-[15px] px-[10px] mt-[20px]">OUR NEWSLETTER</h1>
            <p className="text-[12px] pl-[20px]">
              You can subscribe to Speedforce and <br />stay updated with the latest <br />information from us.
            </p>
            <input placeholder="Enter Your Name" type="text" className="w-[100%] mb-[10px] mt-[10px] rounded-full p-1 pl-2 outline-none border-none"/>
            <input placeholder="Enter Your Email" type="text" className="w-[100%] mb-[10px] mt-[10px] rounded-full p-1 pl-2 outline-none border-none"/>
            <button className="flex items-center text-[18px] border-l-[5px] border-b-[5px] border-t-[1px] border-r-[1px] border-red-500 px-2 rounded-lg mb-[20px] mt-4">Subscribe Now</button>
          </div>
        </section>
      </section>

      <section className="">
        <div>
          <p className="text-[12px] text-center">Copyright &copy; 2024 SpeedForce. All Rights Reserved</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;