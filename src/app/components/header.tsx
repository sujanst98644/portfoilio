import React from 'react'

function Header() {
  return (
    <>  <header className="flex justify-between m-[0_0_151px_0]">
        <div className="font-semibold text-[42px] ">
            SUJAN THAPA
        </div>
          <div>
              <ul className="flex space-x-10">
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
        <h1 className="font-sora font-semibold text-[100px] tracking-[-4px] w-85 spacing-y-0">
            SOFTWARE<br/>DEVELOPER<br/>&<br/>DESIGNER
        </h1>
        <p>Talk With SUJAN</p>
        <button className=" border border-black shadow-xl rounded-full px-2 py-1">Say Hello</button>
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


