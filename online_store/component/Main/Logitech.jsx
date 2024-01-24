import React from 'react'
import nightLife from '../../public/images/NightSky.jpg'
import logitech from '../../public/images/logitech.png'
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import Image from 'next/image';

const Logitech = () => {
  return (
    <div className='logitech' id='logitech'>
      {/* <div className='redirect'>
      <FaChevronRight />
      </div> */}
      <div id='logitechText'>
      <text>LOGITECH</text>
      <Image
      src={logitech}
      className='headphoneImage'
      />
      </div>
      <div className='music'>
        <Image
        src={nightLife}
        width={350}
        />
        <div className='playButton'>
        <IoPlayBack />
        <FaRegCirclePlay style={{fontSize:"50px"}}/>
        <IoPlayForward />
        </div>
      </div>
    </div>
  )
}

export default Logitech
