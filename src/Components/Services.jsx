import React from "react";
import service1 from "/img/service1.jpg"
import service2 from "/img/service2.jpg"
import service3 from "/img/service3.jpeg"
import service4 from "/img/service4.jpg"

const Services = () => {
  return (
    <div>
      <div className="text-center mt-[50px]">
        <h1 className="text-[32px] font-semibold inline-block mb-[20px]">OUR SERVICES</h1>
        <p className="px-8 mb-[30px] text-[20px]">
          Our service serves you with the best quality! Our two-wheelers
          multi-brand repair, fix, and servicing is always there to help you on
          the go.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-nowrap px-4 md:justify-between gap-4">
        <div className="md:w-[550px] flex flex-col h-[450px] items-center relative pt-4 pb-4 mb-[20px] border-l-4 pl-2 border-red-500 rounded-2xl">
          <img src={service1} alt="" className="h-[180px] w-[320px] rounded-2xl"/>
          <h1 className="mt-2 mb-2 text-[18px] font-semibold border-b-2 border-t-2 py-[5px] px-2 rounded-lg border-red-500">DOOR STEP SERVICE</h1>
          <p>
            Be it on the road or off the road, we are always ready to help you
            out. We pick your two-wheelers from your house, fix it like new, and
            deliver it to your place again so you don’t have to move.
          </p>
          <button className=" flex items-center text-[18px] absolute  bottom-2 border-l-[5px] border-b-[5px] border-t-[1px] border-r-[1px] border-red-500 px-2 rounded-lg mb-[20px] mt-4">
            EXPLORE MORE <i class="fa-solid fa-arrow-right ml-4"></i>
          </button>
        </div>
        <div className="md:w-[550px] flex flex-col items-center pt-4 pb-4 h-[450px] relative mb-[20px] border-l-4 pl-2 border-red-500 rounded-2xl">
          <img src={service2} alt="" className="h-[180px] w-[320px] rounded-2xl"/>
          <h1 className="mt-2 mb-2 text-[18px] font-semibold border-b-2 border-t-2 py-[5px] px-2 rounded-lg border-red-500">NO LONG QUEUES NOW</h1>
          <p>
            You don’t have to wait because we won’t make you wait. Our skilled
            force guarantees speedy servicing.
          </p>
          <button className=" flex items-center text-[18px] border-l-[5px] border-b-[5px] border-t-[1px] border-r-[1px] border-red-500 px-2 rounded-lg mb-[20px] mt-4 absolute bottom-2">
            EXPLORE MORE <i class="fa-solid fa-arrow-right ml-4"></i>
          </button>
        </div>
        <div className="md:w-[550px] flex flex-col h-[450px] relative items-center pt-4 pb-4 mb-[20px] border-l-4 pl-2 border-red-500 rounded-2xl">
          <img src={service3} alt="" className="h-[180px] w-[320px] rounded-2xl"/>
          <h1 className="mt-2 mb-2 text-[18px] font-semibold border-b-2 border-t-2 py-[5px] px-2 rounded-lg border-red-500">ON ROAD BREAK-DOWN SUPPORT</h1>
          <p>
            Be it anywhere anytime. We are always there to fix it up for you.
          </p>
          <button className=" flex items-center absolute bottom-2 text-[18px] border-l-[5px] border-b-[5px] border-t-[1px] border-r-[1px] border-red-500 px-2 rounded-lg mb-[20px] mt-4">
            EXPLORE MORE <i class="fa-solid fa-arrow-right ml-4"></i>
          </button>
        </div>
        <div className="md:w-[550px] relative h-[450px] flex flex-col items-center pt-4 pb-4 mb-[20px] border-l-4 pl-2 border-red-500 rounded-2xl">
          <img src={service4} alt="" className="h-[180px] w-[320px] rounded-2xl"/>
          <h1 className="mt-2 mb-2 text-[18px] font-semibold border-b-2 border-t-2 py-[5px] px-2 rounded-lg border-red-500">TIMELY SERVICE REMINDER</h1>
          <p>We always remind you to keep your two-wheelers in check.</p>
          <button className=" flex items-center absolute bottom-2 text-[18px] border-l-[5px] border-b-[5px] border-t-[1px] border-r-[1px] border-red-500 px-2 rounded-lg mb-[20px] mt-4">
            EXPLORE MORE <i class="fa-solid fa-arrow-right ml-4"></i>
          </button>
        </div>
      </div>

      <div className="text-center mb-[20px] mt-[20px]">
        <button className="bg-gray-300 text-red-500 px-4 py-[5px] text-[22px] rounded-md font-bold tracking-wider">View All Services</button>
      </div>
    </div>
  );
};

export default Services;
