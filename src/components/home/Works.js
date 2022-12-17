import Projects from "../Projects"

const projects = [
  {
    name: "Study Buzz",
    description:
      "Study Buzz ia a all-in-one solution for group study and peer study.",
    img: "/images/study_buzz.png",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Rest APi",
      "MongoDB",
      "Socket.io",
    ],
    sourceCode: "https://github.com/sumitmeel77/Study_Buzz",
    live: "",
    date: "03/2022",

    status: "archive",
    style: "object-left object-cover",
  },
  {
    name: "AproKart webapp",
    description:
      "Developed a full stack e-commerce website for buyers and admin application for sellers with different admin hierarchy levels using MERN stack",
    img: "/images/MernEcommerce.png",
    tech: [
      "React.js",
      "Redux",
      "JwtToken",
      "Node.js",
      "Express.js",
      "Rest APi",
      "MongoDB",
    ],
    sourceCode: "https://github.com/sumitmeel77/MERN-Ecommerce",
    live: "",
    date: "11/2021",

    status: "archive",
  },
  {
    name: "News Webapp",
    description:
      "Developed a news application where user can authenticate and can get daily real time updated news of different domains.",
    img: "/images/news.png",
    tech: [
      "React.js",
      "Redux",
      "News APi",
    ],
    sourceCode: "https://github.com/sumitmeel77/Web_Application",
    live: "",
    date: "10/2021",

    status: "archive",
    style: "object-contain",
  },
  {
    name: "Github-issue-page",
    description:
      "Clone of gihub issue page",
    img: "/images/github_page.png",
    tech: [
      "react-router",
      "redux"
      ],
    sourceCode: "https://github.com/sumitmeel77/github-issue-page",
    live: "https://git-issues.netlify.com/",
    date: "09/2021",

    status: "archive",
    style: "object-contain",
  },
  {
    name: "Portfolio",
    description: "Personal portfolio",
    img: "/images/portfolio.png",
    tech: ["Tailwind CSS", "EmailJS"],
    sourceCode: "",
    live: "",
    date: "",

    status: "active",
    style: "object-left object-cover",
  },
]

export default function Works() {
  return (
    <div className="h-full w-full flex flex-col items-center py-20 space-y-16">
      <p className="text-4xl font-bold capitalize">Works</p>
      <div className="w-9/12 space-y-20">
        {/* <div className="h-16 w-fit space-x-3 px-10 flex items-center justify-center rounded-xl  text-black bg-white shadow-xl border border-customGrayLight">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-xl font-bold">ACTIVE PROJECTS</p>
        </div> */}
        {/* <Projects title="Active Projects" projects={projects} active={true} /> */}
        <Projects
          title="Selected Projects"
          projects={projects}
        />
      </div>
    </div>
  )
}
