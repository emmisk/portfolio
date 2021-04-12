import React from "react"

const ResumeProject = ({ alt, image, imageColor, handleClick, hoverColor }) => (
  <div className="grid grid-cols-1">
    <div className={`col-span-1 text-black text-center bg-black shadow-inner`}>
      <button
        onClick={handleClick}
        className={`w-full focus:outline-none shadow-inner transition ${imageColor} hover:${hoverColor}`}
      >
        <img src={image} alt={alt} />
      </button>
    </div>
  </div>
)

export default ResumeProject
