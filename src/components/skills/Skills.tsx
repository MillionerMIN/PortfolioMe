import React from 'react'

const skillContent = [
  {
    name: "HTML5",
    percent: "85",
    numberPercent: "85",
  },
  {
    name: "React JS",
    percent: "75",
    numberPercent: "75",
  },
  {
    name: "JavaScript",
    percent: "65",
    numberPercent: "65",
  },
  {
    name: "TypeScript",
    percent: "70",
    numberPercent: "70",
  },
]

export const Skills = ()=> {
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span>{skill.percent}%</span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  )
}