import React from "react"

const ResumeProject = ({
  alt,
  projectColor,
  projectHeader,
  projectType,
  image,
  handleClick
}) => (
  <div className="">
    <div
      className={`col-span-1 text-black text-center ${projectColor} shadow-inner`}
    >
  <button onClick={handleClick} className="w-full focus:outline-none shadow-inner transition bg-red-300 hover:bg-red-400">
      <img src={image} alt={alt} />
  </button>
        <div className="grid-cols-1">
        <p className="text-xl uppercase">{projectHeader}</p>
        <p className="text-l mt-2 mb-2">{projectType}</p>
          <a
            href="https://github.com/emmisk/portfolio"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="mb-2 w-full text-white rounded-full flex items-center justify-center transition duration-200 ease-in-out bg-black hover transform hover:-translate-y-1 hover:scale-110">GitHub</button>
          </a>
      </div>
    </div>
  </div>
)

export default ResumeProject