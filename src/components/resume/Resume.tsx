import React from "react";
import { Skills } from "../skills/Skills";

const resumeContent = [
  { 
    jobPosition: `Front-end developer`,
    jobType: ``,
    jobDuration: `Apr 2021 - Present`,
    timeDuraton: `Full Time`,
    compnayName: `Freelance`,
    jobDescription: `React development using redux, react-redux, react-routerdom, redux-thunk, axios, formik, ant-design libraries. Work with Hooks, TypeScript. Reusable components development experience in cross-browser, adaptive, responsive development, CSS-preprocessors. Implemented flowauthorization, notification, forms (Formik and Redux-form)`,
  },
  {
    jobPosition: `Work manager (foreman)`,
    jobType: ``,
    jobDuration: `Feb 2012 - Aug 2021`,
    timeDuraton: `Full Time`,
    compnayName: `UM-70 OJSC Trest 15 Spetsstroy`,
    jobDescription: `Organization of construction production.Communication and reporting to the customer. Quality control and timing of work. Paperwork for putting objects into operation`,
  },
  {
    jobPosition: `Work manager (foreman)`,
    jobType: ``,
    jobDuration: `Aug 2007 - Jan 2012`,
    timeDuraton: `Full Time`,
    compnayName: `OJSC Stroymaztrest`,
    jobDescription: `Distribution of production tasks. Distribution of wages among employees. Communication with the customer`,
  }
];

const educatonContent = [
  {
    passingYear: "2021",
    degreeTitle: "Front-end Developer",
    instituteName: "IT-Incubator",
  },
  {
    passingYear: "2020",
    degreeTitle: "Front-end Developer",
    instituteName: "Udemy",
  }, 
  {
    passingYear: "2019-2023",
    degreeTitle: "Civil Engineering",
    instituteName: "Belarusian National Technical University",
  },
  {
    passingYear: "2003-2007",
    degreeTitle: "Civil Engineering",
    instituteName: "branch BNTU «Minsk State College of Architecture and Civil Engineering»",
  },
]


export const Resume = () => {
  return (
    <>
      <section className="section" id="resume">
        <div className="container">
          <div className="title">
            <h3>Experience</h3>
          </div>
          {/** End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              //End resume-row
            ))}
          </div>

          {/**separated */}
          <div className="separated"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/img/border-dark.png"
                })`,
            }}
          ></div>
          {/**End separated */}

          <div className="title">
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}

          </div>
        </div>
      </section>
    </>
  )
}