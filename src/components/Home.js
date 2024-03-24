import React from 'react'
import { Helmet } from 'react-helmet';
import './Home.css'
import About from './About';
import Contact from './Contact.js';
import PropTypes from 'prop-types';

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
            <p className="typeWrite" id='typeWriteTitle'>Made with Love</p>
          <div style={{marginTop: "70vh"}}>
            <About Age={props.Age} Phone={props.Phone} Email={props.Email}/>
          </div>
          
          <div>
            <Contact Phone={props.Phone} Email={props.Email}/>
          </div>
        </div>
      </div>
  )
}

Home.propTypes = {
  titleMessages: PropTypes.array.isRequired,
  Age: PropTypes.number.isRequired,
  Phone: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired
}