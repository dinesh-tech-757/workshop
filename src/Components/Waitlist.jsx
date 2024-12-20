import React from "react";

const Waitlist = () => {
  return (
    <div>
      <div className=" bg-red-500 px-4 py-3 text-center text-white rounded-b-3xl">
        <h1 className="md:text-[40px] text-[22px] font-bold md:font-medium tracking-widest">Zeo's &nbsp;Pitshop</h1>
        <h3 className="tracking-wider">Bike Service Center</h3>
      </div>

      <div className=" md:flex justify-around mt-[50px] px-2">
        <div className="">
          <h1 className="text-[30px] font-semibold">Best Quality with Affordable Price</h1>

          <h3 className="mt-[20px] bg-red-300 inline-block p-2 rounded-lg font-medium text-[22px]">Launching Soon</h3>

          <h2 className="mt-[10px] text-[28px] font-semibold">Register Now to get Special Offers</h2>
        </div>

        <div className="flex-col text-center m-[10px] md:text-[20px] bg-blue-200 rounded-3xl">
          <form action="#" className="p-2">
            <h1 className=" text-[22px] mb-[40px] tracking-wider font-semibold">Register Form</h1>

            <ul className="list-none flex flex-col gap-2 justify-start text-left">
            <li className="bg-transparent py-2 px-[10px] flex items-center">
              <label className="mr-4 w-[100px]">Name :</label>
              <input type="text" className="bg-transparent border-b border-black w-[250px] outline-none"/>
            </li>
            <li className="bg-blue-200 py-2 px-[10px] rounded-full flex items-center">
              <label className="mr-4 w-[100px]">Mobile :</label>
              <input type="number" className="bg-transparent border-b border-black w-[250px] outline-none"/>
            </li>
            <li className="bg-blue-200 py-2 px-[10px] rounded-full flex items-center">
              <label className="mr-4 w-[100px]">Email :</label>
              <input type="email" className="bg-transparent border-b border-black w-[250px] outline-none"/>
            </li>
            <li className="bg-blue-200 py-2 px-[10px] rounded-full flex items-center">
              <label className="mr-4 w-[100px]">Address :</label>
              <input type="text" className="bg-transparent border-b border-black w-[250px] outline-none"/>
            </li>
            <li>
              <button className="flex items-center text-[18px] border-l-[5px] ml-4 border-b-[5px] border-t-[1px] border-r-[1px] border-red-500 px-2 rounded-lg mb-[20px] mt-4">Submit</button>
            </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
