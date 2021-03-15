import React, { Suspense, useState } from "react"
import Header from "./components/Header.js"
import Resume from "./components/Resume.js"
import Introduction from "./components/Introduction.js"
import Project from "./components/Project.js"
import ContactInfo from "./components/ContactInfo.js"
import Footer from "./components/Footer.js"
import face from "./assets/images/face.svg"
import artGallery from "./assets/images/artGallery.svg"
import CvInfo from "./components/CvInfo.js"

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
            {show === "info" && <CvInfo />}
      </div>
      <Footer />
    </Suspense>
  </>
  )
  }

export default App
