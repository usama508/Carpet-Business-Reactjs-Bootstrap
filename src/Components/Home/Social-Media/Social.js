/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from './logo-img.png'
import { AiFillYoutube } from 'react-icons/ai'
import { SlSocialPintarest } from 'react-icons/sl'
import { BiLogoFacebook } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import { SlSocialTwitter } from 'react-icons/sl'
import { BiLogoGmail } from 'react-icons/bi'
import { FcCollapse } from 'react-icons/fc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'

import './Social.css'

function Social() {
    return (
        <div>
            {/* <header>
                <nav className=" px-3 py-2 navbar navbar-expand-md text-white social">


                    <div className="container buttons">
                        <a className="navbar-brand" href="#"><img src={logo} alt="" className='logo-img' /></a>


                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use ></use></svg>
                            </a>
                            <div className='home-ul'>
                                <ul className="nav col-12 col-lg-auto collapse navbar-collapse   justify-content-center my-md-0 text-small" id="collapsibleNavbar">
                                    <li >
                                        <a href="#" className="nav-link  social-li">

                                            Follow us on
                                        </a>
                                    </li>



                                    <li className='span-li2'>
                                        <a href="#" className="nav-link text-white social-icon-li">
                                            <AiFillYoutube />

                                        </a>
                                    </li>
                                    <span className='span-li span-li2'>
                                        <li>
                                            <a href="#" className="nav-link text-white social-icon-li">
                                                <SlSocialPintarest />

                                            </a>
                                        </li></span>
                                    <span className='span-li2'>
                                        <li>
                                            <a href="#" className="nav-link text-white social-icon-li">

                                                <BiLogoFacebook />
                                            </a>
                                        </li></span>

                                    <span className='span-li2'>
                                        <li>
                                            <a href="#" className="nav-link text-white social-icon-li">

                                                <BsInstagram />
                                            </a>
                                        </li></span>

                                    <span className='span-li2'>
                                        <li>
                                            <a href="#" className="nav-link text-white social-icon-li ">
                                                <SlSocialTwitter />

                                            </a>
                                        </li></span>

                                    <span className='span-li2'>
                                        <li>
                                            <a href="#" className="nav-link text-white social-icon-li ">

                                                <SlSocialGoogle />
                                            </a>
                                        </li></span>

                                    <span className='span-li2 '>
                                        <li>
                                            <a href="#" className="nav-link text-white icon-li-colapse ">
                                                <FcCollapse className='li-color' />

                                            </a>
                                        </li></span>



                                </ul>

                            </div>


                            <hr />


                        </div>
                       
                    </div>
                </nav>

            </header> */}


            <div className='social'>
                <div className="container ">
                    <div className="row">
                        <div className="col-12">

                            <div className='social-main'>
                                <img src={logo} alt="" className='logo-img' />

                                <div className='social-media'>
                                    <p>
                                        <a href="#" className="nav-link  social-li">

                                            Follow us on
                                        </a>
                                    </p>

                                    <p className='span-p'>
                                        <a href="#" className="nav-link text-white social-icon-li">
                                            <AiFillYoutube />

                                        </a>
                                    </p>

                                    <p className='span-p'>
                                        <a href="#" className="nav-link text-white social-icon-li">
                                            <SlSocialPintarest />

                                        </a>
                                    </p>

                                    <p className='span-p'>
                                        <a href="#" className="nav-link text-white social-icon-li">

                                            <BiLogoFacebook />
                                        </a>
                                    </p>

                                    <p className='span-p'>
                                        <a href="#" className="nav-link text-white social-icon-li">

                                            <BsInstagram />
                                        </a>
                                    </p>

                                    <p className='span-p'>
                                        <a href="#" className="nav-link text-white social-icon-li ">
                                            <SlSocialTwitter />

                                        </a>
                                    </p>

                                    <p className='span-p'>
                                        <a href="#" className="nav-link text-white social-icon-li ">

                                            <BiLogoGmail />
                                        </a>
                                    </p>

                                </div>

                                <div className='coolapse-icon span-p' >
                                    <p>
                                        <a href="#" className="nav-link text-white icon-li-colapse ">
                                        <FontAwesomeIcon icon={faChevronUp} className='icons-li' />

                                        </a>
                                    </p>

                                </div>

                            </div>


                            <div className='social-main2'>
                                <div className='colapses'>
                                    <img src={logo} alt="" className='logo-img' />
                                    <div className='coolapse-icon span-p' >
                                        <p>
                                            <a href="#" className="nav-link text-white icon-li-colapse ">
                                            <i className="fa-solid fa-chevron-up"></i>

                                            </a>
                                        </p>

                                    </div>
                                </div>


                                <div className='social-media2'>
                                    <p>
                                        <a href="#" className="nav-link  social-li">

                                            Follow us on
                                        </a>
                                    </p>
                                    <div className='social-p2'>
                                        <p className='span-p'>
                                            <a href="#" className="nav-link text-white social-icon-li">
                                                <AiFillYoutube />

                                            </a>
                                        </p>

                                        <p className='span-p'>
                                            <a href="#" className="nav-link text-white social-icon-li">
                                                <SlSocialPintarest />

                                            </a>
                                        </p>

                                        <p className='span-p'>
                                            <a href="#" className="nav-link text-white social-icon-li">

                                                <BiLogoFacebook />
                                            </a>
                                        </p>

                                        <p className='span-p'>
                                            <a href="#" className="nav-link text-white social-icon-li">

                                                <BsInstagram />
                                            </a>
                                        </p>

                                        <p className='span-p'>
                                            <a href="#" className="nav-link text-white social-icon-li ">
                                                <SlSocialTwitter />

                                            </a>
                                        </p>

                                        <p className='span-p'>
                                            <a href="#" className="nav-link text-white social-icon-li ">

                                                <BiLogoGmail />
                                            </a>
                                        </p>
                                    </div>



                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Social