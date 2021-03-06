import React from "react"
import MyImg from "../assets/images/me.jpg"

const Template = ({header}) => {

return (
    <>
    <div className="md:grid grid-cols-2">
    <div className="w-full ">
        <br />
        <p className="flex-auto text-center font-mono md:w-full font-bold text-2xl text-red-500">
        {header}
        </p>
        <br />
    </div>
    </div>
    </>
    )
}

const CvInfo = () => {
//   const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
// const scrollTop = () => window.scrollTo({ top: document.scrollingElement.scrollHeight, behavior: "smooth" })
return (
<>
<Template header="Who am I?"/>
    <div className="md:grid grid-cols-2">
    <div className="w-full ">
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
    <p className="flex-auto text-center font-mono">Programming languages: JavaScript, Java and SQL. </p>
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
    <br />
    <p className="flex-auto text-center font-mono">My favorite hobbies are cycling, painting and playing on Xbox.</p>
    <br />
    {/* <Button handleClick={scrollTop} text="Scroll top" /> */}
</div>
    <img className=" w-full" src={MyImg} alt="me"/>
</div>
</>
)
}

export default CvInfo