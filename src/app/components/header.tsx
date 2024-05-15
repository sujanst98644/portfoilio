import React from 'react'
import {FaArrowAltCircleRight} from "react-icons/fa";


function Header() {
  return (
    <>  <header className="flex justify-between m-[0_0_120px_0]">
        <div className="font-semibold text-[42px] ">
            SUJAN THAPA
        </div>
          <div>
              <ul className="flex space-x-10 py-5">
                  <li>Home</li>
                  <li>Services</li>
                  <li>Benefits</li>
                  <li>About</li>
                  <li>FAQs</li>
              </ul>
          </div>
        </header>
        
        <section className="flex flex-row justify-between">
        <div>
        <h1 className="font-sora font-semibold text-[100px] tracking-[-4px] w-85 leading-none">
            SOFTWARE<br/>DEVELOPER<br/>&<br/>DESIGNER
        </h1>
        <p className='text-[36px]'>Talk With SUJAN</p>
        <button className="flex flex-row border border-black shadow-xl rounded-[50px] px-[23px] py-3 text-[20px] font-semibold font-sora">Say Hello <FaArrowAltCircleRight/></button>
        </div>
        <div>
            <img src='/vercel.svg' className="w-40"/>
        </div>
        <div>
            <ul className="flex flex-col">
                <li>instagram</li>
                <li>facebook</li>
                <li>linkedin</li>
                <li>twitter</li>
                <li>github</li>
            </ul>
        </div>
        </section>
        </>
  )
}

export default Header


