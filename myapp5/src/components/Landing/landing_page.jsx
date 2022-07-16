import React from 'react';
import Landingimg from "../assets/landingimg.png";
// import { useHistory } from 'react-router-dom';




const Landing_page = () => {
  // const history=useHistory();

  // const handleRoute=()=>{
  //       history.push("/postview")
  // }

  return (
    <div>
      <div className="container">
        <div className="landing__container">
          <div className="image__container">
              <img src={Landingimg} alt=""/>
          </div>
          <div className="image__container-right">
             <h3>10x Team</h3>
             <button  >Enter</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Landing_page;
