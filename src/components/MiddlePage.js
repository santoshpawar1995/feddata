import React, { useState } from 'react'


import './MiddlePage.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { InputGroup } from 'react-bootstrap';
import { MDBInput, MDBIcon } from "mdb-react-ui-kit";
//import { useNavigate } from "react-router-dom";
import { passwordValidator } from "../components/regxValidation";
import sarjeet2 from "../components/sarjeet2.pdf"
import Santosh from './Santosh.pdf'
import { Link } from 'react-router-dom';

function MiddlePage() {
  //Show details data
  const [user, setUser] = useState(false)


  const [input, setInput] = useState({ email: "", password: "" });
  const [errorMessage, seterrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");
  // const navigate = useNavigate("");
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setsuccessMessage("");
    // if (!emailValidator(input.email))
    //   return seterrorMessage("please enter the vaild email id");
    // console.log(input.password);
    if (!(input.password))
      return seterrorMessage("Please ender the valid Username");
    if (
      // input.email !== "geethamsoft@gmail.com" ||
      input.password !== "sarjeet@123"
    )
      return seterrorMessage("Please ender the valid Username ");
    setUser(true)
    setsuccessMessage("successfully validated");
    console.log(input);
  };


  return (
    <>
      <div className='container  middle-container'>

        <form className='search-main-container text-center' onSubmit={onSubmit}>
          <div className='input-data-cont'>
            {/* <input placeholder='Search id here' label="Email"

              id="userid"
              type="text"
              size="lg"
              name="userid"
              onChange={handleChange} >
            </input> */}
            {/* here different */}
            {errorMessage.length > 0 && (
              <div style={{ color: "red", fontSize: "16px", position: 'absolute', marginTop: "-3rem" }}>
                {errorMessage}
              </div>
            )}
            {successMessage.length > 0 && (
              <div style={{ color: "green", fontSize: "16px", position: 'absolute', marginTop: "-3rem" }}>
                {successMessage}
              </div>

            )}
            {/* <div >
              <MDBInput
                label="Email"
                id="typeEmail"
                icon="user-tie"
                name="email"
                size="lg"
                placeholder='Userid'
                type="email"
                onChange={handleChange}
              />
            </div> */}
            <br></br>
            <div>
              <input
                className='input-box'
                // label="Password"
                id="typePassword"
                type="password"
                size="lg"
                name="password"
                placeholder='Userid'
                onChange={handleChange}
              />
            </div>
            {/* here different */}
            <button type='submit' className='button-submit' onSubmit={onSubmit}>Submit</button>
          </div>
          {/* <div className='p-2 '>
            <button className='m-2 view-button'>View details</button>
            <button className='m-2 download-button'>Download</button>
          </div> */}
          {
            user ? <div className='view-details-cont'>
              <div className='name-data-cont'>
                <p className='name-head'>Name:</p> <p className='text-white'>Bignesh</p>

              </div>
              <div className='name-data-cont'>

                <p className='name-head'>Bank:</p> <p className='text-white'>Feterl Bank</p>

              </div>
              <div className='name-data-cont'>

                <Link to={"viewpage"}><button className='m-2'>View details</button></Link>
                <a href={Santosh}
                  download="Example-PDF-document"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className='m-2'>Download</button>
                </a>

              </div>

            </div> : null
          }
        </form>

      </div>


      <div className='container mb-0 p-3 lastupdate'></div>
    </>

  )
}

export default MiddlePage
