import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(1)
    return(
      <div >
          <h1 className='text-xl bg-red-300  px-2 py-1 rounded-md inline' onClick={()=> setCount(0)}>{count}</h1>
          <br />
          <button className='hover:text-red-300   rounded-full px-2 py-2' onClick={() => setCount((count) => count + 1)}>
            count({count}) +1 
          </button>
          <button className='hover:text-red-300 ' onClick={() => setCount((count) => count - 1)}>
            count({count}) -1 
          </button>
    </div>
    )
}

export default Counter;