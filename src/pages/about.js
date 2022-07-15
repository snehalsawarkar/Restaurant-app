import React from "react";


const About = () => {
return (
	<div class="about-section">
  <h1 class>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
  {/* <h2 style="text-align:center">Our Team</h2> */}

  {/* <div className="row"> 
  <div className="column"></div>
    <div className="card"></div> */}
      {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
      <div style={{color: "red" ,fontFamily: "Arial"}} class="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
//   </div> 
  
  
 
	);
};

export default About;
