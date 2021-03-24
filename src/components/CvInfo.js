import React from "react"
import InfoText from "./InfoText";
import SubHeader from "./SubHeader"
import Image from "./Image"
import CvHeader from "./CvHeader"

const CvInfo = () => {

return (
    <div className="md:grid grid-cols-2 p-4">
        <div className="w-full">
            <CvHeader 
                header="Who am I?"
            />
            <InfoText 
                infoText="I'm Emmi Koistinen and I living in Helsinki, Finland. 
                I'm creative person and I love to use my imagination with different things, for example when I painting and coding.
                I enjoy to learn new things and improve myself.
                I do my job carefully and always try to do my best. I have good problem solving skills because I like to 
                research information and find solutions (I also love games where I can solve puzzles)."
            />
            <CvHeader 
                header="My skills"
            />
            <SubHeader 
            subTitle="Programming languages:"
            />
            <InfoText 
                infoText=" JavaScript and Java."
            />
            <SubHeader 
            subTitle="Test automation:"
            />
            <InfoText 
                infoText="JUnit and Selenium."
            />
            <SubHeader 
            subTitle="Marketing and analytics:"
            />
            <InfoText 
                infoText=" SEO and making dashboards."
            />
            <SubHeader 
            subTitle="Databases:"
            />
            <InfoText 
                infoText=" PostgreSQL and SQL."
            />
            <SubHeader 
            subTitle="Version control:"
            />
            <InfoText 
                infoText="Git."
            />
            <SubHeader 
            subTitle="Another skills:"
            />
            <InfoText 
                infoText=" google searching."
            />
            <CvHeader 
                header="Education"
            />
            <SubHeader
                job="Karelia University of Applied Sciences"
                subTitle="Business Information Technology 8/2016–4/2020"
                location ="Joensuu, Finland"
                infoText="I have done all of my
                studies remotely so I have a lot of experience about working
                independently. My thesis subject is Enterprise Application Integration
                and data automation." 
            />
            <CvHeader 
                header="Work History"
            />
            <SubHeader
                job="STUK - Säteilyturvakeskus"
                subTitle="System designer 10/2020–4/2021"
                location ="Helsinki, Finland"
                infoText="I made test automation with Java, JUnit and Selenium. " 
            />
            <br />
            <SubHeader
                job="Isolta Oy"
                subTitle="Marketin analyst 8/2018–1/2019"
                location ="Helsinki, Finland"
                infoText="I was part of marketing team and made dashboards about marketing data
                with my teammate. I also develop search engine optimization process." 
            />
            <CvHeader 
                header="My hobbies"
            />
            <InfoText
                infoText="My favorite hobbies are cycling, painting and playing on Xbox."
            />
            <br />
        </div>
        <Image />
    </div>
    )
}

export default CvInfo