/* eslint-disable react/style-prop-object */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FiHeart} from 'react-icons/fi'
import ca1 from './ca1.png'
import c2 from './c2.png'
import c3 from './c3.png'
import timg from './t1.png'
import {IoWarning} from 'react-icons/io5'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (

    <>
    <div className='container'>
      <div className='row'>
    
            <div className= 'col-lg-6 col-md-6 col-sm-12'>

           
                <div className='heart-main'>
                 <div className='heart-icon'>
                  <FiHeart className='heart'/>   
                </div>   
                </div>
                
            
<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
    
   
         
       
  
         <SwiperSlide><img src={ca1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={c2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={c3} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
         
       
 
        
  
    
      </Swiper>
       <div>
        <h1 className='warning-text'> <IoWarning className='warning-icon '/> Only 1 in Stock</h1>
        <p className='note-text'><span className='notes-text'>Note:</span> The colors of the carpet look different depending on the angle from where you view the carpet.</p>
             
            </div>

            </div>
           
     

    

     
<div className='col-lg-6 col-md-6 col-sm-12 '>
    <h1 className='lists-head'>Ziegler 250 x 340 cm</h1>
                
  <div className="lists  ">
    
    
      <h5 className='list-head'>SPECIFICATIONS</h5>
      <div className="vl"></div>
      <hr />
      <div className='list'>
        <span className='list-span1'>Dimensions (W x L)</span>
        <span className='list-span2'>250 X 340 cm</span>
       
      </div>
      <hr />
      <div className='list'>
        <span  className='list-span1'>Design style</span>
        <span className='list-span2'>Continuous floral pattern</span>
      </div>
      <hr />
        
       
    
     <div className='list'>
      <span  className='list-span1'>Pool</span>
        <span className='list-span2'>wool</span>
     </div>
        
      <hr />
    
     <div className='list'>
      <span  className='list-span1'>Warp</span>
        <span className='list-span2'>cotton</span>
     </div>
       <hr /> 
      
     <div className='list'>
      <span  className='list-span1'>Production method</span>
        <span className='list-span2'>hand knotted</span>
     </div>
        <hr />
      <div className='list'>
        <span  className='list-span1'>Knot density (knots/m²)</span>
        <span className='list-span2'>± 250 000</span>
      </div>
     
        <hr />
      
      <div className='list'>
        <span  className='list-span1'>Thickness (mm)</span>
        <span className='list-span2'>12</span>
      </div>
        
      <hr />
      <div className='list'>
        <span  className='list-span1'>Country of origin</span>
        <span className='list-span2'>Persia/Iran</span> 
      </div>
       <hr />
      
     <div className='list'>
      <span  className='list-span1'>Age & Condition</span>
        <span className='list-span2'>New (unused)</span>
     </div>
        
      <hr />
    <div className='list'>
       <span  className='list-span1'>Carpet ID</span>
        <span className='list-span2'>7926</span>
    </div>
       
      <hr />
     <div className='list'>
       <span className='last-td list-span1'>Color composition</span>
       <img src={timg} alt="" />
     </div>
       
      
    
  </div>

</div>

</div> 
        </div>

      

    
        


   
      
    </>
  );
}