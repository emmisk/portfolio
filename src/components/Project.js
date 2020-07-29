import React from "react"

const Project = ({ image, text, href, alt, color, hoverColor }) => (
  <section
    className={`col-span-1 col-span-2 transition duration-200 ease-in-out ${color} hover:${hoverColor} transform hover:-translate-y-1 hover:scale-90 ...`}
  >
    <a href={href} target="_blank" rel="noreferrer noopener">
      <img src={image} alt={alt} />
    </a>
    <p>{text}</p>
  </section>
)

export default Project
