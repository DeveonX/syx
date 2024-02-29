import React from 'react'
import './Home.css'
import About from './About';

export default function Home(props) {
  if(props.titleMessages.length !== 2){
    throw new Error("titleMessages must be an array of exactly 2 strings")
  }
  let titleMessages = [];
  for (let i = 0; i < props.titleMessages.length; i++) {
    titleMessages.push(
      <p id={`typeWriteText${i}`} className="typeWrite">{props.titleMessages[i]}</p>
    )
  }

  return (
      <div className="homeDiv">
        <div id="homeDiv"></div>
        <div className="mainDiv">
          {titleMessages}
            <About />
        </div>
      </div>
  )
}

