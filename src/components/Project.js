import React from "react"

const Project = ({ image, text, href, alt, color, hoverColor }) => (
  <section
    className={`col-span-1 col-span-2 transition ${color} hover:${hoverColor}`}
  >
    <a href={href} target="_blank" rel="noreferrer noopener">
      <img src={image} alt={alt} />
    </a>
    <p>{text}</p>
  </section>
)

export default Project
