import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <div className={`min-h-screen flex flex-col justify-center bg-[#CDE8E5]` }>
      <Header/>
      <Services/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
