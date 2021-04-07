import React from "react"

const SubHeader = ({ job, location, subTitle, infoText }) => {
  return (
    <>
      <p className="flex-auto text-center font-mono md:w-full font-bold text-blue-700">
        {job}
      </p>
      <p className="flex-auto text-center font-mono font-medium text-blue-600">
        {subTitle}
      </p>
      <p className="flex-auto text-center font-mono font-medium text-blue-500">
        {location}
      </p>
      <p className="flex-auto text-center font-mono ml-4 mr-4">{infoText}</p>
    </>
  )
}

export default SubHeader
