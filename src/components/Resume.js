import React from "react"

const Resume = ({ image, text, href, alt, handleClick }) => (
  <div className="sm:w-auto">
  <button onClick={handleClick} className="md:w-full w-full focus:outline-none shadow-inner transition bg-red-300 hover:bg-red-400">
      <a href={href} target="_blank" rel="noreferrer noopener">
      <img src={image} alt={alt} />
    </a>
    <p>{text}</p>
  </button>
  </div>
)

export default Resume
