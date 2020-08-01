import React from "react"
import Header from "./components/Header.js"
import Resume from "./components/Resume.js"
import Introduction from "./components/Introduction.js"
import Project from "./components/Project.js"
import Footer from "./components/Footer.js"
import face from "./assets/images/face.svg"
import artGallery from "./assets/images/artGallery.svg"

const App = () => (
  <>
    <Header />
    <div className="md:flex mt-2">
      <div className="md:flex-shrink-0 md:w-1/2">
        <Resume
          image={face}
          href="https://emmikcv.netlify.app/"
          alt="My face"
        />
      </div>
      <div className="grid-cols-3 gap-4 mt-4 md:mt-0 mb-2">
        <Introduction />
        <div className="grid grid-cols-3 mr-2 mt-2 ml-2">
          <div className="col-span-1 text-black text-center bg-yellow-300 p-2 shadow-inner">
            <div className="grid-cols-1">
              <p className="text-xl pl-2 mt-2 uppercase">
                Gallery for my art work
              </p>
              <p className="text-l pl-2 mt-2">React App</p>
              <p className="text-xl pl-2 mt-2"></p>
              <div className="text-white rounded-full flex items-center justify-center transition duration-200 ease-in-out bg-black hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110">
                <a
                  href="https://github.com/emmisk/art_gallery"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <Project
            image={artGallery}
            href="https://emmiart.netlify.app/"
            alt="My face"
            color="bg-yellow-400"
            hoverColor="bg-yellow-500"
          />
        </div>
        <div className="grid grid-cols-3 gab-2 mt-2 ml-2">
          <div className="col-span-1 col-span-2 text-center bg-green-200 shadow-inner">
            <p className="mt-4 text-green-800 text-lg">
              You can find my contact information in my resume.
            </p>
          </div>
          <div className="col-span-1 text-gray-700 text-center ml-2 mr-2 p-2 bg-red-200 shadow-inner">
            <p className="p-2">Thank you for your visit!</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
)

export default App
