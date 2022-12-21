import {
  faDownload,
  faMoon,
  faQuoteLeft,
  faQuoteRight,
  faSun,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TypeAnimation } from "react-type-animation"
import SocialButton from "../hero/SocialButton"
import Facebook from "../icons/Facebook"
import GitHub from "../icons/GitHub"
import GitLab from "../icons/GitLab"
import TiltPhaseSix from "../TiltPhase"
import Linkedin from "../icons/Linkedin"
import Bright from "../icons/Bright"
import sumit from "../../images/sumit.png"
import resume from "../../images/resume.pdf"

const highlights = [
  "Fullstack Developer",
  2000,
  "Software Developer",
  2000,
  "Basketball Player",
  2000,
]

const socials = [
  // {
  //   url: "sumitmeel77@gmail.com",
  //   icon: <Facebook />,
  // },
  {
    url: "https://www.linkedin.com/in/sumitmeel",
    icon: <Linkedin />,
  },
  {
    url: "https://github.com/sumitmeel77",
    icon: <GitHub width={25} height={25} />,
  },
  // {
  //   url: "",
  //   icon: <GitLab width={25} height={25} />,
  // },
]

export default function Hero({ darkMode, setDarkMode }) {
  return (
    <div className="h-full w-full flex flex-col md:flex-row-reverse md:h-screen transition-all duration-500 ease-in-out md:p-10 text-black dark:text-white">
      <div
        className="relative h-screen w-full flex flex-col items-center justify-center space-y-10 md:h-full"
        data-aos="zoom-in-left"
      >
        <div className="relative h-[40%] w-2/3 rounded-xl text-base transition duration-500 ease-in-out hover:scale-105 md:h-[55%">
          <TiltPhaseSix
            options={{
              max: 10,
              perspective: 800,
              scale: 1,
            }}
          >
            <img
              src={sumit}
              alt=""
              className="h-full w-full object-contain"
            />
          </TiltPhaseSix>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <p className="text-2xl font-bold">Sumit Meel</p>
          {/* <p className="text-customGrayHeavy dark:text-customGrayLight"></p> */}
          <div className="h-10 text-primary">
            <TypeAnimation
              cursor={false}
              sequence={highlights}
              speed={40}
              style={{ fontSize: "1.25rem" }}
              wrapper="p"
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div
        className="h-full w-full flex flex-col items-center justify-center space-y-14 px-10 pb-10 md:pl-20"
        data-aos="zoom-in-right"
      >
        <div className="space-y-10">
          <div className="space-y-5">
            <div className="animate-bounce-five flex mb-5 text-3xl md:text-5xl">
              <p className="font-bold">Hi there</p>
              <p className="font-bold text-primary ">!</p>
            </div>
            <div className="flex md:space-x-5" data-aos="fade-up">
              <span className="h-0.5 w-10 mt-3 bg-black dark:bg-white hidden md:block"></span>
              <p className="w-full">
              I'm a dedicated programmer that takes great pleasure in developing software and is always curious to explore new tools and techniques.
              </p>
            </div>
            <div className="flex md:space-x-5" data-aos="fade-up">
              <span className="w-10 hidden md:block"></span>
              <p className="w-full">
              Basketball, movies, and tinkering with gadgets are some of my go-to pastimes.
              </p>
            </div>
          </div>
          <div
            className="w-full md:text-lg flex flex-col items-center"
            data-aos="fade-up"
          >
            <div className="flex space-x-2 flex-wrap">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <p>Deleted code is debugged code</p>
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
            {/* <div className="flex space-x-2 flex-wrap">
              <p>if you first admit that you are the problem.</p>
              <FontAwesomeIcon icon={faQuoteRight} />
            </div> */}
          </div>
        </div>
        <div className="w-full flex justify-center space-x-6 md:space-x-20">
          {socials.map((social, i) => (
            <SocialButton social={social} key={i} />
          ))}
        </div>
        <a
          href={resume}
          target={"_blank"}
          className="h-12 p-5 space-x-3 flex items-center justify-center rounded-xl font-bold group transition ease-in-out duration-500 shadow-md text-black bg-primary hover:scale-110"
        >
          <p>Download Resume</p>
          <FontAwesomeIcon
            icon={faDownload}
            className="group-hover:animate-bounce"
          />
        </a>
      </div>
      <div className="absolute top-10 w-full flex justify-between items-center px-10 flex-row-reverse md:right-0 md:w-fit md:flex-col md:space-y-5">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="transition duration-300 ease-in-out text-2xl hover:scale-125 hover:text-primary"
        >
          {darkMode ? <FontAwesomeIcon icon={faMoon} /> : <Bright />}
        </button>
      </div>
    </div>
  )
}
