import React from 'react';
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import {FaGit, FaHtml5, FaNode} from "react-icons/fa"
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { DiResponsive } from "react-icons/di";


const Skills = () => {

  return (
    <section id="skills" className="my-8 flex flex-col items-center text-black ">
      <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" className="text-xl font-bold sm:text-xl m-10">MY SKILLS</text>

      <ul className="flex flex-wrap gap-8 justify-center">
        <li className=" flex flex-row"><TbBrandJavascript className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pl-2  pt-0 sm:pt-2">JavaScript</p></li>
        <li className="flex flex-row"><RiReactjsLine className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pl-2 pt-0 sm:pt-2"> React.js</p></li>
        <li className="flex flex-row"><FaHtml5 className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pt-0 sm:pt-2 pl-2">HTML5</p></li>
        <li className="flex flex-row"> <SiTailwindcss className="text-2xl sm:text-5xl" /> <p className="text-xl sm:text-3xl pl-2 pt-0 sm:pt-2">CSS3</p></li>
        <li className="flex flex-row"><FaNode className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pt-0 sm:pt-2 pl-2">Node.js </p></li>
        <li className="flex flex-row"><SiExpress className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pt-0 sm:pt-2 pl-2"> Express.js</p></li>
        <li className="flex flex-row"><DiResponsive className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pl-2 pt-0 sm:pt-2"> Responsive Web Design</p></li>
        <li className="flex flex-row"><FaGit className="text-2xl sm:text-5xl" /><p className="text-xl sm:text-3xl pt-0 sm:pt-2 pl-2">Version Control</p></li>
      </ul>
      </section>
  )
}

export default Skills