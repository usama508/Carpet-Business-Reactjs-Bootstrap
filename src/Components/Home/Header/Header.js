import React from 'react'

import './Header.css'
function Header() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12  '>
                <div className='header-main' >
                    {/* <img src={image} alt="" className='header-img'/> */}
                    
                    <h1 className='header-h1'>Live <span className='header-span1'>Luxury</span>, Love <span className='header-span2'>Planet</span>. </h1>

                </div>
                <div className='header-p-main'>
<div >
                  <p>A FAMILY BUSINESS</p>
                </div>
                <div >
                  <p>SINCE 1928</p>
                </div>
                </div>
                

            </div>

        </div>
        
    </div>
  )
}

export default Header