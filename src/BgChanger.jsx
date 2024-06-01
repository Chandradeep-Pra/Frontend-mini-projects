import React, { useState } from 'react'

function BgChanger() {
    const [color, setColor] = useState("Cyan");
    const colorNames = ['Green', 'Yellow', 'Blue', 'Red', 'Orange', 'Purple', 'Pink', 'Cyan', 'Magenta'];
    const handleChange = (color) => {
        setColor(color);
    }
    return (
        <div className="w-full h-full duration-200 rounded-2xl"
            style={{ backgroundColor: color }}>

            <div className='relative bg-zinc-700 h-1/6 flex flex-wrap gap-2 rounded-t-xl '>
                {colorNames.map((color, index) => (
                    <button key={index} className={`bg-blue-900 px-2 m-2 rounded-2xl h-5/6 w-1/12 hover:border-2  hover:border-${color.toLowerCase()}-700 duration-500 hover:shadow-inner hover:shadow-${color.toLowerCase()}-500/50 text-white`} onClick={()=>handleChange(color)}>
                        {color}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default BgChanger

