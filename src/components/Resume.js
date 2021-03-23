import React from "react"

const Resume = ({ image, alt, handleClick }) => (
  <div className="sm:w-auto">
  <button onClick={handleClick} className="w-full focus:outline-none shadow-inner transition bg-red-300 hover:bg-red-400">
      <img src={image} alt={alt} />
  </button>
  </div>
)

export default Resume
