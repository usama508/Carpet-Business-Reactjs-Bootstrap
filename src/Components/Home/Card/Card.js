import React from 'react'
import card from './card.png'
import './Card.css'
function Card() {
    return (
        <div>


            {/* <div className=" card-main">
                <div className=" flex-shrink-0 card-img">
                    <img src={card} alt="..." className='' />
                </div>
                <div className=" flex-grow-1 ms-3 card">
                    <h1 className='card-h1'>Why Tapijt & <br/>
                   <span className='card-span'>Kelim?</span> </h1>
                    <p >Every year we travel to the East to search historic
                        villages for the most unique carpets. We only
                        consider our mission a success when we have
                        found what we were looking for! As a result,
                        we own the most special, exclusive
                        and valuable carpets.</p>
                    <div className='card-button'>
                        <button type="button" className="card-buttonss">Buy</button>
                    </div>


                </div>
            </div> */}


            <div className='cards-main'>
                <div className='cards'>
                    <div className=' cards-img'>
                        <img src={card} alt="" />
                    </div>
                    <div className='cards-text'>
                        <h1>Why Tapijt & <br />
                            <span >Kelim?</span> </h1>
                        <p >Every year we travel to the East to search historic
                            villages for the most unique carpets. We only
                            consider our mission a success when we have
                            found what we were looking for! As a result,
                            we own the most special, exclusive
                            and valuable carpets.</p>
                        <div className='card-button'>
                            <button type="button" className="card-buttonss">Buy</button>
                        </div>

                    </div>
                </div>







            </div>
        </div>



    )
}

export default Card