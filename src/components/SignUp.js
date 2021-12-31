import React from "react";
import "./SignUp.css";
import crypto from "../assets/signup.png";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container">
        {/* Left  */}
        <div className="left">
          <img src={crypto} alt="crypto" />
        </div>

        {/* Right  */}
        <div className="right">
          <h2>Earn passive income with crypto.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            architecto fugiat ipsa voluptates similique dolore officiis? Laborum
            commodi maiores eos.
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
