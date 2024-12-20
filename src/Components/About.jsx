import React from 'react'

const About = () => {
  return (
    <div className='bg-red-500 mt-5 md:mt-[50px] text-white px-2 py-1 pb-[30px]'>
        <div className="flex flex-col items-center text-center pt-[10px] md:pt-[30px]">
          <h1 className='text-xl border-b-[2px] md:w-[300px] mb-3 md:text-[28px]'>Why Choose Us?</h1>
          <p className='text-sm md:text-lg'>Our service is our greatest strength. Our range of services is the most efficient and affordable in the market.
          We make sure that the satisfaction needle is always sliding to the right on the customer satisfaction meter.</p>
        </div>

        <div className="md:flex justify-between mt-[50px] text-center px-8 md:px-[80px]">
          <div className="md:w-[350px] border-[2px] rounded-lg px-3 py-4 mb-4">
            <h1>Excellent at your service</h1>
            <p>At Zeos Pitshop we deliver nothing but best! We offer premium maintenance and
              servicing for all types of two-wheelers under one roof.</p>
          </div>
          <div className="md:w-[350px] border-[2px] rounded-lg px-3 py-4 mb-4">
            <h1>Ride on Relaibility</h1>
            <p>Reliability and Transparency are the key factors of our business. Once your two
              wheeler is in our workshop you don’t have to worry about anything.</p>
          </div>
          <div className="md:w-[350px] border-[2px] rounded-lg px-3 py-4 mb-4">
            <h1>Affordability</h1>
            <p>Our premium service are heavy on servicing but lightweight on your pocket.</p>
          </div>
        </div>
    </div>
  )
}

export default About