import CertificateSwiper from "../CertificateSwiper"
import React, { useEffect, useState } from "react"
import Lightbox from "react-awesome-lightbox"
import AOS from "aos"

import "aos/dist/aos.css"
import "react-awesome-lightbox/build/style.css"

const certificates = [
 
]

export default function Certificates() {
  const [imageIndex, setImageIndex] = useState(null)

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
    <div className="relative h-full w-full flex flex-col items-center py-20 space-y-16">
      <p className="text-4xl font-bold capitalize">College Projects</p>
      <div className="h-full w-9/12 grid-cols-1 gap-y-10 items-center hidden lg:grid md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, i) => (
          <div className="h-full w-full flex justify-center" key={i} data-aos="zoom-in-up">
            <button
              className="w-2/3 flex flex-col items-center space-y-3"
              onClick={() => {
                setImageIndex(i)
              }}
            >
              <img
                src={certificate.url}
                alt={certificate.title}
                className="rounded-xl "
              />
              <p className="text-lg">{certificate.title}</p>
            </button>
          </div>
        ))}
      </div>
      <div className="h-full w-9/12 lg:hidden">
        <CertificateSwiper
          slidePerView={1}
          certificates={certificates}
          setImageIndex={setImageIndex}
        />
      </div>
      {imageIndex != null && (
        <div className="absolute">
          <Lightbox
            title={certificates[imageIndex].title}
            image={certificates[imageIndex].url}
            onClose={() => {
              setImageIndex(null)
            }}
          />
        </div>
      )}
    </div>
  )
}
