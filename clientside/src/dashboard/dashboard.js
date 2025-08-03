import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Summary from './summary';
import Orders from './orders';
import Holdings from './holdings';
import Positions from './positions';
import Funds from './funds';
import Watchlist from './watchlist';
import { GeneralContextProvider } from './context/Generalcontext';
import TopBar from './topbar';



const Dashboard=()=> {
  return ( 
    <GeneralContextProvider>
    <div className='dashboard-container'>
      
        <TopBar /> 
        <Watchlist/> 
      <div className='content'>
        <Routes>
          <Route path="/" element={<Summary/>}></Route>
          <Route path="orders" element={<Orders/>}></Route>
          <Route path="allholdings" element={<Holdings/>}></Route>
          <Route path="positions" element={<Positions/>}></Route>
          <Route path="funds" element={<Funds/>}></Route>
        </Routes>
      </div>
      
    </div>
    </GeneralContextProvider>
    
   );
}

export default Dashboard;