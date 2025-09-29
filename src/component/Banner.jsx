import React from 'react';
import img2 from"../assets/banner-main.png"


const Banner = () => {
    return (
        
       <div  className=" lg:w-[1200px] h-[400px] flex justify-center items-center mt-8 text-white  mx-auto rounded-[24px] 
            bg-gradient-to-r from-[#3b82f6]/60 via-[#111111] to-[#f472b6]/40">
               
            <div className='text-center '>
                <img className='mx-auto w-[250px] mb-3' src={img2} alt="" />
                <h1 className='lg:font-bold lg:text-[35px]'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
              
                 <span className='border border-amber-300 px-1 py-[14px] rounded-2xl'>
                    <button className='px-4 py-2 bg-[#E7FE29] text-black rounded-xl mt-2 cursor-pointer'>Claim Free Credit</button>
                 </span>
              
            </div>
            
        </div>
      
    );
};

export default Banner;