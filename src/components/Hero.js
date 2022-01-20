import React from "react";

const Hero = ({handleLogout}) => {
    return(
        
        <div className="hero" ><div >
  <div className="sky">
   
    <div className="stars"></div>
    <nav>
    <h2></h2>
        <button className="btn1" onClick={handleLogout}>Logout</button>
        </nav>
        <center>
<h2 data-text="Welcome...">-</h2>
</center>
    <div className="stars1"></div>
    <div className="stars2"></div>
    <div className="shooting-stars"></div>
  
  </div></div>
</div>
       
        
     
    )
}

export default Hero;