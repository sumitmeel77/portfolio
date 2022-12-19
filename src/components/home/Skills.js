import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloud, faCodeBranch } from "@fortawesome/free-solid-svg-icons"
import Express from "../icons/Express"
import SkillItem from "../skills/SkillItem"
import SpringBoot from "../icons/SpringBoot"
import Nest from "../icons/Nest"
import Node from "../icons/Node"
import Firebase from "../icons/Firebase"
import JavaScript from "../icons/JavaScript"
import Solidity from "../icons/Solidity"
import Python from "../icons/Python"
import Java from "../icons/Java"
import CSharp from "../icons/CSharp"
import Tailwind from "../icons/Tailwind"
import Kotlin from "../icons/Kotlin"
import DevSkills from "../skills/DevSkills"
import Flutter from "../icons/Flutter"
import Next from "../icons/Next"
import React from "../icons/React"
import Nuxt from "../icons/Nuxt"
import SQLite from "../icons/SQLite"
import HTML from "../icons/HTML"
import Heroku from "../icons/Heroku"
import CSS from "../icons/CSS"
import MongoDB from "../icons/MongoDB"
import Web3 from "../icons/Web3"
import Vercel from "../icons/Vercel"
import MySQL from "../icons/MySQL"
import GitHub from "../icons/GitHub"
import GitLab from "../icons/GitLab"
import GitHubPages from "../icons/GitHubPages"
import Headless from "../icons/Headless"
import { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"

const backendSkills = [
  {
    header: "languages",
    items: [
      {
        name: "JavaScript",
        icon: <JavaScript />,
      },
      {
        name: "Python",
        icon: <Python />,
      },
    ],
  },
  {
    header: "frameworks",
    items: [
      {
        name: "Node.js",
        icon: <Node />,
      },
      {
        name: "Express.js",
        icon: <Express />,
      },
    ],
  },
  {
    header: "databases",
    items: [
      {
        name: "MongoDB",
        icon: <MongoDB />,
      },
      {
        name: "MySQL",
        icon: <MySQL />,
      },
    ],
  },
]

const frontendSkills = [
  {
    header: "languages",
    items: [
      {
        name: "HTML",
        icon: <HTML />,
      },
      {
        name: "CSS",
        icon: <CSS />,
      },
      {
        name: "",
        icon: "",
      },
      {
        name: "",
        icon: "",
      },
    ],
  },
  {
    header: "frameworks",
    items: [
      // {
      //   name: "Next.js",
      //   icon: <Next />,
      // },
      {
        name: "React.js",
        icon: <React />,
      },
    ],
  },
  {
    header: "libraries",
    items: [
      {
        name: "Tailwind CSS",
        icon: <Tailwind />,
      },
      {
        name: "",
        icon: "",
      },
    ],
  },
]

export default function Skills() {
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
    <div className="h-full w-full flex flex-col items-center py-20 space-y-16">
      <p className="text-4xl font-bold">Skills</p>
      <div className="w-9/12 flex flex-col items-center space-y-20">
        <div className="h-full w-full flex flex-col justify-center space-y-16 divide-opacity-30 divide-white md:space-y-0 md:divide-x md:flex-row">
          <DevSkills title="Backend Dev" skills={backendSkills} />
          {/* <div className="h-full w-full flex flex-col items-center space-y-10">
            <div className="h-fit w-fit flex flex-col items-center space-y-5">
              <FontAwesomeIcon
                icon={faGamepad}
                size="2x"
                className="text-primary"
              />
              <p className="text-xl font-bold">Game</p>
            </div>
            <SkillItem icon={<Unity />} name="Unity" />
          </div> */}
          <DevSkills title="Frontend Dev" skills={frontendSkills} />
        </div>
        <span className="h-[0.5px] w-full bg-white bg-opacity-30 hidden md:block"></span>
        <div className="w-full md:grid grid-cols-7 justify-center space-y-10 md:space-y-0 md:divide-x divide-opacity-30 divide-white">
          <div className="h-full w-full flex flex-col items-center col-span-2 space-y-5" data-aos="zoom-in-right">
            <div className="h-fit w-fit flex flex-col items-center space-y-5">
              <FontAwesomeIcon
                icon={faCodeBranch}
                size="2x"
                className="text-primary"
              />
              <p className="text-xl font-bold">Version Control</p>
            </div>
            <div className="w-full grid grid-cols-2 place-items-center gap-10">
              <SkillItem icon={<GitHub />} name="GitHub" />
              <SkillItem icon={<GitLab />} name="GitLab" />
            </div>
          </div>
          <div className="h-full w-full flex flex-col items-center col-span-3 space-y-5"  data-aos="zoom-in-up">
            <div className="h-fit w-fit flex flex-col items-center space-y-5">
              <FontAwesomeIcon
                icon={faCloud}
                size="2x"
                className="text-primary"
              />
              <p className="text-xl font-bold">Hosting</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 px-10">
              <SkillItem icon={<Heroku />} name="Heroku" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
