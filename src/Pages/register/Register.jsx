import { useRef } from "react";
import { useState } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const emailref = useRef();
  const passwordref = useRef();
  const handaleEmail = () => {
    setEmail(emailref.current.value);
  };

  const handalefinish = () => {
    setPassword(passwordref.current.value)
  }

  return (
    <div className="register">
      <div className="top">
        <div className="wraper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>
          Unlimited movies, TV <span className="">shows, and more.</span>
        </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? <>
          <div className="input">
          <input type="email" placeholder="email address" ref={emailref} />
          <button className="registerButton" onClick={handaleEmail}>
            Get Started
          </button>
        </div>
        </> : 
        <>
        <form className="input">
          <input type="password" placeholder="Password" ref={passwordref} />
          <button className="registerButton" onClick={handalefinish}>
           Start
          </button>
        </form>
        </>
        }
        
      </div>
    </div>
  );
};

export default Register;
