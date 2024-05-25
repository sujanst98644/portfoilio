import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Skills from "./components/skills";
import Projects from "./components/projects";

function App() {
  return (
    <div className={`min-h-screen flex flex-col justify-center bg-[#CDE8E5]` }>
      <Header/>
      <Services/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
