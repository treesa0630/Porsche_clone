import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';

function Header() {

    const [show, setShow]= useState(false)

    const change = ()=>{
        setShow(!show)
    }
    return (
        <>
            <div className='head '>
                <h6 class="py-4 ps-5 text-light">You are currently seeing contents for:India / English —— Change</h6>     
            </div>
            <button className='bg-white ms-md-5 ps-5 rounded ' onClick={change} ><FontAwesomeIcon size='xl' icon={faBars} style={{ color: "black"}}  /><span className='ms-4'> Menu</span></button>

            

            {show && <Nav defaultActiveKey="/home" className="flex-column ms-md-5 ps-4">
                <Nav.Link href="/home">Models</Nav.Link>
                <Nav.Link eventKey="link-1">Vehicle Purchase</Nav.Link>
                <Nav.Link eventKey="link-2">Services</Nav.Link>
                <Nav.Link eventKey="link-2">Experience</Nav.Link>
                <Nav.Link eventKey="link-2">Find a Dealer</Nav.Link>
            </Nav>}

            <h2 class="heading text-center">PORSCHE</h2>
        </>
    )
}

export default Header