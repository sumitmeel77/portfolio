import Button from "../Button"
import Input from "../Input"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {

  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)
  const [isSendDisable, setIsSendDisable] = useState(true)

  useEffect(() => {
    checkForm()
  }, [form ])

  const checkForm = () => {

    if (form.email?.length != 0)
      setIsEmailError(true)
    else setIsEmailError(false)

    if (
      form.name.length != 0 &&
      form.email.length != 0 &&
      form.message.length != 0 &&
      !isEmailError
    )
      setIsSendDisable(false)
    else setIsSendDisable(true)
  }

  const sendHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const payload = {
        content: "",
        embeds: [
          {
            title: `New Message from ${form.name}`,
            color: 16761856,
            fields: [
              {
                name: "Name",
                value: form.name,
              },
              {
                name: "Email",
                value: form.email,
              },
              {
                name: "Message",
                value: form.message,
              },
            ],
            footer: {
              text: "sumit",
            },
            timestamp: new Date(),
          },
        ],
        username: "Sumit Meel",
        attachments: [],
      }
      // await axios.post(process.env.DISCORD_WEBHOOK, payload)

      emailjs
        .send(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_ID,
          form,
          process.env.EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
          console.log(result)
          // captchaRef.current.reset()
          setIsLoading(false)
        })
    } catch (error) {
      console.log("Error sending email: ", error)
    }
  }

  return (
    <div className="h-full w-full flex flex-col items-center py-20 space-y-10">
      <p className="text-4xl font-bold capitalize">Contact</p>
      <div className="w-2/3 flex flex-col items-center space-y-10">
        <div className="space-y-5">
          <div className="flex items-center space-x-5 text-sm md:text-base">
            <a
              href="sumitmeel77@gmail.com"
              className="h-10 w-10 flex items-center justify-center border border-customGrayLight rounded-full shadow-md transition-all duration-500 ease-in-out hover:bg-primary hover:border-primary hover:text-[#333333] hover:scale-110"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <p>sumitmeel77@gmail.com</p>
          </div>
        </div>
        {/* <div className="flex flex-col items-center space-y-3">
          <p>Use the form below to contact me directly via email.</p>
          <p>Please be sure to fill in your name and correct email address.</p>
        </div> */}
        <form
          className="w-full flex flex-col items-center space-y-10 md:w-2/3 lg:w-1/2"
          onSubmit={sendHandler}
        >
          <div className="w-full space-y-5">
            <Input
              placeholder={"Name"}
              w={"w-full"}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <div className="w-full space-y-3 transition-all duration-300 ease-in-out">
              <Input
                placeholder={"Email"}
                w={"w-full"}
                type={"email"}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <p
                className={`${
                  isEmailError && "h-5 opacity-100"
                } h-0 px-5 text-sm transition-all duration-300 ease-in-out opacity-0 text-red-400`}
              >
                Please enter valid email.
              </p>
            </div>
            <textarea
              className="h-36 w-full flex items-center p-2 px-5 rounded-xl outline-none border border-customGrayLight shadow-md bg-white dark:bg-input"
              placeholder="Message"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <Button
            title={"Send Message"}
            isLoading={isLoading}
            isDisable={isSendDisable}
          />
        </form>
      </div>
    </div>
  )
}
