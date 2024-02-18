import React, { useState } from 'react'
import hallucination from '../../public/images/hallucination.jpg'
import beats from '../../public/images/beats.png'
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";
import { Button, Nav, NavLink } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import WindowSize from '../WindowSize'

const Beats = () => {


const [dimensionWidth,setDimensionWidth] = useState();
const [dimensionHeight,setDimensionHeight] = useState();

const handleCallback = (size) => {
  console.log(size.width,'h & w');
  setDimensionWidth(size.width);
  setDimensionHeight(size.height);
}

  return (
    <div className='beats' id='beats'>

    <WindowSize onCallback={handleCallback}/>
    
      {dimensionWidth > 1000 ? 
        <div className='music'>
          <Image
          src={hallucination}
          width={350}
          />
          <div className='playButton'>
          <IoPlayBack />
          <FaRegCirclePlay style={{fontSize:"50px"}}/>
          <IoPlayForward />
          </div>
        </div> 
      : null}
      <div id='beatText'>
        <text>BEATS</text>
        <Image
        src={beats}
        className='headphoneImage'
        />
      </div>
    </div>
  )
}

export default Beats