import React from 'react'
import hallucination from '../../public/images/hallucination.jpg'
import beats from '../../public/images/beats.png'
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";
import { Button, Nav, NavLink } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const Beats = () => {

const width = window.innerWidth;
console.log(width,'width')

  return (
    <div className='beats' id='beats'>
    
      {width > 1000 ? 
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