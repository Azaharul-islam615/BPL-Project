import React from 'react';
import img1 from "../assets/Group (1).png"

import { Flag } from 'lucide-react';

const Cart = ({ player }) => {
    console.log(player)
    const { playerImage, playerName, playerCountry, playerRole,rating, battingStyle, bowlingStyle
        , price
}=player
    return (
        <div className=' p-3 bg-white shadow-xl rounded-xl '>
            <img className=' mb-2 h-[250px] w-[380px] rounded-xl' src={playerImage} alt="" />
            <div className='flex items-center gap-2 m-0'>
                <img className='w-[20px]' src={img1} alt="" /> <h1 className='font-semibold text-[18px] text-[#131313]'>{playerName}</h1>
            </div>
            <div className='flex justify-between items-center border-b-2 border-gray-200 mb-2'>
                <div className='flex items-center gap-1 '>
                    <Flag className='text-gray-500'></Flag>
                    <h3 className='font-[400] text-[16px] text-gray-500'>{playerCountry}</h3>
                </div>
                <button className="btn mb-3 font-[400] text-[14px] px-4">{playerRole}</button>
            </div>
            <h1 className='font-bold text-[16px] mb-1'>Rating: {rating}</h1>
            <div className='flex justify-between items-center mb-2'>
                <h1 className='font-semibold text-[15px]'>{battingStyle}</h1>
                <p className='font-[400] text-[14px] text-[#131313a9]'>{bowlingStyle}</p>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-[15px]'>Price: {price} USD</h1>
                <button className="btn mb-3 font-[400] text-[14px]">Choose Player</button>
            </div>

        </div>
    );
};

export default Cart;