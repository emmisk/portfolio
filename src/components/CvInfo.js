import React from "react"
import MyImg from "../assets/images/me.jpg"

const Header = ({header, infoText}) => {
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

const InfoText = ({infoText}) => {
return (
    <>
    <p className="flex-auto text-center font-mono">{infoText}</p>
    </>
    )
}

const SubHeader = ({job, titleAndDate, infoText}) => {
return (
    <>
    <p className="flex-auto text-center font-mono md:w-full font-bold text-blue-700">{job}</p>
    <p className="flex-auto text-center font-mono font-medium text-blue-500">{titleAndDate}</p>
    <p className="flex-auto text-center font-mono">{infoText}</p>
    </>
    )
}

const Image = ({}) => {
return (
    <>
    <img className=" w-full" src={MyImg} alt="me"/>
    </>
    )
}

const CvInfo = () => {

return (
<>
    <div className="md:grid grid-cols-2">
        <div className="w-full ">
            <Header 
                header="Who am I?"
            />
            <InfoText 
                infoText="I'm Emmi Koistinen and I living in Helsinki, Finland. 
                I'm person who inspired by new things all the time and I always want to improve myself.
                I do my job carefully and always try to do my best. I like to solve problems and design different 
                things."
            />
            <Header 
                header="My skills"
            />
            <InfoText 
                infoText="Programming languages: JavaScript, Java and SQL."
            />
            <InfoText 
                infoText="Test automation: JUnit and Selenium. "
            />
            <InfoText 
                infoText="Marketing and analytics: SEO and making dashboards."
            />
            <InfoText 
                infoText="Databases: PostgreSQL. "
            />
            <InfoText 
                infoText="Extra skills: google searching."
            />
            <Header 
                header="Work History"
            />
            <SubHeader
                job="STUK - Säteilyturvakeskus"
                titleAndDate="System designer 10/2020 - 4/2021"
                infoText="I made test automation with Java, JUnit and Selenium." 
            />
            <br />
            <SubHeader
                job="Isolta Oy"
                titleAndDate="Marketin analyst 8/2018 - 1/2019"
                infoText="I was part of marketing team and made dashboards about marketing data
                with my teammate." 
            />
            <Header 
                header="My hobbies"
            />
            <InfoText
                infoText="My favorite hobbies are cycling, painting and playing on Xbox."
            />
        </div>
        <Image />
    </div>
</>
)
}

export default CvInfo