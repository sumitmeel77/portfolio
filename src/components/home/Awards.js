import {
  faAward,
  faGraduationCap,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from "react"
import Lightbox from "react-awesome-lightbox"
import AwardSwiper from "../AwardSwiper"
import AOS from "aos"

import "aos/dist/aos.css"
import "swiper/css"
import "swiper/css/scrollbar"
import "react-awesome-lightbox/build/style.css"

const awards = [
  
]

export default function Awards({awardRef}) {
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
      <p className="text-4xl font-bold capitalize">Awards</p>
      <div className="h-full w-9/12 flex justify-center items-center md:hidden">
        <AwardSwiper
          slidePerView={1}
          awards={awards}
          setImageIndex={setImageIndex}
          awardRef={awardRef}
        />
      </div>
      <div className="h-full w-9/12 justify-center items-center hidden md:flex lg:hidden">
        <AwardSwiper
          slidePerView={2}
          awards={awards}
          setImageIndex={setImageIndex}
          awardRef={awardRef}
        />
      </div>
      <div className="h-full w-9/12 justify-center items-center hidden lg:flex" data-aos="zoom-in-up">
        <AwardSwiper
          slidePerView={3}
          awards={awards}
          setImageIndex={setImageIndex}
          awardRef={awardRef}
        />
      </div>
      <div className="absolute">
        {awards.map((award, i) =>
          imageIndex == i ? (
            award.images?.length > 1 ? (
              <Lightbox
                images={award.images}
                onClose={() => {
                  setImageIndex(null)
                }}
                key={i}
              />
            ) : (
              award.images.map((image, j) => (
                <Lightbox
                  title={image.title}
                  image={image.url}
                  onClose={() => {
                    setImageIndex(null)
                  }}
                  key={j}
                />
              ))
            )
          ) : null
        )}
      </div>
    </div>
  )
}
