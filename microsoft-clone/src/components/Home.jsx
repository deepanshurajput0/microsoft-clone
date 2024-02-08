import React from 'react'
import bannerImg from './../images/home.jpg'
import { SiWindows } from "react-icons/si";
import { FaXbox } from "react-icons/fa";
import { PiDevicesBold, PiOctagonBold } from "react-icons/pi";
import proImg from './../images/pro.jpg'
import Products from '../data';
import {Products2} from '../data';
const Home = () => {
  console.log(Products)
  return (
    <div>
      <div className=' md:flex justify-between'>
        <img className=' h-full md:order-2 md:h-[500px]  ' src={bannerImg} alt="banner-home" />
        <div className=' p-5 mt-8 md:pl-20 md:order-1 md:pt-28   md:w-full  '>
          <span className=' bg-yellow-400 p-2'>New</span>
          <h1 className=' text-2xl md:text-4xl font-bold mt-5'>Get more from Copilot</h1>
          <p className=' mt-3 md:mt-4'>See how your everyday AI companion can help enhance life and work</p>
          <div className=' mt-4'>
            <button className='bg-blue-500  text-white h-[2.5rem] w-[8rem]'>For individuals</button>
            <a className=' text-blue-500 ml-8'>For business </a>
          </div>
        </div>
      </div>
      <div className=' flex flex-col items-center space-y-10 mt-10 md:flex-row md:justify-center md:space-x-8'>
      <div className=' md:mt-10 flex flex-col items-center'>
      <SiWindows size={30} />
      <a className=' mt-5' href="">Choose your MicroSoft 365</a>
      </div>
      <div className=' flex flex-col items-center'>
      <FaXbox size={30} />
      <a className=' mt-5' href="">Shop Xbox games and consoles</a>
      </div>
      <div className=' flex flex-col items-center'>
      <SiWindows size={30} />
      <a className=' mt-5' href="">Explore Surface devices</a>
      </div>
    <div className=' flex flex-col items-center' >
    <PiDevicesBold size={30} />
    <a className=' mt-5' href="">Explore Surface devices</a>
    </div>
      </div>
   <div className='md:flex'>
   {
        Products.map((item)=>{
          return(
            <div key={item.id} className=' mt-10 p-5'>
            <img src={item.image} alt="photo" />
            <h1 className=' text-2xl font-semibold mt-4'>{item.name}</h1>
            <p className=' mt-3 mb-5'>{item.desc}</p>
            <a className=' text-blue-400 ' href="">Learn More</a>
          </div>
          )
        })
      }
   
   </div>
   <div className=' p-4 md:flex'>
    <img className='w-full md:order-2 md:w-full'  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-Hero-Xbox-Series-S:VP5-1596x600" alt="photo" />
      <div className=' md:order-1 md:absolute md:mt-40 md:ml-28'>
      <h1 className=' text-2xl font-semibold mt-4 md:text-4xl'>Xbox Series S </h1>
    <p className=' mt-3 md:mt-5'>Next-gen performance in the smallest Xbox ever </p>
    <button className=' md:mt-5 h-[2.4rem] mt-3 bg-blue-400 text-white w-[10rem]'>Shop Xbox series S</button>
      </div>
   </div>

   <div className=' md:mt-20'>
    <h1 className=' text-2xl ml-5 font-semibold md:text-3xl md:mt-5'>For Business</h1>
    <div className='md:flex'>
   {
        Products2.map((item)=>{
          return(
            <div key={item.id} className=' mt-2 p-5'>
            <img src={item.image} alt="photo" />
            <h1 className=' text-2xl font-semibold mt-4'>{item.name}</h1>
            <p className=' mt-3 mb-5'>{item.desc}</p>
            <a className=' text-blue-400 ' href="">Learn More</a>
          </div>
          )
        })
      }
   
   </div>
   </div>
    </div>
  )
}

export default Home