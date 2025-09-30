import React from 'react';

import { CircleCheckBig, Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';


const Select = ({ playerr, removeselect, priced, setPriced }) => {
    const remove=()=>{
       toast(<div className='flex items-center gap-2'>
        <CircleCheckBig className='text-green-500'></CircleCheckBig>
        Remove Successfully
       </div>)
        removeselect(playerr.playerName)
        setPriced(parseInt(priced) + parseInt(playerr.price))
    }
   
    const { playerImage, playerName, battingStyle }=playerr
    return (
        <div className='flex justify-between items-center bg-white shadow-md border-t-[1px] border-gray-200 mt-5 px-4 py-3 rounded-lg'>
            <div className='flex items-center gap-3'>
                <img className='w-[120px] h-[90px] object-cover object-top rounded-lg' src={playerImage} alt="" />
                <div>
                    <h1 className='font-semibold text-[22px] mb-2'>{playerName}</h1>
                    <p className='font-[400] text-[16px]'>{battingStyle}</p>
                </div>
            </div>
            <Trash2 onClick={remove}></Trash2>
        </div>
    );
};

export default Select;