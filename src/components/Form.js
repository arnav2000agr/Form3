import React from 'react';
import '../css/Form.css';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';

function Form() {

    
    var visible=false;
    
    const check=(visible)=>{
        if(visible===false)
        return true;
        else
        return false;
    }
    const hi=()=>{
         visible=true;
        console.log("ubheru");
        check(visible);
        
    }
    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    





    
    const [submit,setsubmit]=useState("");

  return(
      <>
          
       <div className="container">
          
        <div className="screen">
        
            <div className="screen__content">
            <h1 className="heading">
              Registration
              </h1>
                <form className="login">
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="email" className="login__input" placeholder="Enter Email" onChange={(event)=>{setsubmit(event.target.value)}}/>
                    </div>
                    {/* <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="otp" className="login__input" placeholder="OTP"/>
                    </div> */}
                    <Link to="/form1"><button className="button login__submit">
                        <span className="button__text"><a href="./Form1">Generate OTP</a></span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>
                    </Link>			
                </form>
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

export default Form;
