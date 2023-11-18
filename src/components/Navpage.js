import React, { useRef, useState } from 'react'
import './Navpage.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { FaBars } from "react-icons/fa"
// import { BsThreeDotsVertical } from "react-icons/bs"
import logoimg from '../assets/img/Logo.png'
import { LiaSearchSolid } from "react-icons/lia";

import facebook from '../assets/img/Facebook_Logo_2023 (1).png'
import instagram from '../assets/img/instagram-icon-logo-free-png.webp'
import youtube from '../assets/img/youtube2.png'
import threads from '../assets/img/threads-icon.png'
import linkedin from '../assets/img/png-transparent-linkedin-logo-linkedin-logo-computer-icons-business-symbol-linkedin-icon-miscellaneous-blue-angle-thumbnail.png'
import attherate from '../assets/img/flicker-icon.png'
import twitter from '../assets/img/free-twitter-logo-icon-2429-thumb.png'
import wifi from '../assets/img/rss-icon.png'
import gmail from '../assets/img/gmail2.png'
import usaGov from '../assets/img/USAGov@2x.png'
import openGov from '../assets/img/OpenGov@2x.png'
import MiddlePage from './MiddlePage'


const Navpage = () => {
    const [show, setShow] = useState(false);
    const [toogle, setToogle] = useState(false);
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <>
            <Navbar className="container-fluid p-0 navbar-harcoderd-class">
                {/* <Container fluid> */}
                {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll"> */}



                <Nav
                    className="text-manualy "
                // style={{ maxHeight: '100px' }}
                // navbarScroll
                >
                    {/* <div className='responsibe-back-container'>
                    <div className='img-container-respo'> <img src={logoimg} /></div>
                    <p>Board of Governors of the Federal Reserve System</p>

                </div> */}
                    {/* <img src={logoimg} style={{ height: 30, width: 30, marginTop: 7 }} className='responsive-image-mob' />
                    <p className='responsive-text-mob'>Board of Governors of the Federal Reserve System</p> */}
                    <Nav.Link className='text-white text-data-manualy ' href="#action1">Stay Connected</Nav.Link>
                    <Nav.Link className='text-white text-data-manualy ' href="#action2">Current Postings</Nav.Link>
                    <Nav.Link className='text-white text-data-manualy' href="#action2">Calender</Nav.Link>
                    <Nav.Link className='text-white text-data-manualy' href="#action2">Publications</Nav.Link>
                    <Nav.Link className='text-white text-data-manualy' href="#action2">Site Map</Nav.Link>
                    <Nav.Link className='text-white text-data-manualy' href="#action2">A-Z index</Nav.Link>
                    <Nav.Link className='text-white text-data-manualy' href="#action2">Careers</Nav.Link>
                    <Nav.Link className='text-white text-data-manualy' href="#action2">FAQs</Nav.Link>
                    <Nav.Link className='text-white text-data-manualy' href="#action2">Videos</Nav.Link>
                    <Nav.Link className='text-white text-data-manualy' href="#action2">Contacts</Nav.Link>
                    <Form className="d-flex">
                        <input
                            type="search"
                            placeholder="Search"
                            className="me-2 mt-1 search-manualy rounded-0"
                            aria-label="Search"
                        />
                        <Button className='bg-white mt-1 rounded-0 button-hardcoder ' variant="outline-black"> <BsSearch className='font-serch-manualy' /> </Button>
                    </Form>
                    <Nav.Link className='text-white text-advance ' href="#action2">Advanced</Nav.Link>
                    <button className='bar-icon-manualy' onClick={() => { setToogle(!toogle) }} > <BsThreeDotsVertical /> </button>
                </Nav>

                {/* </Navbar.Collapse> */}
                {/* </Container> */}

                {/* {
                    toogle ? <div className='togglemain-container'>

                    </div> : null
                } */}

            </Navbar>
            {/* navbar toggle start */}

            {
                toogle ?
                    <div className='toggle-container'>

                        <Nav.Link className='text-black' href="#action2">Current Postings</Nav.Link>
                        <Nav.Link className='text-black' href="#action2">Calender</Nav.Link>
                        <Nav.Link className='text-black' href="#action2">Publications</Nav.Link>
                        <Nav.Link className='text-black' href="#action2">Site Map</Nav.Link>
                        <Nav.Link className='text-black' href="#action2">A-Z index</Nav.Link>
                        <Nav.Link className='text-black' href="#action2">Careers</Nav.Link>
                        <Nav.Link className='text-black' href="#action2">FAQs</Nav.Link>
                        <Nav.Link className='text-black' href="#action2">Videos</Nav.Link>
                        <Nav.Link className='text-black' href="#action2">Contacts</Nav.Link>
                        <div className='footer-social-icon'>

                            <a href='' className=''><img src={facebook} className='icons' /></a>
                            <a href='' className=''><img src={instagram} className='icons' /></a>
                            <a href='' className=''><img src={youtube} className='icons' /></a>
                            <a href='' className='threads-icon'><img src={attherate} className='icons' /></a>

                            <a href='' className=''><img src={linkedin} className='icons' /></a>
                            <a href='' className=''><img src={threads} className='icons' /></a>
                            <a href='' className='twitter-icon'><img src={twitter} className='icons' /></a>
                            <a href='' className=''><img src={wifi} className='icons' /></a>
                            <a href='' className=''><img src={gmail} className='icons' /></a>

                        </div>

                    </div>
                    : null
            }


            {/* navbar toggle end */}

            <div className='responsibe-back-container'>
                <div className='img-container-respo'> <img src={logoimg} /></div>
                <p>Board of Governors of the Federal Reserve System</p>
                <button className='bar-icon-respo-mob'  > <BsThreeDotsVertical /> </button>
            </div>
            <div className='container-fluid search-resp-mob-container'>
                <button><FaBars className='resp-mob-bars-icon' />  Sections</button>
                <LiaSearchSolid onClick={() => { setShow(!show) }} className='resp-mob-bars-icon2' />
            </div>
            {

                show ? <div className='container-fluid show-main-container'>
                    <input type='text' placeholder='Search' />
                    <button type='submit' >Submit</button>
                </div> : null
            }

        </>
    )
}

export default Navpage
