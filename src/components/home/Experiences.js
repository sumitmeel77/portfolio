import {
  faCheck,
  faTrophy,
  faUserGraduate,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"

const experiences = [
  {
    title: "Full Stack Developer",
    icon: faUserGraduate,
    archievement: "Internship",
    description: "Worked on building the beta version of product’s web user interface from scratch using Typescript, React js, React query, and Material ui . Created 15+ REST APIs using Fast Api and python for application and then integrated the backend with frontend. Tested the application by taking several test cases using Jest for frontend and Pytest for backend.",
    technologies: [
      "React.js",
      "Typescript",
      "Fast Api",
      "Pytest"
    ],
    company: "Waterdip",
    date: "March 2022 - Oct 2022",
  }, {
    title: "Frontend Developer",
    icon: faUserGraduate,
    archievement: "Internship",
    description: "Worked on building core product of upscale (sales engagement platform), by developing frontend for product using React js , javascript , CSS. Added several pages and feature to upscale website.Tested and improvised the app by taking several test cases under consideration and by resolving bugs",
    technologies: [
      "React.js", "Javascript" , "CSS"
    ],
    company: "Upscale",
    date: "Dec 2021 - Feb 2022",
  }
]

export default function Experiences() {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 768
        return window.innerWidth < maxWidth
      },
      duration: 800,
    })
  }, [])

  return (
    <div className="h-full w-full flex flex-col items-center py-20 space-y-16 text-black dark:text-white">
      <p className="text-4xl font-bold capitalize">Experiences</p>
      <div className="w-9/12">
        {experiences.map((experience, i) => (
          <div className="h-fit w-full flex" key={i}>
            <div
              className="h-full w-5/12 space-y-3 px-10 py-1.5 hidden lg:block"
              data-aos="fade-right"
            >
              <p className="text-xl font-bold">{experience.company}</p>
              <p className="text-customGrayHeavy dark:text-text">{experience.date}</p>
            </div>
            <div className="h-full w-full lg:w-7/12 flex">
              <div className="h-full w-fit">
                <div className="relative h-10 w-10 flex flex-col items-center justify-center">
                  <span className="absolute h-10 w-10 rounded-full border-2 border-dashed border-black dark:border-white"></span>
                  <span className="h-5 w-5 rounded-full bg-primary"></span>
                </div>
                <div className="h-full w-10 flex items-center justify-center">
                  <div className="h-[400px] md:h-60 lg:h-40 w-0 border-[0.1px] border-dashed border-black dark:border-white"></div>
                </div>
              </div>
              <div
                className="h-full w-full md:w-11/12 flex flex-col flex-wrap pl-10 py-1.5"
                data-aos="zoom-in-left"
              >
                <div className="h-full w-full space-y-3 lg:hidden">
                  <p className="text-xl font-bold">{experience.company}</p>
                  <p className="text-customGrayHeavy dark:text-text">{experience.date}</p>
                </div>
                <p className="md:text-xl font-bold pt-3 md:pt-0">
                  {experience.title}
                </p>
                {experience.archievement && (
                  <div className="flex items-center space-x-3 pt-3">
                    <FontAwesomeIcon
                      icon={experience.icon}
                      className="text-primary"
                    />
                    <p>{experience.archievement}</p>
                  </div>
                )}
                <p className="pt-3 text-customGrayHeavy dark:text-text">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
