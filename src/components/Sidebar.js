import React from 'react'
import './Sidebar.css'
import { useState } from 'react';


function Sidebar(props) {

  let leftSideBarVisible = false;
  const showHideLeftSideBar = () => {
    if (leftSideBarVisible) {
      document.querySelector('.leftSideBar').style.animation = 'slideOut 1s';
      setTimeout(()=>{
        document.querySelector('.leftSideBar').style.display = 'none' }, 1000)

      leftSideBarVisible = false;
    }
    else {
      document.querySelector('.leftSideBar').style.display = 'flex';
      document.querySelector('.leftSideBar').style.animation = 'slideIn 1s';
      leftSideBarVisible = true;
    }
  }

  return (<>
  <div className="upperNavBar">
    <img src="fav-ham.png" alt="hamMenu" className='hamburgerImg'onClick={showHideLeftSideBar}/>
  </div>
    <div className="leftSideBar">
    <img src="fav-ham.png" alt="hamMenu" className='hamburgerImginLeftBar'onClick={showHideLeftSideBar}/>

        <div className="profileDiv">
            <img src="eve.jfif" alt="Profile" className="profilePic"/>
            <h2>{props.Name}</h2>
            <div className="favIcons">
              <a href="https://github.com/syeevee" target='_blank' rel='noreferrer'><img src="fav-github.png" alt="github" /></a>
              <a href="https://instagram.com/pixeevee" target='_blank' rel='noreferrer'><img src="fav-insta.png" alt="insta" /></a>
              <a href="https://www.linkedin.com/in/shivam-chauhan-11405628b/" target='_blank' rel='noreferrer'><img src="fav-linkedin.png" alt="linkedin" /></a>
            </div>
        </div>
        <div className="menuBar">
            <ul>
                <li><a href="#homeDiv"><img className='menuBarImages' src="fav-home.png" alt="home"/>Home</a></li>
                <li><a href="#aboutDiv"><img className='menuBarImages' src="fav-about.png" alt="home"/>About</a></li>
                <li><a href="#contactDiv"><img className='menuBarImages' src="fav-message.png" alt="home"/>Contact me</a></li>
                <li><a href="#SyX"><img className='menuBarImages' src="fav-syx.png" alt="home"/>SyX</a></li>

            </ul>
        </div>
        <div className="footer">
            <p>© 2024 {props.Name}</p>
            <span>Made with Love using ReactJS</span>
        </div>
    </div>
    </>
  )
}

export default Sidebar;