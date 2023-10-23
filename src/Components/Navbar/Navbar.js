import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { BsHandbag } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import logos  from './logos.png'
function Navbar() {
  return (
    <div>
         <header>
                <nav className=" px-3 py-2 navbar navbar-expand-md text-white home">
                    
                    
                    <div className="container buttons">
                        <NavLink to='/' className="navbar-brand">
                        <img src={logos} alt="" className='logo-img'/>
                        </NavLink>
                    
                    <div className='toggle-button'>
                        <ul className='nav col-12 col-lg-auto     my-md-0 text-small" id="collapsibleNavbar"'>
                        
                        <li>
                            

                            <a href="#" className="nav-link text-white icon-li">

                                            <CiSearch />

                                        </a>
                           
                                        
                                    </li>
                                    <span className='span-li'>
                                    <li>
                                        <a href="#" className="nav-link text-white icon-li">

                                            <BsHandbag />
                                        </a>
                                    </li></span>
                                    <span className='span-li2'>
                                    <li>
                                        <a href="#" className="nav-link text-white icon-li ">

                                            <AiOutlineHeart />
                                        </a>
                                    </li></span>
                                    <span className='span-li'>
                                        <button className="navbar-toggler button-hide  icon-li" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon "></span>
                        </button> 
                                    </span>
                                    <li>
                                        
                                    </li>
                        </ul>
                       
                    </div>
                        
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use ></use></svg>
                            </a>
                            <div className='home-ul'>
                                <ul className="nav col-12 col-lg-auto collapse navbar-collapse   justify-content-center my-md-0 text-small" id="collapsibleNavbar">
                                    <li >
                                        <a href="#" className="nav-link  home-li">

                                            About Us
                                        </a>
                                    </li>
                                    <li >

                                        <NavLink to='/product'  activeclassname="active" className="nav-link  home-li">Product</NavLink>
                                       
                                    </li>
                                    <li>
                                        
                                        <a href="#" className="nav-link  home-li">

                                            Information
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link  home-li">

                                            Showroom
                                        </a>
                                    </li>
                                   
                                        <li className='span-li2'>
                                        <a href="#" className="nav-link text-white icon-li">

                                            <CiSearch />
                                        </a>
                                    </li>
                                    <span className='span-li span-li2'>
                                    <li>
                                        <a href="#" className="nav-link text-white icon-li">

                                            <BsHandbag />
                                        </a>
                                    </li></span>
                                    <span className='span-li2'>
                                    <li>
                                        <a href="#" className="nav-link text-white icon-li ">

                                            <AiOutlineHeart />
                                        </a>
                                    </li></span>

                                    
                                    
                                </ul>
                            </div>


                        </div>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
  </button> */}
                    </div>
                </nav>

            </header>

          
    </div>
  )
}

export default Navbar