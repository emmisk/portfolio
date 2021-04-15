import React from "react"

const Project = ({
  image,
  text,
  href,
  alt,
  imageColor,
  projectColor,
  projectHeader,
  projectType,
  hoverColor,
}) => (
  <div className="grid grid-cols-3 md:mr-10">
    <div
      className={`col-span-1 text-black text-center ${projectColor} p-2 shadow-inner`}
    >
      <div className="grid-cols-1">
        <p className="text-xl pl-2 mt-2 uppercase">{projectHeader}</p>
        <p className="text-l pl-2 mt-2">{projectType}</p>
        <p className="text-xl pl-2 mt-2"></p>
        <a
          href="https://github.com/emmisk/art_gallery"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button className="w-full text-white rounded-full flex items-center justify-center transition duration-200 ease-in-out bg-black hover transform hover:-translate-y-1 hover:scale-110">
            GitHub
          </button>
        </a>
      </div>
    </div>
    <section
      className={`w-full h-auto col-span-2 focus:outline-none shadow-inner transition ${imageColor} hover:${hoverColor}`}
    >
      <a href={href} target="_blank" rel="noreferrer noopener">
        <img src={image} alt={alt} className="w-full h-auto" />
      </a>
      <p>{text}</p>
    </section>
  </div>
)

export default Project
