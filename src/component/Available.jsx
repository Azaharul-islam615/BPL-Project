import React, { use } from 'react';
import Cart from './Cart';



const Available = ({ loadData, select, setSelect, priced, setPriced }) => {
    
    const players = use(loadData)


    return (
        <div>
            {/* cart container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' >
                {/* cart */}
                
                {
                    players.map((player, index) => <Cart priced={priced} setPriced={setPriced} select={select} setSelect={ setSelect} key={index} player={player}></Cart>)
                }

            </div>
        </div>
    );
};

export default Available;