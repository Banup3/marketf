import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Menu=()=> {
  const [selectedOption,setselectedOption] =useState(0);
  const [profiledropdown,setprofiledropdown]=useState(false);

  const handleMenuClick =(index)=>{
    setselectedOption(index);
  }
  const handleProfileClick =(index)=>{
    setprofiledropdown(!profiledropdown);
  }
   const menuClass="menu";
   const activeMenuClass="menu selected";

  return ( 
    <div className='menu-container'>
      <img src='assets/logo (1).png' alt='img' style={{width:"50px"}}></img>
      <div className='menus mt-4'>
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard" onClick={()=>handleMenuClick(0)}>
            <p className={selectedOption===0 ? activeMenuClass :menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/orders" onClick={()=>handleMenuClick(1)}>
            <p className={selectedOption===1 ? activeMenuClass :menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/allholdings" onClick={()=>handleMenuClick(2)}>
            <p className={selectedOption===2 ? activeMenuClass :menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/positions" onClick={()=>handleMenuClick(3)}>
            <p className={selectedOption===3 ? activeMenuClass :menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/funds" onClick={()=>handleMenuClick(4)}>
            <p className={selectedOption===4 ? activeMenuClass :menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/apps" onClick={()=>handleMenuClick(5)}>
            <p className={selectedOption===5 ? activeMenuClass :menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr/>
        <div className='profile' onClick={handleProfileClick}>
          <div className='avatar' style={{marginBottom:"25px"}}>ZU</div>
          <p className='username'>USERID</p>
        </div>
        {profiledropdown}
      </div>
    </div>
   );
}

export default Menu;