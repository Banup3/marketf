import React,{useState,useEffect} from 'react';

import axios from 'axios';
import { Verticalgraph } from './verticalchart';


const  Holdings=()=> {

  const [allHoldings,setallHoldings]=useState([]);
  useEffect(() => {
  axios.get("https://marketf.onrender.com/allholdings")
    .then((res) => {
      console.log("Holdings fetched:", res.data); // ✅ Check this
      setallHoldings(res.data);
    })
    .catch((err) => {
      console.error("Error fetching holdings:", err);
    });
}, []);
;
  const labels=allHoldings.map((subArray)=>subArray["name"]);

  const data={
    labels,
    datasets:[
       {
      label: 'stock price',
      data:allHoldings.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    ]
  }
//   export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };
  return (
    <>
    <h3 className='title'>Holdings({allHoldings.length})</h3>
    <div className='order-table'>
      <table>
        <tr>
           <th>Instrument</th>
           <th>Qty</th>
           <th>Avg. cost</th>
           <th>LTP</th>
           <th>Cur. val</th>
           <th>P&L</th>
           <th>Net chg.</th>
           <th>Day chg.</th>
        </tr>
        {allHoldings.map((stock,index)=>{
          const curVal=stock.price*stock.qty;
          const isProfit=curVal-stock.avg*stock.qty >=0.0;
          const profClass=isProfit ?"profit" :"loss";
          const dayClass=stock.isLoss ? "loss":"profit";
          return(
            <tr key={index} >
           <td>{stock.name}</td>
           <td>{stock.qty}</td>
           <td>{stock.avg.toFixed(2)}</td>
           <td>{stock.price.toFixed(2)}</td>
           <td>{curVal.toFixed(2)}</td>
           <td className={profClass}>{(curVal-stock.avg*stock.qty).toFixed(2)}</td>
           <td className={profClass}>{stock.net}</td>
           <td className={dayClass}>{stock.day}</td>
        </tr>
          )        })}
      </table>
    </div>
    <div className='row'>
      <div className='col'>
        <h5>29,875<span>55</span>{""}
        </h5>
        <p>Total investment</p>
      </div>
      <div className='col'>
        <h5>31,428<span>95</span>{""}
        </h5>
        <p>Curren value</p>
      </div>
      <div className='col'>
        <h5>1,553.40 (+5.20%)</h5>
        <p>P&L</p>
      </div>
    </div>
    <Verticalgraph data={data}/>
    </>
    );
}

export default Holdings;