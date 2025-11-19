import React from "react";
import Navbar from "../component/Navbar"; 
import arrowrightgreen from "../assets/arrow-rightgreen.png"; 
import imagehero from "../assets/imagehero.png";
import arrowgreen from "../assets/Arrowgreen.png"

const Home = () => {
  return (
    <div>
      <Navbar /> 
      <div className="guide">
        <p>Home</p>
        <img src={arrowrightgreen} alt="Logo" className="arrow icon" />
        <p>Program category</p>
        <img src={arrowrightgreen} alt="Logo" className="arrow icon" />
        <p>N-power graduate</p>
        <img src={arrowrightgreen} alt="Logo" className="arrow icon" />
        <p className="lastP">N-power agro</p>
      </div>
     <div>
       <div className="homeWriteup">
        <div className="writeUp">
         <h1>N-Power Agro</h1>
         <p>The Federal Government is engaging 100,000 qualified young Nigerians<br></br> through the N-Power Agro programme...</p>
         <button className="homeBttn">Read more<img src={arrowgreen} className="arrowGreen"></img></button>
       </div>
       <div className="homeImg">
        <img src={imagehero} alt="image hero"/>

       </div>
       </div>
       
     </div>

      
      <h1>Welcome to Home Page</h1>
    </div>
  );
};

export default Home;
