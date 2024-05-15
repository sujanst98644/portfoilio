import { Main } from 'next/document'
import React from 'react'

function Aboutme() {
  return (
    <main className=" text-center m-5">
        <h1 className="font-semibold text-3xl tracking-tighter">About Me</h1>
        <div className="flex flex-row">
            <img src="/next.svg" className="w-60"/>
            <p>A good example of a paragraph contains a topic sentence, details and a conclusion. 
                'There are many different kinds of animals that live in China. Tigers and leopards 
                are animals that live in China's forests in the north. In the jungles, monkeys swing 
                in the trees and elephants walk through the brush.
            </p>
        </div>
    </main>
  )
}

export default Aboutme