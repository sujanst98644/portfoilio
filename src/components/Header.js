import { useState , useEffect} from 'react'
import React from 'react'
import Hamburger from 'hamburger-react'


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
  return (
    <main className=" bg-[#7AB2B2] rounded text-white p-[0_0_30px_0]">
    <header className={`sticky items-end  top-0 z-50 py-2 px-3 ${scrolled ? 'transition-colors bg-white text-black duration-1000 ease-in-out ' : ''}`}>
          <nav className=" flex flex-col mt-3 md:order-1 justify-between ">
              <div className="flex flex-row justify-between">
                  <div className="font-bold font-sora text-[23px] hover:underline hover:text-red-200">DIKSHYANTA LAMICHHANE</div>
              
                    <ul className={`w-full block lg:flex lg:flex-row lg:items-center lg:w-auto font-sora ${isshowmenu ? "block shadow-2xl h-20" : "hidden"}`}>
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
      </main>
  )
}
