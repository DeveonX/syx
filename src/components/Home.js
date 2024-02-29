import React from 'react'
import { Helmet } from 'react-helmet';
import './Home.css'
import About from './About';

export default function Home(props) {
  return (
      <div className="homeDiv">
        <div id="homeDiv"></div>
        <div className="mainDiv">
          {
            // scripts for type writing effect on title
          }
          <Helmet>
            <script>
              {`let titleMessages = `+JSON.stringify(props.titleMessages)+`;`}
            </script>
            <script src="updateTitleMessages.js" async></script>
          </Helmet>
          {
            // end of scripts for type writing effect on title
          }
            <p className="typeWrite" id='typeWriteTitle'>Test title</p>
          <div style={{marginTop: "70vh"}}>
            <About />
          </div>
        </div>
      </div>
  )
}