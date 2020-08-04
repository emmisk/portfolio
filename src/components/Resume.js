import React from "react"

const Resume = ({ image, text, href, alt }) => (
  <section className="md:w-full shadow-inner transition bg-red-200 hover:bg-red-300">
    <a href={href} target="_blank" rel="noreferrer noopener">
      <img src={image} alt={alt} />
    </a>
    <p>{text}</p>
  </section>
)

export default Resume
