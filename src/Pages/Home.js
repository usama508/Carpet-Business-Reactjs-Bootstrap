import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { BsHandbag } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Header from '../Components/Home/Header/Header';

import Heros from '../Components/Hero/Heros';
import About from '../Components/Home/AboutUs/About';
import Banner from '../Components/Home/Banner/Banner';
import Card from '../Components/Home/Card/Card';
import Collection from '../Components/Home/Collection/Collection';

import Map from '../Components/Home/Map/Map';
import Faqs from '../Components/Home/Faqs/Faqs';
import Social from '../Components/Home/Social-Media/Social';
import Form from '../Components/Home/Form/Form';

import Footer from '../Components/Home/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'


function HomePage() {

    return (
        <div>
           <Navbar/>
            <Header/>
          
    <Heros />

   
    
 <About/>
 <Banner/>
 <Card/>

 <Collection/>

 {/* <Design/> */}
 <Map/>
 <Faqs/>
 <Social/>
 <Form/>

 <Footer/> 
        </div>
    )
}

export default HomePage