import React from 'react'
import Header  from "./components/header";
import Aboutme  from "./components/aboutme";
import Recentworks from './components/recentworks';
import Contact from './components/contact';
import Skills from './components/skills';
import Reference from './components/reference';
import Awards from './components/honor&awards';
import Blogs from './components/blogs';
import Footer from './components/footer';


export default function Home() {
  return (
    <main className="flex flex-col mx-[6.81vh] font-sora">
      <Header/>
      <Aboutme/>
      <Recentworks/>
      <Reference/>
      <Awards/>
      <Blogs/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  );
}
