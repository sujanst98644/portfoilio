import { useState , useEffect} from 'react'
import React from 'react'
import Hamburger from 'hamburger-react'
import { FaArrowAltCircleRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FaHand } from 'react-icons/fa6';


export default function Header() {
    const [isshowmenu,setshowmenu]=useState(false)
    const toogleMenu = () => {
        setshowmenu(!isshowmenu)
      }
      const [scrolled,setScrolled]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
          const isScrolled=window.scrollY>40
          if(isScrolled!==scrolled){
            setScrolled(isScrolled)
          }
        }
        window.addEventListener('scroll',handleScroll)
        return()=>{
          window.removeEventListener('scroll',handleScroll)
        }
      },[scrolled])
      const handleSendMessage = () => {
        window.open('https://www.facebook.com/messages/t/100065000725712', '_blank','noopener,noreferrer');
      };
  return (
    <main className=" bg-[#7AB2B2] text-white p-[0_0_30px_0]">
    <header className={`sticky top-0 z-50 py-3 px-2 lg:px-20 ${scrolled ? 'transition-colors bg-white text-black duration-1000 ease-in-out ' : ''}`}>
          <nav className=" flex flex-col mt-3 md:order-1 justify-between ">
              <div className="flex flex-row justify-between items-center">
                  <div className="font-bold font-sora text-[23px] hover:underline hover:text-red-200">DIKSHYANTA LAMICHHANE</div>
              
                    <ul className={`w-full block lg:flex lg:flex-row lg:items-center lg:w-auto font-sora ${isshowmenu ? "block shadow-2xl bg-[#7AB2B2] h-50 space-y-2 absolute top-20" : "hidden"}`}>
                        <li>
                            <a href="#home" className="hover:underline  hover:text-red-200 mx-3">Home</a>
                        </li>
                        <li>
                        
                        <a href="#skills" className="hover:underline hover:text-red-200 mx-3">Skills</a>
                        </li>
                        <li>
                        
                        <a href="#myprojects" className="hover:underline hover:text-red-200 mx-3">Projects</a>
                        </li>
                        <li>
                        
                        <a href="#blogs" className="hover:underline hover:text-red-200 mx-3">Blog</a>
                        </li>
                        <li>
                        
                        <a href="#about" className="hover:underline hover:text-red-200 mx-3">About</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline hover:text-red-200 mx-3">Contact</a>
                        </li>
                    </ul>
                    <div className='lg:hidden'> 
                    <Hamburger onToggle={toogleMenu}/>
                    </div>
                </div>
          </nav>
      </header>
      <div className="p-10 flex flex-col md:flex-row items-center bg-cover justify-center m-[100px_0_0_0] lg:px-20">
          <div className="md:w-1/2 flex justify-center">
              <img src='/1.jpg' alt={'picture1'} width={300} height={150} className='w-64 h-64 rounded-full shadow-slate-800'/>
          </div>
          <div className="md:w-1/2 md:pl-8">
              <h2 className="text-5xl font-bold mb-4 font-sora">Hi! I am </h2>
              <h1 className="text-6xl font-bold mb-4 font-playfair">Dikshyanta Lamichhane</h1>
              <h2 className="text-3xl font-sora mb-4 ">Software Developer</h2>
              <p className="text-xl">
                  Welcome to my portfolio! I&apos;m Dikshyanta, a passionate web developer with expertise in frontend technologies such as React,
                  and backend technologies like Node.js.
              </p>
              
                <div className="flex items-center space-x-4 my-5">
                <button onClick={handleSendMessage} className="border-2 shadow-2xl font-bold px-4 py-2 rounded-full hover:bg-blue-300">
                    <span className="flex items-center">
                        Say Hello <FaHand className="ml-2" />
                    </span>
                </button>

                <button className="border-2 shadow-2xl font-bold px-4 py-2 rounded-full hover:bg-blue-300">
                    <span className="flex items-center">
                        See Services <FaArrowAltCircleRight className="ml-2" />
                    </span>
                </button>
                </div>
            </div>

      </div>
      <div className="flex flex-row  ml-14 sm:ml-28 text-3xl">
                  <a href="https://www.facebook.com/dikshyanta.lamichhane.94">
                      <FaFacebook className="mr-10 sm:mr-5" />
                  </a>
                  <a href="https://www.instagram.com/uy_sagittarius_a?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                      <FaInstagram className="mr-10 sm:mr-5" />
                  </a>
                  <a href="https://twitter.com/DikshyantaLami3">
                      <FaTwitter className="mr-10 sm:mr-5" />
                  </a>
                  <a href="#linkedin">
                      <FaLinkedin className="mr-10 sm:mr-5" />
                  </a>

        </div>
      </main>
  )
}
