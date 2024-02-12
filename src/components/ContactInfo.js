import React from "react"

const ContactInfo = () => (
  <>
    <a
      className="text-center block uppercase text-base py-2 px-4 text-white bg-black hover:underline"
      href="mailto:koistinenemmisofia@gmail.com"
    >
      koistinenemmisofia@gmail.com
    </a>
    <a
      className="text-center block text-base py-2 px-4 text-white bg-black hover:underline"
      href="https://www.linkedin.com/in/emmi-s-koistinen/"
    >
      LinkedIn
    </a>
    <h2 className="text-white bg-black text-1xl text-center uppercase py-2 px-8">
      +358 45 888 1335
    </h2>
    <h2 className="text-white bg-black text-1xl text-center uppercase py-2 px-8">
      Portfolio - React, Tailwind CSS
      <a
        href="https://github.com/emmisk/portfolio"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className="self-center w-24 bg-white text-black rounded-full ml-2 hover:bg-red-200">
          GitHub
        </button>
      </a>
    </h2>
  </>
)

export default ContactInfo
