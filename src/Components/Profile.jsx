import React from "react";
import banner2 from "/img/banner2.jpg"
import logo from "/img/logo2.png"
import user from "/img/user.svg"


const Profile = () => {
  return (
    <div className="mt-[40px]">
      <div className=" md:flex items-center">
        <div className="px-4">
          <h1 className="text-center text-[32px] font-semibold mb-5">Company Profile</h1>
          <p className="text-[16px] md:tracking-wide mb-4">
            Welcome to <strong>Zeos Pitshop</strong>, your trusted destination
            for premium motorcycle maintenance and repair services. With{" "}
            <span className="border-b-2 border-red-500">10+ years</span> of experience and a passion for two-wheelers,
            we are committed to keeping your ride in top condition. From routine
            check-ups to major repairs, our skilled technicians ensure quality
            service every time.
            <br />
            <br />
            Located at the <span className="border-b-2 border-red-500">heart of Coimbatore</span>, we take pride in
            offering customized solutions for all major motorcycle brands.Our
            state-of-the-art facilities and customer-first approach guarantee
            satisfaction and excellence.
          </p>
        </div>

        <div className="md:w-[200%]">
          <img src={banner2} alt="Shop image" className="rounded-lg"/>
        </div>
      </div>

      <div className="md:flex md:gap-4 md:justify-around md:mb-[50px]">
      <div className="flex px-3 mt-[30px] items-center justify-center">
        <div className="mr-3 md:mr-16">
          <img src={logo} alt="Logo"className="w-[100px] md:w-[200px]" />
        </div>

        <div>
          <h3 className="md:text-[28px]">Aurogyasamy</h3>
          <p>+91 6374556308</p>
          <p>www.inquery@zeopitshop.com</p>
          <p>
            2/23, Palladam Rd, <br />
            Othakkalmandapam <br />
            Coimbatore-642228
          </p>
        </div>
      </div>

      <div className="flex md:justify-center flex-wrap gap-5 mb-5 mt-5">
        <div className="flex items-center">
          <div className="mr-4">
            <img src={user} className="h-14" />
          </div>
          <div className="text-[14px]">
            <h5 className="text-[18px]">Jebaraj</h5>
            <p>Mechanic</p>
            <p>7 +years Exp</p>
          </div>
        </div>
        <div className="flex items-center">
            <div className="mr-4">
                <img src={user} alt="" className="h-14" />
            </div>
            <div className="text-[14px]">
                <h5 className="text-[18px]">Daniel Raj</h5>
                <p>Mechanic</p>
                <p>6 +years Exp</p>
            </div>
        </div>
        <div className="flex items-center">
            <div className="mr-4">
                <img src={user} alt=""  className="h-14"/>
            </div>
            <div className="text-[14px]">
                <h5 className="text-[18px]">David Raj</h5>
                <p>Mechanic</p>
                <p>4 +years Exp</p>
            </div>
        </div>
      </div>
      </div>

      

      
    </div>
  );
};

export default Profile;
