import React from 'react'
import './Map.css'

function Map() {
  return (
    <div className='map-main'>
        <div className='map-head'>
            <h1>Find A Location <span>Near You</span></h1>

        </div>
        <div className='iframe-div' >
        <iframe className='map-iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d108871.72463808421!2d74.37025279999999!3d31.490047999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1693556486854!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
    </div>
  )
}

export default Map