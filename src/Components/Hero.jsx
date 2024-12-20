import React from "react";
import banner1 from "/img/banner1.jpg";

const Hero = () => {
  return (
    <div>
      <section className="md:flex justify-between items-center md:hover:bg-blue-100 px-4 py-5">
        <div>
          <h1 className="md:text-[50px] text-[24px] font-medium">
            Best Service with <br />
            <span className="text-red-500">Affordable Price </span>in Coimbatore
          </h1>
          <button className="bg-red-500 px-1 py-1 rounded-md text-white md:text-[24px] mt-3 mb-3">Book Now</button>
        </div>

        <div>
          <img className="w-[100%] md:w-[90%] rounded-3xl" src={banner1} alt="Banner" />
        </div>
      </section>

      <section>
        <div className="text-center">
          <h1 className="bg-red-500 py-1 px-3 rounded-md text-white md:px-4 md:py-3 md:tracking-widest md:text-[24px] md:font-semibold">Ongoing Offers</h1>
        </div>

        <div className="mt-4 flex justify-around rounded-lg md:text-[30px]">
          <div className="md:border-[4px] border-[2px] border-red-500 py-5 px-5 rounded-[10px] md:px-10 md:py-10 md:w-[35%]">
            <h2 className="text-center mb-1 font-semibold tracking-wide">
              General Service
            </h2>
            <div>
              <div>
                <p className=" mb-2 bg-green-300 text-red-500 font-bold text-center rounded-full">FREE</p>
              </div>
              <div className="mt-5 text-[12px] md:text-[16px]">
                <p>
                  <i class="fa-solid fa-check text-green-500 mr-2 text-[18px]"></i>Water Wash ₹150
                </p>
                <p>
                  <i class="fa-solid fa-check text-green-500 mr-2 text-[18px]"></i>Chain Lub ₹150
                </p>
                <p>
                  <i class="fa-solid fa-check text-green-500 mr-2 text-[18px]"></i>Break Oil ₹150
                </p>
              </div>
            </div>
          </div>

          <div className="md:border-[4px] border-[2px] border-red-500 py-5 px-5 rounded-[10px] md:px-10 md:py-10 md:w-[35%]">
            <h2 className="text-center mb-1 font-semibold tracking-wide">Engine Service</h2>
            <div>
                <p className=" mb-2 bg-green-300 text-red-500 font-bold text-center rounded-full">FREE</p>
            </div>
            <div className="mt-5 text-[12px] md:text-[16px]">
            <p>
              <i class="fa-solid fa-check text-green-500 mr-2 text-[18px]"></i>20% OFF
            </p>
            <p>
              <i class="fa-solid fa-check text-green-500 mr-2 text-[18px]"></i>Water Wash ₹150
            </p>
            <p>
              <i class="fa-solid fa-check text-green-500 mr-2 text-[18px]"></i>Chain Lub ₹150
            </p>
            <p>
              <i class="fa-solid fa-check text-green-500 mr-2 text-[18px]"></i>Break Oil ₹150
            </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
