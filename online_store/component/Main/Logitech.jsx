import React, { useState } from 'react'
import nightLife from '../../public/images/NightSky.jpg'
import logitech from '../../public/images/logitech.png'
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import Image from 'next/image';
import WindowSize from '../WindowSize'

const Logitech = () => {

  const [dimensionWidth,setDimensionWidth] = useState();
const [dimensionHeight,setDimensionHeight] = useState();

const handleCallback = (size) => {
  console.log(size.width,'h & w');
  setDimensionWidth(size.width);
  setDimensionHeight(size.height);
}

  return (
    <div className='logitech' id='logitech'>
      <WindowSize onCallback={handleCallback}/>
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

      {dimensionWidth > 1000 ?
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
      : null}
    </div>
  )
}

export default Logitech
