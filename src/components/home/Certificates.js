// import CertificateSwiper from "../CertificateSwiper"
// import React, { useEffect, useState } from "react"
// import Lightbox from "react-awesome-lightbox"
// import AOS from "aos"

// import "aos/dist/aos.css"
// import "react-awesome-lightbox/build/style.css"

// const certificates = [
 
// ]

// export default function Certificates() {
//   const [imageIndex, setImageIndex] = useState(null)

//   useEffect(() => {
//     AOS.init({
//       disable: function () {
//         var maxWidth = 768
//         return window.innerWidth < maxWidth
//       },
//       duration: 800,
//     })
//   }, [])

//   return (
//     <div className="relative h-full w-full flex flex-col items-center py-20 space-y-16">
//       <p className="text-4xl font-bold capitalize">College Projects</p>
//       <div className="h-full w-9/12 grid-cols-1 gap-y-10 items-center hidden lg:grid md:grid-cols-2 lg:grid-cols-3">
//         {certificates.map((certificate, i) => (
//           <div className="h-full w-full flex justify-center" key={i} data-aos="zoom-in-up">
//             <button
//               className="w-2/3 flex flex-col items-center space-y-3"
//               onClick={() => {
//                 setImageIndex(i)
//               }}
//             >
//               <img
//                 src={certificate.url}
//                 alt={certificate.title}
//                 className="rounded-xl "
//               />
//               <p className="text-lg">{certificate.title}</p>
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="h-full w-9/12 lg:hidden">
//         <CertificateSwiper
//           slidePerView={1}
//           certificates={certificates}
//           setImageIndex={setImageIndex}
//         />
//       </div>
//       {imageIndex != null && (
//         <div className="absolute">
//           <Lightbox
//             title={certificates[imageIndex].title}
//             image={certificates[imageIndex].url}
//             onClose={() => {
//               setImageIndex(null)
//             }}
//           />
//         </div>
//       )}
//     </div>
//   )
// }
import AcademicProjects from "../AcademicProjects"

const projects = [
  {
    name: "Design and Analysis of Cricket Pitch",
    description:
      "Building a machine learning model to predict soil parameters based on ball properties.",
    date: "1/2021 - present",
    live: "",
  },
  {
    name: "SwagSwab",
    description:
      "Created a wall mover robot from scratch based on the idea of an air vacuum to clean skyscraper windows.",
    live: "https://drive.google.com/file/d/17_yc5hgd81yVVU2gJqPqGftMOl9jIvi2/view?usp=sharing",
    date: "1/2021 - 7/2021",

    status: "archive",
  },

]

export default function Certificates() {
  return (
    <div className="h-full w-full flex flex-col items-center py-20 space-y-16">
      <p className="text-4xl font-bold capitalize">Academic Projects</p>
      <div className="w-9/12 space-y-20">
        {/* <div className="h-16 w-fit space-x-3 px-10 flex items-center justify-center rounded-xl  text-black bg-white shadow-xl border border-customGrayLight">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-xl font-bold">ACTIVE PROJECTS</p>
        </div> */}
        {/* <Projects title="Active Projects" projects={projects} active={true} /> */}
        <AcademicProjects
          title="Selected Projects"
          projects={projects}
        />
      </div>
    </div>
  )
}