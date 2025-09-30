import React, { Suspense, useState } from 'react';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Available from './component/Available';

const loadData = fetch('/player.json').then(res => res.json())

const App = () => {
  const [clicked, setclicked] = useState(false)
  

  
  const handle = () => {
    setclicked(!clicked)
  }
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>

        <div className='p-2 lg:w-[1200px] mx-auto mt-14'>
          <div className='flex justify-between items-center mb-3'>
            <h1 className='font-bold lg:text-[28px]'>Available Players</h1>
            <div >
              <button onClick={handle} className={`border border-gray-300 px-2 lg:px-4 py-2 rounded-l-2xl  lg:text-[16px] ${clicked ? "bg-[#E7FE29] text-black font-semibold" : "bg-white text-gray-500"}`}>Available</button>

              <button onClick={handle} className={`border border-gray-300 px-2 lg:px-4 py-2 rounded-r-2xl lg:text-[16px] ${!clicked ? "bg-[#E7FE29] text-black font-semibold" : "bg-white text-gray-500"}`}>Selected (0)</button>
            </div>
          </div>

          <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
            <Available loadData={loadData}></Available>
          </Suspense>


          
        </div>
        

      </main>

    </>
  );
};

export default App;