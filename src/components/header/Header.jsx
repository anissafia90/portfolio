import React, {useState } from 'react'
import './header.css'
export default function Header() {
  const [showModal,setshowModal]=useState(false);
  return (
    <header className="flex">
      <button className="icon-menu menu flex" onClick={() => {
          setshowModal(true);
        }} />
      <div />
      <div />
      <nav>
        <ul className="flex">

          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <div />
      </nav>
      
   {showModal &&   <div className='fixed'>
      
      <ul className='modal'>
       <li><button className="icon-cross menu" onClick={() => {
        setshowModal(false);
      }}/> </li>
       <li><a href="">About</a></li>
       <li><a href="">Articles</a></li>
       <li><a href="">Projects</a></li>
       <li><a href="">Speaking</a></li>
       <li><a href="">Contact</a></li>
      </ul>
   
  </div> }
     
    </header>
  )
}
