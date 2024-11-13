import React from 'react'

const Our_services = () => {
  return (
    <div className='w-full'>
      <div className=" py-8  px-14 full">
      
      <h1 className="text-black font-bold text-[25px]">Our Services
      {/* <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg> */}
      </h1>
      <div className="sm:flex sm:justify-around">

      <p className="pt-5 text-[16px] font-normal sm:w-[50%]">TechMinds Software Developers Team Always Ensuring client satisfaction and Business Growth. We're a premier Custom Website and Web App Development Company committed to delivering top-notch web / mobile App design and development services.</p>
      <div className="hidden sm:flex w-[220px] h-[44px] bg-[#0C487B]  rounded text-white  sm:text-sm sm:mt-[140px] sm:justify-center">
           <button className="">EXPLORE MORE OPENINGS</button>
           </div>
      </div>
    </div>
    </div>
  )
}

export default Our_services