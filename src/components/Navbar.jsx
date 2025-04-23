import React, { useRef, useState } from 'react'
import './nav.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import underline from "../../src/assets/underline.png"
import { FaHamburger } from 'react-icons/fa'
import { AiOutlineClose } from "react-icons/ai"

function Navbar() {

  const[menu,setMenu]=useState("home")
  const menuref=useRef()

  const openMenu=()=>{
     menuref.current.style.right='0'
  }

  const closeMenu=()=>{
    menuref.current.style.right='-350px'
 }
  return (
    <div className='navbar'>
      
       <FaHamburger onClick={openMenu} className='nav-mob-open'/>
      <ul ref={menuref} className='nav-menu'  >
        <AiOutlineClose  onClick={closeMenu} className='nav-mob-close'/>
        <li><AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==='home'?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#about'><p onClick={()=>setMenu("About")}>About ME</p></AnchorLink>{menu==='AboutMe'?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className="anchor-link"offset={50} href="#skill"><p onClick={()=>setMenu("Skills")}>Skills</p></AnchorLink>{menu==='Skills'?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#Project"><p onClick={()=>setMenu("Experience")}>Experience</p></AnchorLink>{menu==='Experience'?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#Achievment"><p onClick={()=>setMenu("Acheivements")}>Achievement</p></AnchorLink>{menu==='Acheivements'?<img src={underline} alt=''/>:<></>}</li>
      </ul>
  <div className='nav-con'><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>    
    </div>
  )
}

export default Navbar