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
    <div ref={myRef} className="md:grid grid-cols-2 p-4">
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
        <InfoText infoText=" JavaScript (React) and Java." />
        <SubHeader subTitle="Test automation:" />
        <InfoText infoText="JUnit and Selenium." />
        <SubHeader subTitle="Marketing and analytics:" />
        <InfoText infoText=" SEO and making dashboards." />
        <SubHeader subTitle="Databases:" />
        <InfoText infoText=" PostgreSQL and SQL." />
        <SubHeader subTitle="Version control:" />
        <InfoText infoText="Git." />
        <SubHeader subTitle="Another skills:" />
        <InfoText infoText=" google searching, ideation." />
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
          title="STUK - Säteilyturvakeskus"
          subTitle="System designer 10/2020–4/2021"
          location="Helsinki, Finland"
          infoText="My task was to test the laboratory (measurement and analysis) information system and develop test automation. 
          I executed test automation with Java language and Selenium components. 
          I also documented the detected error situations
          in the system."
        />
        <br />
        <SubHeader
          title="Isolta Oy"
          subTitle="Marketin analyst 8/2018–1/2019"
          location="Helsinki, Finland"
          infoText="I was part of marketing team and made dashboards about marketing data
                with my team mate. I also developed search engine optimization process."
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
