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
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1565409973597999"
              crossorigin="anonymous"></script>
          <ins class="adsbygoogle"
              style={{display: "block"}}
              data-ad-client="ca-pub-1565409973597999"
              data-ad-slot="9111976133"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
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