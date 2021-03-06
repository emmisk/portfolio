import React, { Suspense, useState } from "react"
import Header from "./components/Header.js"
import Resume from "./components/Resume.js"
import Introduction from "./components/Introduction.js"
import Project from "./components/Project.js"
import ContactInfo from "./components/ContactInfo.js"
import Footer from "./components/Footer.js"
import face from "./assets/images/face.svg"
import artGallery from "./assets/images/artGallery.svg"
import MyImg from "./assets/images/me.jpg"


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)
const Info = () => {
  // const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const scrollTop = () => window.scrollTo({ top: document.scrollingElement.scrollHeight, behavior: "smooth" })
return (

  <div className="w-full grid-cols-3 gap-4 mt-4 md:mt-0 mb-2">
    <br />
    <p className="flex-auto text-center font-mono md:w-full font-bold text-2xl text-red-500">
    Who am I?
    </p>
    <br />
    <p className="flex-auto text-center font-mono">I'm Emmi Koistinen and I living in Helsinki, Finland. 
    I'm person who inspired by new things all the time and I always want to improve myself.
    I do my job carefully and always try to do my best. I like to solve problems and design different 
    things. 
    
    </p>
    <br />
    <p className="flex-auto text-center font-mono md:w-full font-bold text-2xl text-red-500">
    My skills
    </p>
    <br />
    <p className="flex-auto text-center font-mono">Programming languages: JavaScript(React), Java and SQL. </p>
    <p className="flex-auto text-center font-mono">Test automation: JUnit and Selenium. </p>
    <p className="flex-auto text-center font-mono">Marketing and analytics: SEO and making dashboards. </p>
    <p className="flex-auto text-center font-mono">Databases: PostgreSQL. </p>
    <p className="flex-auto text-center font-mono">Extra skills: google searching. </p>
    <br />
    <p className="flex-auto text-center font-mono md:w-full font-bold text-2xl text-red-500">
    Work History
    </p>
    <br />
    <p className="flex-auto text-center font-mono md:w-full font-bold text-blue-700">STUK - Säteilyturvakeskus</p>
    <p className="flex-auto text-center font-mono font-medium text-blue-500">System designer 10/2020 - 4/2021</p>
    <p className="flex-auto text-center font-mono">I made test automation with Java, JUnit and Selenium.</p>
    <br/>
    <p className="flex-auto text-center font-mono md:w-full font-bold text-blue-700">Isolta</p>
    <p className="flex-auto text-center font-mono font-medium text-blue-500">Marketin analyst 8/2018 - 1/2019</p>
    <p className="flex-auto text-center font-mono">I was part of marketing team and made dashboards about marketing data
    with my teammate.</p>
    <br />
    <p className="flex-auto text-center font-mono md:w-full font-bold text-2xl text-red-500">
    My hobbies
    </p>
    <p className="flex-auto text-center font-mono">My favorite hobbies are cycling, painting and playing on Xbox.</p>
    <br />
    <img className="object-none object-center " src={MyImg} alt="me"/>
    {/* <Button handleClick={scrollTop} text="Scroll top" /> */}
  </div>
)
}

const App = () => {
  const [show, setShow] = useState(null)

  const handleClick = () => {
    toggleInfo()
    scrollTop()
  } 

  const toggleInfo = () => (show === "info" ? setShow(null) : setShow("info"))
  const scrollTop = () => window.scrollTo({ top: document.scrollingElement.scrollHeight, behavior: "smooth" })

  return (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="md:flex mt-2">
        <div className="md:flex-shrink-0 md:w-1/2">
          <Resume handleClick={handleClick} 
            image={face}
            // href="https://emmikcv.netlify.app/"
            alt="My face"
            />
        </div>
        <div className="grid-cols-3 gap-4 mt-4 md:mt-0 mb-2">
          <Introduction />
          <Project
            projectHeader="Gallery for my art work"
            projectType="React App"
            projectColor="bg-yellow-400"
            image={artGallery}
            href="https://emmiart.netlify.app/"
            alt="My face"
            imageColor="bg-yellow-500"
            hoverColor="bg-yellow-600"
            />
          <ContactInfo />
        </div>
      </div>
      <div className="">
            {show === "info" && <Info />}
      </div>
      <Footer />
    </Suspense>
  </>
  )
  }

export default App
