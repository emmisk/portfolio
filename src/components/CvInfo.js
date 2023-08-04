import React, { useEffect, useRef } from "react"
import InfoText from "./InfoText"
import SubHeader from "./SubHeader"
import Image from "./Image"
import CvHeader from "./CvHeader"

const CvInfo = ({ scroll, setScroll }) => {
  const myRef = useRef(null)
  const scrollToRef = () => window.scrollTo(0, myRef.current.offsetTop)

  useEffect(() => {
    if (scroll) {
      scrollToRef(myRef)
      setScroll(false)
    }
  }, [myRef, scroll, setScroll])

  return (
    <div ref={myRef} className="md:grid grid-cols-2 p-4 bg-white">
      <div className="w-full">
        <CvHeader header="Who am I?" />
        <InfoText
          infoText="I'm Emmi Koistinen and I live in Helsinki, Finland. 
                I'm a creative person and I love to use my imagination with different things, for example when I'm painting and coding.
                I do my job carefully and always try to do my best. I have good problem solving skills because I like to search information over Internet, 
                talk with others and use my creativity (I also love games where I can solve puzzles). I have (often) good ideas and I enjoy 
                learning new skills and improve myself. My friends say that I have optimistic attitude and I always see a positive side to things."
        />
        <CvHeader header="My skills" />
        <SubHeader subTitle="Programming languages:" />
        <InfoText infoText=" JavaScript (React) and HubL syntax" />
        <SubHeader subTitle="Test automation:" />
        <InfoText infoText="JUnit and Selenium." />
        <SubHeader subTitle="MarTech:" />
        <InfoText infoText="HubSpot, SEO, marketing automation." />
        <SubHeader subTitle="Databases:" />
        <InfoText infoText=" PostgreSQL and SQL." />
        <SubHeader subTitle="Version control:" />
        <InfoText infoText="Git." />
        <SubHeader subTitle="Another skills:" />
        <InfoText infoText="Web accessibility, Google searching, ideation." />
        <CvHeader header="Education" />
        <SubHeader
          title="Karelia University of Applied Sciences"
          subTitle="Business Information Technology 8/2016–4/2020"
          location="Joensuu, Finland"
          infoText="I have done all of my
                studies remotely so I have a lot of experience about working
                independently. My thesis subject is enterprise application integration
                and data automation."
        />
        <CvHeader header="Work History" />
        <SubHeader
          title="Crasman Oy"
          subTitle="Web developer/HubSpot developer 6/2021–7/2023"
          location="Helsinki, Finland"
          infoText="I was a web developer with a focus on JavaScript and HubL syntax, 
          where accessibility was always a priority. 
          I excelled in developing custom modules and templates for HubSpot, 
          aligning content with branding and marketing objectives."
        />
        <br />
        <SubHeader
          title="STUK - Säteilyturvakeskus"
          subTitle="System designer 10/2020–4/2021"
          location="Helsinki, Finland"
          infoText="My primary responsibility was to test the laboratory 
          (measurement and analysis) information system, with a focus on 
          developing test automation. I utilized Java and Selenium components 
          to execute comprehensive test automation, ensuring the system's robustness 
          and reliability."
        />
        <br />
        <SubHeader
          title="Isolta Oy"
          subTitle="Marketin analyst 8/2018–1/2019"
          location="Helsinki, Finland"
          infoText="I was a part of the marketing team and collaborated with my teammates 
          to create comprehensive dashboards for analyzing marketing data. Working closely with my team, we 
          successfully designed and implemented data-driven dashboards that provided 
          valuable insights into marketing performance and facilitated data-based decision-making."
        />
        <CvHeader header="My hobbies" />
        <InfoText infoText="My favorite hobbies are cycling, painting and playing on Xbox." />
        <br />
      </div>
      <Image />
    </div>
  )
}

export default CvInfo
