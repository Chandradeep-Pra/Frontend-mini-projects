import React from 'react'

function SmallCard({projectName="New Project",children}) {
  return (
    <div className='card flex flex-col'>
        <h1 className='text-white text-xl underline underline-offset-1 mb-2'>{projectName}</h1>
        <div>{children}</div>
    </div>
  )
}

export default SmallCard