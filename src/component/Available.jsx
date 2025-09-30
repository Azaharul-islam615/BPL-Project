import React, { use } from 'react';
import Cart from './Cart';



const Available = ({ loadData }) => {
    
    const players = use(loadData)


    return (
        <div>
            {/* cart container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' >
                {/* cart */}
                
                {
                    players.map((player,index) => <Cart key={index} player={player}></Cart>)
                }

            </div>
        </div>
    );
};

export default Available;