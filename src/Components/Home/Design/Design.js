import React from 'react'
import './Design.css'
import image from './image.png'
import { TbMathGreater } from 'react-icons/tb'
function Design() {
    return (

        <div className='design-main'>
            <div className='design-head'>
                <h1>FREE personal advice from
                    interior designer <span className='design-span'>Rosa!</span></h1>

            </div>
            <img src={image} alt="" className='design-image' />
            <p className='design-p'>Why choose Rosa’s advice?</p>
            <a className='design-learn' href="">Learn more <TbMathGreater /></a>
        </div>
    )
}

export default Design