import React from 'react'
import './Faqs.css'

function Faqs() {
    return (
        <div className='faqs'>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <div className='faqs-head'>
                            <h1>FAQ<span>s</span></h1>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-10 col-md-12 col-sm-12 mx-auto'>
                        <div className="accordion accordion-flush accordion-main" id="accordionFlushExample">
                            <div className="faqs-accordian faqs-accordian">
                                <h2 className="accordion-header " id="flush-headingOne">
                                    <button className="accordion-button accordian-btn collapsed accordian-btn-head " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">

                                        What does the name CarpetsKelim mean?


                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                                </div>
                            </div>
                            <div className="faqs-accordian faqs-accordian">
                                <h2 className="accordion-header " id="flush-headingTwo">
                                    <button className="accordion-button accordian-btn collapsed accordian-btn-head " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">


                                        Is it possible to pick up an order?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                                </div>
                            </div>
                            <div className="faqs-accordian faqs-accordian">
                                <h2 className="accordion-header " id="flush-headingThree">
                                    <button className="accordion-button accordian-btn collapsed accordian-btn-head " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">

                                        What payment options are offered?

                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                                </div>
                            </div>

                            <div className="faqs-accordian faqs-accordian">
                                <h2 className="accordion-header " id="flush-headingFour">
                                    <button className="accordion-button accordian-btn collapsed accordian-btn-head " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Can i return the Products?

                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                                </div>
                            </div>




                            <div className="faqs-accordian faqs-accordian">
                                <h2 className="accordion-header " id="flush-headingFive">
                                    <button className="accordion-button accordian-btn collapsed accordian-btn-head " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        The delivery guy is on his way but I'm not home, what should i do now?

                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                                </div>
                            </div>

                            <div className="faqs-accordian faqs-accordian">
                                <h2 className="accordion-header " id="flush-headingSix">
                                    <button className="accordion-button accordian-btn collapsed accordian-btn-head " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">

                                        To book
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                                </div>
                            </div>
                            <div className='faq-btn-main'>
                                <button type='button' className='faq-btn'>See all</button>
                            </div>







                        </div>
                    </div>

                </div>


            </div>
            <hr />
        </div>

    )
}

export default Faqs