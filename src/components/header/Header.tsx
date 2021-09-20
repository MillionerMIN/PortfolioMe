import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import ReactTooltip from "react-tooltip";
import { FaHome, FaUser } from 'react-icons/fa';
import { FiBriefcase, FiFileText, FiPhoneOutgoing } from "react-icons/fi";

export const Header = () => {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      {/* Header */}
      <div className='mob-header'>
        <button className='toggler-menu' onClick={handleClick}>
          <div className={click ? 'active' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header className={click ? 'header-left menu-open' : 'header-left'}>
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <Link to='/'>V</Link>
            </div>
          </div>
          {/* End htl-top */}

          <Scrollspy
            className='nav nav-menu'
            items={['home', 'about', 'resume', 'work', 'blog', 'contacts']}
            currentClassName='active'
            offset={-30}
          >
            <li>
              <a
                className='nav-link'
                href="#home"
                data-tip
                data-for="HOME"
                onClick={handleClick}
              >
                <FaHome />
                <ReactTooltip id='HOME' place='top' type='dark' effect='float' >
                  <span>Home</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className='nav-link'
                href="#about"
                data-tip
                data-for="ABOUT"
                onClick={handleClick}
              >
                <FaUser />
                <ReactTooltip id='ABOUT' place='top' type='dark' effect='float' >
                  <span>About</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className='nav-link'
                href="#resume"
                data-tip
                data-for="RESUME"
                onClick={handleClick}
              >
                <FiFileText />
                <ReactTooltip id='RESUME' place='top' type='dark' effect='float' >
                  <span>Resume</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className='nav-link'
                href="#work"
                data-tip
                data-for="WORK"
                onClick={handleClick}
              >
                <FiBriefcase />
                <ReactTooltip id='WORK' place='top' type='dark' effect='float' >
                  <span>Work</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className='nav-link'
                href="#contacts"
                data-tip
                data-for="CONTACTS"
                onClick={handleClick}
              >
                <FiPhoneOutgoing />
                <ReactTooltip id='CONTACTS' place='top' type='dark' effect='float' >
                  <span>Contacts</span>
                </ReactTooltip>
              </a>
            </li>
          </Scrollspy>

        </div>
      </header>

      {/*End Header */}
    </>
  )
}