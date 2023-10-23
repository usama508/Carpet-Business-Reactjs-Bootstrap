import React from 'react'
import './Breadcrumb.css'
import Captcha from './Captcha'

function Breadcrumb() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='lg:col-6'>
              {/* <Captcha/> */}
            {/* <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#" className='bread-a'></a></li>
    <li className="breadcrumb-item"><a href="#" className='bread-a'></a></li>
    <li className="breadcrumb-item active" aria-current="page"><a href=""></a></li>
  </ol>
</nav> */}
<ul className="breadcrumb">
  <li><a href="#" className='bread-a'>PRODUCTS</a></li>
  <li><a href="#" className='bread-a'>PERSIAN RUGS</a></li>
 
  <li><a href="#">SAROUGH</a></li>
 
</ul>

            </div>

        </div>
        
    </div>
  )
}

export default Breadcrumb