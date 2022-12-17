import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"

export default function Footer() {
  return (
    <div className="h-fit w-full flex justify-center items-center flex-wrap space-x-1 p-3 text-xs md:text-sm text-customGrayLight bg-background opacity-90">
      <FontAwesomeIcon icon={faCopyright} />
      <p>All rights are reserved 2022. Powered by Sumit Meel</p>
      .<p>View source code on</p>
      <a
        href="https://github.com/sumitmeel77"
        target="_blank"
        rel="noreferrer"
        className="text-white hover:underline"
      >
        GitHub
      </a>
      .
    </div>
  )
}
