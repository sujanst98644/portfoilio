import React from 'react'


function Meow(props) {
  return (
    <div className="flex justify-center items-center">
        <div className="bg-[#4D869C] my-3 rounded w-52 h-72 shadow-xl bg-cover"
          style={{ backgroundImage : props.item.Img}}>
          <p className="ml-3 mt-5 shadow-xl">{props.item.title}</p>
        </div>
    </div>
  )
}

export default Meow