import React from "react";
import "./Login.css";
function Login(props) {
    const {formState, errors, onInputChange, onInputBlur} = props

  return (
    <div className="Login">
      <div className="Login-top_section">
        <img
          className="m-tb10"
          src="https://www.healthifyme.com/blog/wp-content/uploads/2018/10/footer-logoR.png"
          alt="logo"
        />
        <p className="Login-label m-tb10">Sign in</p>
        <p className="Login-content m-tb10">Use your Healthifyme Account</p>
      </div>
      <div className="Input-container">
        <input 
            type="text" 
            className={errors && !errors.email.length  ? 'Input' : 'Input Input-error'} 
            placeholder="Enter Your Email"
            name="email"
            value={formState && formState.email}
            onBlur={onInputBlur}
            onChange={onInputChange}
            id="input1"
        />  
        <p className="Error">{errors && errors.email}</p>
      </div>

      <div className="Input-container">
        <input
          type="text"
          className={(errors && !errors.password.length)  ? 'Input' : 'Input Input-error'}
          name="password"
          placeholder="Enter Your Password"
          value={formState && formState.password}
          onBlur={onInputBlur}
          onChange={onInputChange}
          id="input2"
        />
        <p className="Error">{errors && errors.password}</p>
      </div>

      <div className="Button-container">
        <button className="Button" onClick={props.loginHandler}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
