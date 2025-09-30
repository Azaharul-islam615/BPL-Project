import React, { useState } from 'react';
import img1 from "../assets/Group (1).png"

import { CircleCheckBig, Flag, X } from 'lucide-react';
import { toast } from 'react-toastify';

const Cart = ({ player, select, setSelect, priced, setPriced }) => {
    const[isSelected,setIsSelected]=useState(false)
    
    const { playerImage, playerName, playerCountry, playerRole,rating, battingStyle, bowlingStyle
        , price
}=player

const choosePlayerHandle=()=>{
    toast(<div className="flex items-center gap-2">
        <CircleCheckBig className="text-green-500" />
        Add in selected section
    </div>)

    setSelect([...select,player])
    setIsSelected(true)
    if(priced<price){
        toast(<div>
            <X></X> <h2>Not enough balance</h2>
        </div>)
        return
    }
    setPriced(parseInt(priced) - parseInt(price))
    
    
    
}
    return (
        <div className=' p-4 bg-white shadow-xl rounded-xl '>
            <img className=' mb-2 object-cover object-top h-[250px] w-[380px] rounded-xl' src={playerImage} alt="" />
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
                <button disabled={isSelected} onClick={choosePlayerHandle} className="btn mb-3 font-[400] text-[14px]">{isSelected ? "Selected" :"Choose Player"}</button>
            </div>

        </div>
    );
};

export default Cart;