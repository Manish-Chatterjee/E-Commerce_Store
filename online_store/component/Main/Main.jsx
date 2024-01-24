import React from 'react'
import Beats from './Beats'
import Logitech from './Logitech'
import Razer from './Razer'
import Link from 'next/link'
import { FaChevronRight } from "react-icons/fa";

const Main = () => {
  return (
    <div>
      <Beats/>
      <Logitech/>
      <Razer/>

      <Link href='/ProductList' className='redirect'><FaChevronRight/></Link>
    </div>
  )
}

export default Main
