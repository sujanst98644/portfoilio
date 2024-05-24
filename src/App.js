import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  return (
    <div className={`min-h-screen flex flex-col justify-center bg-[#CDE8E5]` }>
      <Header/>
      <Services/>
    </div>
  );
}

export default App;
