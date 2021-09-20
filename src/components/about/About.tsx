import React from 'react';
import { Services } from '../service/Services';
import { Social } from '../Social';

export const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.jpg" alt="about-me" />
                  </div>
                  <Social />
                  {/**End social icon */}
                </div>
                {/**End img */}
                <div className="info">
                  <p>Front-end Developer</p>
                  <h3>Vladimir Liankevich</h3>
                </div>
                {/**End info */}
              </div>
              {/**End about-me */}
            </div>
            {/**End col */}

            <div className="col-lg-7 ml-auto">
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    I'm a Front-end Developer with experien
                    ce in creating landing page, SPA with React/Redux/TypeScript. I'm from Minsk. I like work
                    with new people. New people new Experiences.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Vladimir Liankevich</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>30th May 1987</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>34 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Belarus city Minsk</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>+375 (44) 77 66 214</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>vladimirlyn@gmail.com</span>
                        </li>
                        <li>
                          <label>Work: </label>
                          <span>open for work</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/**End col */}
          </div>

          {/**separated */}
          <div className="separated"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "img/border-dark.png"
                })`,
            }}
          ></div>
          {/**End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>
          <Services />
        </div>

      </section>
    </>

  );
}