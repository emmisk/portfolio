import React from "react"

const Resume = ({ image, text, href, alt }) => (
  <section className="md:w-full shadow-inner transition duration-200 ease-in-out bg-red-200 hover:bg-red-300 transform hover:-translate-y-1 hover:scale-90 ...">
    <a href={href} target="_blank" rel="noreferrer noopener">
      <img src={image} alt={alt} />
    </a>
    <p>{text}</p>
  </section>
)

export default Resume
