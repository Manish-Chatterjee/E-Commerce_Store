import React from 'react'
import poison from '../../public/images/poison.jpg'
import razer from '../../public/images/razer.png'
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import Image from 'next/image';

const Logitech = () => {
  return (
    <div className='razer' id='razer'>
      {/* <div className='redirect'>
      <FaChevronRight />
      </div> */}
      <div className='music'>
        <Image
        src={poison}
        width={350}
        />
        <div className='playButton'>
        <IoPlayBack />
        <FaRegCirclePlay style={{fontSize:"50px"}}/>
        <IoPlayForward />
        </div>
      </div>
      <div id='razerText'>
        <text>RAZER</text>
        <Image
        src={razer}
        className='headphoneImage'
        />
      </div>
    </div>
  )
}

export default Logitech