import { faFacebookF, faInstagram, faLinkedin, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons/faShareNodes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
    <div style={{overflowX:'hidden'}}>
        <div className="row">
            <div className="col-md-3">
                <h5 className='ms-4 ps-2'>Build & Find</h5>
                <ul style={{listStyle:'none'}} >
                    <li>Build your Porsche</li>
                    <li>Compare Models</li>
                    <li>Search Pre-Owned</li>
                    <li>Find your Porsche Centre</li>
                    <li>Download the model range catalogue</li>
                </ul>
            </div>
            <div className="col-md-3">
                <h5 className='ms-4 ps-2'>Online Services</h5>
                <ul style={{listStyle:'none'}}>
                    <li>Sign up for News</li>
                </ul>
            </div>
            <div className="col-md-3">
                <h5 className='ms-4 ps-2'>Behind the Scenes</h5>
                <ul style={{listStyle:'none'}}>
                    <li>Passion Motorsports</li>
                    <li>Porsche Experience</li>
                    <li>Porsche Classic</li>
                    <li>Visit Porsche Museum</li>
                </ul>
            </div>
            <div className="col-md-3">
                <h5 className='ms-4 ps-2'>Porsche Company</h5>
                <ul style={{listStyle:'none'}} >
                    <li>Latest News</li>
                    <li>At a Glance</li>
                    <li>Jobs & Careers</li>
                    <li>Contact & Information</li>
                    <li>Christophorus - The Porsche Magazine</li>
                </ul>
    
                <button className='w-75 text-light ms-4 bg-dark'><FontAwesomeIcon className='me-2' size='xl' icon={faShareNodes} style={{color: "#ffffff",}} /> Share Page</button>
    
               <div className='ms-3 ms-md-0'>
                    <h5 className='text-secondary mt-5'>Connect with Porsche</h5>
                    <div className='d-flex mb-4'>
                        <button className='bg-dark px-3'><FontAwesomeIcon icon={faFacebookF} size='xl' style={{color: "#ffffff",}} /></button>
                        <button className='ms-2 bg-dark'><FontAwesomeIcon icon={faPinterest} size='xl' style={{color: "#ffffff",}} /></button>
                        <button className='ms-2 bg-dark'><FontAwesomeIcon icon={faYoutube} size='xl' style={{color: "#ffffff",}} /></button>
                        <button className='ms-2 bg-dark'><FontAwesomeIcon icon={faInstagram} size='xl' style={{color: "#ffffff",}} /></button>
                        <button className='ms-2 bg-dark'><FontAwesomeIcon icon={faLinkedin} size='xl' style={{color: "#ffffff",}} /></button>
                    </div>
               </div>
            </div>
        </div>

        <div className='footer bg-dark'>
            <h2 className='text-light pt-4'>Change country/region:</h2>
            <div className='row'>
                
            </div>
            <hr className='text-light' />
            <p className='text-light pb-4' style={{fontSize:'12px'}}>© 2024 Porsche India - SKODA AUTO Volkswagen India Private Limited - India. Legal notice. Privacy Policy. Corporate Governance. Open Source Software Notice. Whistleblower System. Business and Human Rights. </p>
        </div>
    </div>
    </>
  )
}

export default Footer