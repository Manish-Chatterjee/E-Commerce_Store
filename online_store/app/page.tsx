"use client"
import Products from '@/pages/Products';
import CategoryBar from '../component/Header/CategoryBar';
import Main from '../component/Main/Main';
import '../pages/_app'
import './globals.css'

function page() {
  return (
    <div className="App">
      <Products/>
    </div>
  );
}

export default page;