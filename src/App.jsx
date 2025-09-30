import React, { Suspense, useState } from 'react';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Available from './component/Available';
import { ToastContainer } from 'react-toastify';
import Selected from './component/Selected';

const loadData = fetch('/player.json').then(res => res.json())

const App = () => {
  const [clicked, setclicked] = useState(true)
  const [select,setSelect]=useState([])
  const [priced,setPriced]=useState(6000000)
  const removeselect=(name)=>{
          console.log(name)
    const searching = select.filter(player => player.playerName!==name)
    setSelect(searching)
  }

  
  const handle = () => {
    setclicked(!clicked)
  }
  return (
    <>
      <header>
        <Navbar priced={priced} ></Navbar>
      </header>
      <main>
        <Banner></Banner>

        <div className='p-2 lg:w-[1200px] mx-auto mt-14'>
          <div className='flex justify-between items-center mb-3'>
            <h1 className='font-bold lg:text-[28px]'>{
              clicked ? "Available Players" :`Selected Player (${select.length}/15)`
              }</h1>
            <div >
              <button onClick={handle} className={`border border-gray-300 px-2 lg:px-4 py-2 rounded-l-2xl  lg:text-[16px] ${clicked ? "bg-[#E7FE29] text-black font-semibold" : "bg-white text-gray-500"}`}>Available</button>

              <button onClick={handle} className={`border border-gray-300 px-2 lg:px-4 py-2 rounded-r-2xl lg:text-[16px] ${!clicked ? "bg-[#E7FE29] text-black font-semibold" : "bg-white text-gray-500"}`}>{clicked ?`Selected (${select.length})`  : `Selected (${select.length})`}</button>
            </div>
          </div>
          {
            clicked ? <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
              <Available priced={priced} setPriced={setPriced} select={select} setSelect={setSelect} loadData={loadData}></Available>
            </Suspense> : <Selected priced={priced} setPriced={setPriced} removeselect={removeselect} select={select}></Selected>

          }

         
          

        </div>
        

      </main>
      <ToastContainer></ToastContainer>

    </>
  );
};

export default App;