import React from 'react'
import './Box.css'
import b1 from './b1.png'
import b2 from './b2.png'
import b3 from './b3.png'
import b4 from './b4.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
function Box() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-9 col-sm-12 mx-auto'>

                <div className='box-head '>
                    <h1>What’s in the <span>Box</span></h1>

                </div>
                <div className='box-main  pt-3'>
                    <div className='box '>
                        <img src={b1} alt="" />
                        <p>Carpet</p>

                    </div>

                    <div className='box'>
                        <img src={b2} alt="" />
                        <p>Certificate</p>

                    </div>


                    <div className='box'>
                        <img src={b3} alt="" />
                        <p>Passport</p>

                    </div>


                    <div className='box'>
                        <img src={b4} alt="" />
                        <p>Maintenance Book</p>

                    </div>

                </div>

                <div className= 'col-12 box-car'>

           
{/* <div className='heart-main'>
 <div className='heart-icon'>
  <FiHeart className='heart'/>   
</div>   
</div> */}


<Swiper pagination={true} modules={[Pagination]} className="mySwiper swipers">





<SwiperSlide className='sliderss'><img src={b1} alt=""  /><p>Carpet</p></SwiperSlide>
<SwiperSlide className='sliderss'><img src={b2} alt="" /><p>Certificate</p></SwiperSlide>
<SwiperSlide className='sliderss'><img src={b3} alt="" /><p>Passport</p></SwiperSlide>
<SwiperSlide className='sliderss'><img src={b4} alt="" /><p>Maintenance Book</p></SwiperSlide>





</Swiper>
{/* <div>
<h1 className='warning-text'> <IoWarning className='warning-icon '/> Only 1 in Stock</h1>
<p className='note-text'><span className='notes-text'>Note:</span> The colors of the carpet look different depending on the angle from where you view the carpet.</p>

</div> */}

</div>

            </div>
             
        </div>

    </div>
  )
}

export default Box