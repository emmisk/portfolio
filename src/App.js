import React, { Suspense, useState } from "react"
import Header from "./components/Header.js"
import Project from "./components/Project.js"
import Footer from "./components/Footer.js"
import face from "./assets/images/face.svg"
import artGallery from "./assets/images/artGallery.svg"
import CvInfo from "./components/CvInfo.js"
import ResumeProject from "./components/ResumeProject.js"

const App = () => {
  const [show, setShow] = useState(null)
  const [scroll, setScroll] = useState(false)
  const toggleInfo = () => (show === "info" ? setShow(null) : setShow("info"))
  const renderLoader = () => <p>Loading...</p>

  const handleClick = () => {
    if (show) {
      toggleInfo()
    } else {
      toggleInfo()
      setScroll(true)
    }
  }

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <Header />
        <div className="md:flex md:grid-cols-2 bg-black">
          <div className="md:w-1/2 lg:mr-8 lg:ml-8 md:mr-8 md:ml-8">
            <ResumeProject
              alt="My resume"
              imageColor="bg-red-300"
              hoverColor="bg-red-200"
              image={face}
              handleClick={handleClick}
            />
          </div>
          <div>
            <Project
              projectHeader="Gallery for my art work"
              projectType="React App"
              projectColor="bg-yellow-400"
              image={artGallery}
              href="https://emmiart.netlify.app/"
              alt="My Art Gallery"
              imageColor="bg-yellow-500"
              // hoverColor="bg-yellow-600"
            />
          </div>
        </div>
        <div>
          {show === "info" && <CvInfo scroll={scroll} setScroll={setScroll} />}
        </div>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
