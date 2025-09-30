
import React from 'react';
import Select from './Select';


const Selected = ({ select, removeselect, priced, setPriced }) => {
    
    return (
        <div>
           
                {
                select.map((playerr, index) => <Select priced={priced} setPriced={setPriced} removeselect={removeselect} key={index} playerr={playerr}></Select>)
                }
            
        </div>
    );
};

export default Selected;