import React from "react"
import InfoText from "./InfoText";
import SubHeader from "./SubHeader"
import Image from "./Image"
import CvHeader from "./CvHeader"

const CvInfo = () => {

return (
    <div className="md:grid grid-cols-2">
        <div className="w-full ">
            <CvHeader 
                header="Who am I?"
            />
            <InfoText 
                infoText="I'm Emmi Koistinen and I living in Helsinki, Finland. 
                I'm person who inspired by new things all the time and I always want to improve myself.
                I do my job carefully and always try to do my best. I like to solve problems and design different 
                things."
            />
            <CvHeader 
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
            <CvHeader 
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
            <CvHeader 
                header="My hobbies"
            />
            <InfoText
                infoText="My favorite hobbies are cycling, painting and playing on Xbox."
            />
        </div>
        <Image />
    </div>
    )
}

export default CvInfo