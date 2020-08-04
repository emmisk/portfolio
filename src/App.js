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
        <div className="grid grid-cols-3 ">
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
        <h1 className="mt-2 text-black text-xl text-center uppercase">
          koistinenemmisofia@gmail.com
        </h1>
        <h1 className="text-black text-2xl text-center uppercase">
          +358 45 888 1335
        </h1>
      </div>
    </div>
    <Footer />
  </>
)

export default App
