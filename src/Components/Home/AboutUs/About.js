import React from 'react'
import './About.css'
import banner from './banner.png'
function About() {
  return (
    <>
    <div>
        <div className="container col-xxl-12 px-4 py-5">
    <div className="row " >
      
      <div className="col-lg-6 col-md-12 ">
        <h1 className="display-5  about-head">About <span className='about-span'>Us</span></h1>
        <p className="lead about-p">Meet Tamara from Moldavia and Pooya from Iran 
(former Persia): partners in Persian carpets and in life. They have found each other in their love for 
oriental carpets and for each other.</p>
 
 <p className='about-p2'>Pooya's mother was a carpet knotter and so Pooya 
grew up among the carpets. For years we have 
been making people happy with beautiful, 
sustainable works of art that last a lifetime.</p>
{/* <div className='col-12'>
<img src={banner} alt="" />
</div> */}


        
      </div>
      <div className=" col-lg-6 col-md-12 iframe">
         {/* <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>  */}
         <iframe className='iframe-w'
           src="https://www.youtube.com/embed/-mJFZp84TIY?si=xGPh3U0mheM1OWZ6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
      </div>
    </div>
  </div>
    </div>
    </>
    
  )
}

export default About