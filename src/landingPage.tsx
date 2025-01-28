import React from "react";
import "./Landing.css"; 

const LandingPage = ({ canStart }) => {
  return (
    <div className="landingPage">
      <div className="left-column">
        <h1>Cook Like a Pro, Anytime, Anywhere!</h1>
        <p>Discover thousands of delicious recipes tailored just for you.</p>
        <button className="cta-button" onClick={()=>canStart(true)}>Start Cooking</button>
      </div>

      <div className="right-column">
        
      </div>
    </div>
  );
};

export default LandingPage;
