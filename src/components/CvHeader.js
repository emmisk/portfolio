import React from "react"

const CvHeader = ({header, infoText}) => {
    return (
        <>
        <br />
        <p className="flex-auto text-center font-mono md:w-full font-bold text-2xl text-red-500">
        {header}
        </p>
        <br />
        <p className="flex-auto text-center font-mono">{infoText}</p>
        </>
        )
    }

export default CvHeader