import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className={`min-h-screen flex flex-col justify-center bg-[#EEF7FF]` }>
      <Header/>
      <div className="bg-[#CDE8E5]">
      <Services/>
      <Skills/>
      </div>
      <Projects/>
      <Blogs/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
