import React from "react"

const ResumeProject = ({
  alt,
  projectColor,
  projectHeader,
  projectType,
  image,
  handleClick,
  href
}) => (

  <div className="grid grid-cols-1">
    <div
      className={`col-span-1 text-black text-center  shadow-inner`}
    >
  <button onClick={handleClick} className="w-full md:w-5/6 focus:outline-none shadow-inner transition bg-red-300 hover:bg-red-400">
      <img src={image} alt={alt} />
  </button>
    </div>
  </div>
)

export default ResumeProject