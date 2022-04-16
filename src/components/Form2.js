import React from 'react'

const Form2 = () => {
  return (
    <div className="container">
          
    <div className="screen">
    <div className="screen__content">
      <form className="login">
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="Enter Team Leader Name"/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="number" className="login__input" placeholder="Enter Student Number"/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="number" className="login__input" placeholder="Enter Mobile Number"/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="Enter Section"/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="Enter Member 1 Name"/> 
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="number" className="login__input" placeholder="Enter Student Number"/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="Enter Member 2 Name"/> 
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="number" className="login__input" placeholder="Enter Student Number"/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="Enter Member 3 Name"/> 
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="number" className="login__input" placeholder="Enter Student Number"/>
                    </div>
                    <button className="button login__submit">
                        <span className="button__text">Submit</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>			
                </form>
                <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>		
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Form2;