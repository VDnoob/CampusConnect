import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';



function Widgets() {

  const hoverStyles = {
    color: '#3480cd', // Color to be applied on hover
  };

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>About</h2>
        <InfoIcon />
      </div>

      <div className='ccInfo'>
        <p>CampusConnect is plateform where we encourage students and professors
          from different colleges to connect with each other and share their ideas.
          We believe that this will help in the growth of the students and will
          help them in their future.
        </p>
      </div>

      <div className='widget__contact'>
        <Link to="/ContactUs" >
          {/* style={{...hoverStyles,color: 'white'}} */}
          <button>Reach out</button>
        </Link>
        
      </div>
      {/* {newsArticle("Google is hiring","Apply now - 9000+ Applicants")}
      {newsArticle("Join IITD for research","Area is SDLC")}
      {newsArticle("Kumar posted after long time","see the new post")}
      {newsArticle("Learn React","Join the masterclass")} */}
    </div>

  );
}

export default Widgets
