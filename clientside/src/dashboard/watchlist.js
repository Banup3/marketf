import React,{useState} from 'react';

import {Tooltip,Grow} from '@mui/material';
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from '@mui/icons-material';
import BuyActionWindow from "./buyactionwindow"; // adjust path if needed
import axios from 'axios';


import {watchlist} from './data';
import { Doughnutchart } from './doughnutchart';

const Watchlist=()=> {
  const labels=watchlist.map((subArray)=>subArray["name"]);
  const data={
    labels,
    datasets:[{
      label: 'Price',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
    }
  return (  
    <div className='watchlist-container' style={{marginTop:'30px'}}>
      <div className='search-container'>
        <input type='text' name='search' id='search' placeholder='eg:infy.bse,nse' className='search'>
        </input>
        <span className='counts'>{watchlist.length}/50</span>
      </div>
       <ul className='list'>
        {watchlist.map((stock,index)=>{
          return (
          <WatchlistItem stock={stock} key={index}></WatchlistItem>)
  })}
       </ul>
       <Doughnutchart data={data}/>
    </div>
  );
}

export default Watchlist;

const WatchlistItem=({stock})=>{
  const [showlistactions,setshowlistactions]=useState(false);
  const handlemouseenter =(e)=>{
    setshowlistactions(true);
  }
  const handlemouseexit =(e)=>{
    setshowlistactions(true);
  }
  return(
    <li onMouseEnter={handlemouseenter} onMouseLeave={handlemouseexit}>
      <div className='item'>
        <p className={stock.isDown ? "down" :"up"}>{stock.name}</p>
        <div className='itemInfo'>
          <span className='percent'>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className='down'/>
           )  : 
            <KeyboardArrowUp className='down'/>
            }
            <span className='price'>{stock.price}</span>
        </div>
      </div>
      {showlistactions && <Watchlistactions uid={stock.name}/>}
    </li>
  )
};
const Watchlistactions =({uid}) =>{
  const [showBuyWindow, setShowBuyWindow] = useState(false);

  const handleBuyClick = () => {
    setShowBuyWindow(true);
  };
  return (
    <>
    <span className='actions'>
      <span>
        <Tooltip title="Buy(B)" placement="top" arrow TransitionComponent={Grow}>
          <button className='buy' onClick={handleBuyClick}>Buy</button>
        </Tooltip>
        <Tooltip title="Sell(S)" placement="top" arrow TransitionComponent={Grow}>
          <button className='sell'>Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className='action'>
          <BarChartOutlined className='icon'></BarChartOutlined>
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className='action'>
          <MoreHoriz className='icon'></MoreHoriz>
          </button>
        </Tooltip>
      </span>
    </span>
      {/* Render BuyActionWindow only if requested */}
      {showBuyWindow && <BuyActionWindow uid={uid} />}
      </>
  )
}