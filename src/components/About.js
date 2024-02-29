import React from 'react'
import './About.css'

function About() {
  return (
    <div className="aboutDiv" id='aboutDiv'>
        <h1>About</h1>
        <p className='aboutParagraph'>
        Hello there! I'm SyX, a passionate CS and Math student based in Los Angeles. I may be in the early stages of my academic journey, but my enthusiasm for technology knows no bounds.
        </p>
        <p className='aboutParagraph'>
        I am enthusiastic about sharing my evolving skills and creative endeavors. Every small project I undertake is a stepping stone, showcasing my dedication to the craft and my eagerness to take on new challenges.
        </p>
        <div className="aboutImage">
          <img src="aboutImage.jpg" alt="aboutImage" />
          <div className="details">
            <h2>Some Details</h2>
            <p><span className='detailQuestion'>Age :</span><span className='detailAnswer'>17</span></p>
            <p><span className='detailQuestion'>Birthday :</span><span className='detailAnswer'>June 26th, 2006</span></p>
            <p><span className='detailQuestion'>Location :</span><span className='detailAnswer'>Los Angeles, CA</span></p>
            <p><span className='detailQuestion'>Email :</span><span className='detailAnswer'>myemailsucks@nomail.com</span></p>
            <p><span className='detailQuestion'>Contact :</span><span className='detailAnswer'>+91 6397xxxxxx</span></p>
            <p><span className='detailQuestion'>Fun Fact :</span><span className='detailAnswer'>I like to see pictures of naked woman</span></p>
            <p style={{marginTop: "5%"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ipsum et culpa, consequatur id exercitationem vero minus velit pariatur commodi iusto laboriosam maiores, necessitatibus excepturi distinctio sed quas deserunt sunt?</p>
          </div>
        </div>
    </div>
  )
}

export default About