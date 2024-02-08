import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import logo from '../images/logo.png'
import { BsCart2 } from "react-icons/bs";
import { PiUserCircleThin } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [toggle,setToggle]=useState(true)

  function handleNav(){
    setToggle(!toggle)
  }
  return (
    <div>
       <div className=' flex justify-between'>
        <div className=' flex space-x-3 mt-3'>
            <div className="hamburger px-3 md:hidden" >
           {
              toggle? <RxHamburgerMenu onClick={handleNav} size={25} /> :    <RxCross2 onClick={handleNav} size={25}/>
             }
            </div>
            <div className="search md:hidden">
            <IoIosSearch size={20} />
            </div>
        </div>
        <div className=' md:order-1 flex md:absolute md:left-20    '>
            <img className=' h-12' src={logo} alt="logo" />
          
             <ul className={` space-y-14 md:space-y-0 md:flex md:mt-[12px] md:ml-40  md:space-x-10 mt-12 absolute left-0 px-4 ${!toggle ? `show`:`hidden`} bg-white w-full  `}>
            <li>Microsoft365</li>
            <li>Teams</li>
            <li>Copilot</li>
            <li>Windows</li>
            <li>Surface</li>
            <li>Xbox </li>
            <li>Support</li>
          </ul> 
        </div>
        <div className='flex space-x-3 mt-3 md:order-3 md:space-x-8 md:mr-40'>
          <div className=' hidden'>
            <li className=' list-none'>All Microsoft</li>
          </div>
        <div className=" hidden md:flex md:space-x-4">
            <IoIosSearch size={20} />
            <li className=' list-none'>Search</li>
            </div>
           <div className="cart">
           <BsCart2 size={25} />
           </div>
           <div className="account px-2">
           <PiUserCircleThin size={30} />
           </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar