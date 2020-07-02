import React from "react"
import Header from "./components/Header.js"
import Section from "./components/Section.js"
import face from "./assets/images/face.svg"
import artGallery from "./assets/images/artGallery.svg"

const App = () => (
  <div className="">
    <div className="p-2 text-black  text-5xl text-center uppercase">
      <Header />
    </div>
    <div className="md:flex mt-2">
      <div className="md:flex-shrink-0 md:w-1/2">
        <div className="md:w-full shadow-inner transition duration-500 ease-in-out bg-red-200 hover:bg-red-300 transform hover:-translate-y-1 hover:scale-90 ...">
          <Section
            image={face}
            href="https://emmikcv.netlify.app/"
            alt="My face"
          />
        </div>
      </div>
      <div className="grid-cols-3 gap-4 mt-4 md:mt-0 mb-2 ">
        <p className="text-gray-700 text-center bg-teal-300 p-8 shadow-inner">
          Hey, I'm Emmi! This is my portfolio page. You can find my resume and
          projects over here.
        </p>
        <div className="grid grid-cols-3 mr-2 mt-2 ml-2">
          <div className="col-span-1 ... text-gray-700 text-center bg-yellow-300 p-2 shadow-inner">
            <p className="mt-14">React App. Gallery for my art work. -></p>
          </div>
          <div class="mr-2 col-span-1 col-span-2 transition duration-500 ease-in-out bg-yellow-400 hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-90 ...">
            <Section
              image={artGallery}
              href="https://emmiart.netlify.app/"
              alt="My face"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gab-2 mt-2 ml-2 h-24 ">
          <div className="col-span-1 col-span-2 ... text-black-700 text-center bg-green-200 p-2 shadow-inner">
            <p>test</p>
          </div>
          <div className="col-span-1 ... text-gray-700 text-center ml-2 mr-4 bg-red-200 p-2 shadow-inner">
            <p className="mt-14">test</p>
          </div>
        </div>
      </div>
    </div>
    <div className=" p-8 mt-2"></div>
  </div>
)

export default App
