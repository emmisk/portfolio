import React, { Suspense, useState } from "react"
import Header from "./components/Header.js"
import Introduction from "./components/Introduction.js"
import Project from "./components/Project.js"
import Footer from "./components/Footer.js"
import face from "./assets/images/face.svg"
import artGallery from "./assets/images/artGallery.svg"
import CvInfo from "./components/CvInfo.js"
import ResumeProject from "./components/ResumeProject.js"

const App = () => {
  const [show, setShow] = useState(null)

  const handleClick = () => {
    if(show){
      toggleInfo()
    }else{
      toggleInfo()
      scrollDown()
    }
  } 

  const toggleInfo = () => (show === "info" ? setShow(null) : setShow("info"))
  const scrollDown = () => window.scrollTo({ top: document.scrollingElement.scrollHeight, behavior: "smooth" })

  return (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Header/>
      <div className="md:flex md:grid-cols-2 bg-black">
          <div className="md:w-1/2 grid-flow-col grid-cols-3 gap-2">
          <ResumeProject 
          projectHeader="Portfolio"
          projectType="React, Tailwind CSS"
          projectColor="bg-red-200"
          image={face}
          handleClick={handleClick} />
        </div>
        <div className="md:w-1/2 grid-flow-col grid-cols-3 gap-2">
          <Introduction />
          <Project
            projectHeader="Gallery for my art work"
            projectType="React App"
            projectColor="bg-yellow-400"
            image={artGallery}
            href="https://emmiart.netlify.app/"
            alt="My face"
            imageColor="bg-yellow-500"
            // hoverColor="bg-yellow-600"
            />
        </div>
      </div>
      <div className="">
            {show === "info" && <CvInfo />}
      </div>
      <Footer />
    </Suspense>
  </>
  )
  }

export default App
