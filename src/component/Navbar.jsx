import React, { useState } from 'react';
import img1 from"../assets/logo.png"
import { CircleDollarSign, Menu, X } from 'lucide-react';

const Navbar = ({priced }) => {
    const links=[{id:1,name:"Home"},{id:2,name:"Fixture"},{id:3,name:"Teams"},{id:4,name:"Shedules"}]
    const linkss=links.map((link,index)=><li key={index} className='hover:text-pink-600 hover:border-b-[2px] bdown'><a href="">{link.name}</a></li>)
    const [open,setOpen]=useState(false)
    const hadlenav=()=>{
        setOpen(!open)
    }
    return (
        <div className='shadow-md'>
            <nav className='px-2 lg:w-[1200px] mx-auto flex justify-between items-center py-2'>
                <div className='flex justify-center items-center gap-2'>
                    <div onClick={hadlenav}>
                        
                        {
                            open?<X className='md:hidden lg:hidden'></X>:<Menu className=' md:hidden lg:hidden'></Menu>
                        }
                        <ul className={`md:hidden lg:hidden absolute  font-[400] text-[#131313c1]   bg-white shadow-md text-[14px] px-4 py-2 rounded-lg duration-1000 ${open?"top-18":"-top-40"}`}>
                            
                            
                                {
                                linkss
                            }
                           
                        </ul>
                    </div>
                    <img className='w-[60px]' src={img1} alt="cricket logo" />
                </div>
                <ul className='hidden  md:flex lg:flex justify-center items-center  gap-3 md:gap-6 lg:gap-10 text-[#131313ab] font-[400] text-[16px]'>
                        {
                           linkss 
                        }
                </ul>
                <div className='flex justify-center items-center gap-4'>
                    <button className=' rounded-lg px-5  py-3 border border-gray-200 shadow-sm flex gap-2 font-semibold text-[16px]'>{priced} Coin <CircleDollarSign className= 'items-center bg-amber-600 rounded-full text-white'></CircleDollarSign></button>
                
                    
                
                </div>
            </nav>
        </div>
    );
};

export default Navbar;