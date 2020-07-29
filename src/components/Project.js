import React from "react"

const Project = ({ image, text, href, alt }) => (
  <section>
    <a href={href} target="_blank" rel="noreferrer noopener">
      <img src={image} alt={alt} />
    </a>
    <p>{text}</p>
  </section>
)

export default Project