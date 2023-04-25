import React from 'react';
import './NavBar.css';
import { ABOUT, CONTACT, COURSES, HOME, TITLE } from '../variables';

const NavBar:React.FC = () => {
  return (
    <div className="navbar">
        <div className="home-elem-2">
            <div className="home-elem-3">
                <span className="home-elem-5">
                    <p>{TITLE}</p>
                </span>
            </div>
            <div className="nav_menu"> 
              <span className="nav_item">
                <a href="/" className="link" target="_self">
                  <p>{HOME}</p>
                </a>
              </span>
              <span className="nav_item">
                <a href="/about" className="link" target="_self">
                  <p>{ABOUT}</p>
                </a>
              </span>
              <span className="nav_item">
                <a href="/courses" className="link" target="_self">
                  <p>{COURSES}</p>
                </a>
              </span>
              <span className="nav_item">
                <a href="/contact" className="link" target="_self">
                  <p>{CONTACT}</p>
                </a>
              </span>
            </div>
        </div>
    </div>
  );
}

export default NavBar;