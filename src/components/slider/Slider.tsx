import React from 'react';
import TextLoop from 'react-text-loop';

const conctInfo = {
  phone: '+375 44 776 62 14',
  email: 'vladimirlyn@gmail.com'
}

const sliderContent = {
  name: 'Vladimir Liankevich',
  description: 'I front-end developer with experience in creating landing pages, SPA with React/Redux/TypeScript',
  btnText: 'Download CV',
}


export const Slider = () => {
  return (
    <>
      {/* Home Banner */}
      <section id='home' className='home-banner'>
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel: +375 44 776 62 14">{conctInfo.phone}</a>
            <a href="mailto:vladimirlyn@gmail.com">{conctInfo.email}</a>
          </div>
          {/** Можно добавить переключения отоброжения на каком языке будет отоброжатся строница*/}
        </div>
        {/** End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6>Hello, My name is</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop interval={3000}
                  delay={3}
                  adjustingSpeed={100}
                  fade
                  mask={false}
                  noWrap
                  springConfig={{ stiffness: 340, damping: 30 }}
                >
                  <p className="loop-text lead">Front-end Developer</p>
                  <p className="loop-text lead">App Developer</p>
                  <p className="loop-text lead">UI Designer</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="mt-4">
                  <a href="img/resume.pdf"
                    className="px-btn px-btn-white"
                    download>
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** End Container */}

        <div className="hb-me"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + 'img/slider/home-bg.png'
          })`
        }}
        >
          
        </div>
      </section>
      {/** End home Banner */}
    </>
  )
}