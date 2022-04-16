import React from 'react';
import '../css/Form.css';
import { Link } from 'react-router-dom';
// import {useState,useEffect} from 'react';
// function ref() {
//   reload(false);
// }

function Form1(){
 
  
return(
  <>
          <div className="container">
          
          <div className="screen">
          <div className="screen__content">
            <h1 className="heading">
              Enter OTP
              </h1>
              <div className="otpbox">
                  <input type="text" className="OTP" maxLength="1"/>
                  <input type="text" className="OTP" maxLength="1"/>
                  <input type="text" className="OTP" maxLength="1"/>
                  <input type="text" className="OTP" maxLength="1"/>
              </div> 
              <Link to="/form2">
              <button className="button login__submit button2">
              <span className="button__text"><a href="./Form2">Verify OTP</a></span>
              <i className="button__icon fas fa-chevron-right"></i>
    
          </button>
          </Link> 
            </div>
          <div>
              
          </div>
         
          <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>		
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
          </div>
          </>
);


}
export default Form1;