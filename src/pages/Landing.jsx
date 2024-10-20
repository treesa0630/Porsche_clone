import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../images/carousel1.jpg';
import carousel2 from '../images/carousel2.jpg';
import carousel3 from '../images/carousel3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Landing() {

    return (
        <>
         <div style={{padding:'0px', margin:'0px'}}>
                <Carousel >
                    <Carousel.Item>
                        <img src={carousel1} style={{ height: '85vh' }} />
                        <Carousel.Caption>
                            <h3 className='fs-1' style={{ color: 'white' }}> <FontAwesomeIcon icon={faAngleRight} /> Porsche India.</h3>
                            <p>Know of our Porsche Centre network in India.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={carousel2} style={{ height: '85vh' }} className='w-100' />
                        <Carousel.Caption>
                            <h3 className='fs-1' style={{ color: 'white' }}><FontAwesomeIcon icon={faAngleRight} /> Change your spark, not your fire.</h3>
                            <p>Keep your essence. The new all-electric Macan Turbo.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={carousel3} style={{ height: '85vh' }} />
                        <Carousel.Caption>
                            <h3 className='fs-1' style={{ color: 'white' }}><FontAwesomeIcon icon={faAngleRight} /> The one and always.</h3>
                            <p>
                            The new 911.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
    
                <h1 className='models ms-5 ps-5 my-4'>Models</h1>
    
                <div class="car car1">
                    <div className="ms-5 pt-4">
                        <h1 className='text-light'>911</h1>
                        <h5 className='text-light'>from INR 19,899,000</h5>
                    </div>
                    <div className="buttons">
                        <button className="button1"> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Build Your
                            Own</button>
                        <button className="button2 ms-3"> All Models</button>
                    </div>
                </div>
    
                <div className="car car2">
                <div className="ms-5 pt-4">
                    <h1 className='text-light'>Taycan</h1>
                    <h5 className='text-light'>from INR 18,942,000*</h5>
                </div>
                <div className="buttons">
                    <button className="button1"><i class="icon fa-solid fa-arrow-up-right-from-square"></i> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Build Your
                        Own</button>
                    <button className="button2 ms-3"><i class="fa-solid fa-angle-right"></i> All Models</button>
                </div>
            </div>
    
            <div className="car car3">
                <div className="ms-5 pt-4">
                    <h1 className='text-light'>Panamera</h1>
                    <h5 className='text-light'>from INR 16,962,000</h5>
                </div>
                <div className="buttons">
                    <button className="button1"><i class="icon fa-solid fa-arrow-up-right-from-square"></i><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Build Your
                        Own</button>
                    <button className="button2 ms-3"> <i class="fa-solid fa-angle-right"></i> All Models</button>
                </div>
            </div>
    
            <div className="car car4">
                <div className="ms-5 pt-4">
                    <h1 className='text-light'>Macan</h1>
                    <h5 className='text-light'>from INR 9,605,000</h5>
                </div>
                <div className="buttons">
                    <button className="button1"><i class="icon fa-solid fa-arrow-up-right-from-square"></i><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Build Your
                        Own</button>
                    <button className="button2 ms-3"><i class="fa-solid fa-angle-right"></i> All Models</button>
                </div>
            </div>
    
            <div className="car car5">
                <div class="ms-5 pt-4">
                    <h1 className='text-light'>Cayenne</h1>
                    <h5 className='text-light'>from INR 14,248,000</h5>
                </div>
                <div className="buttons">
                    <button className="button1"><i class="icon fa-solid fa-arrow-up-right-from-square"></i><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Build Your
                        Own</button>
                    <button className="button2 ms-3"><i class="fa-solid fa-angle-right"></i> All Models</button>
                </div>
            </div>
    
            <p className="note ms-md-5 ps-md-5 my-2 ms-3">* European specifications shown below. Market specific values to be
            confirmed upon homologation.</p>
    
    
            <h2 className="ms-md-5 ps-md-5 ms-3 ps-3 my-5 topic2">Find a Porsche near you</h2>
    
            <div className="scrolling-wrapper">
                <div className="card">
                    <img src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-718/normal/db4be0ec-f8f4-11eb-80db-005056bbdc38;sO;twebp/porsche-normal.webp" alt="" /> <br />
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4"><button className="button3 text-light"><i class="fa-solid fa-angle-right"></i><FontAwesomeIcon icon={faAngleRight} /> Find 718 Models</button></div>
                        <div className="col-4"></div>
                    </div>
                </div>
                <div className="card">
                <img src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-911/normal/e7c2070d-f8f4-11eb-80db-005056bbdc38;sO;twebp/porsche-normal.webp" alt="" /> <br />
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4"><button className="button3 text-light"><i class="fa-solid fa-angle-right"></i><FontAwesomeIcon icon={faAngleRight} /> Find 911 Models</button></div>
                        <div className="col-4"></div>
                    </div>
                </div>
                <div className="card">
                <img src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-taycan/normal/253ef544-f8f5-11eb-80db-005056bbdc38;sO;twebp/porsche-normal.webp" alt="" /> <br />
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4"><button className="button3 text-light"> <i class="fa-solid fa-angle-right"></i><FontAwesomeIcon icon={faAngleRight} /> Find Taycan Models</button></div>
                        <div className="col-4"></div>
                    </div>
                </div>
                <div className="card">
                <img src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-panamera/normal/19092f4b-f8f5-11eb-80db-005056bbdc38;sO;twebp/porsche-normal.webp" alt="" /> <br />
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4"><button className="button3 text-light"><i class="fa-solid fa-angle-right"></i><FontAwesomeIcon icon={faAngleRight} /> Find Panamera Models</button></div>
                        <div className="col-4"></div>
                    </div>
                </div>
                <div className="card">
                <img src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-macan/normal/0355d78f-f8f5-11eb-80db-005056bbdc38;sO;twebp/porsche-normal.webp" alt="" /> <br />
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4"><button className="button3 text-light"><i class="fa-solid fa-angle-right"></i><FontAwesomeIcon icon={faAngleRight} /> Find Macan Models</button></div>
                        <div className="col-4"></div>
                    </div>
                </div>
                <div className="card">
                <img src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-cayenne-e3/normal/ef4d48a8-f8f4-11eb-80db-005056bbdc38;sO;twebp/porsche-normal.webp" alt="" /> <br />
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4"><button className="button3 text-light"><i class="fa-solid fa-angle-right"></i><FontAwesomeIcon icon={faAngleRight} /> Find Cayenne Models</button></div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>

            <h2 className="shopping ms-md-5 ps-md-5 ms-3 ps-3 my-5 topic2">Shopping Tools</h2>
         </div>
        </>
    )
}

export default Landing