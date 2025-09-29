import React from 'react';
import Navbar from './component/Navbar';
import Banner from './component/Banner';

const App = () => {
  return (
    <>
     <header>
       <Navbar></Navbar>
     </header>
     <main>
      <Banner></Banner>
     </main>
    
    </>
  );
};

export default App;