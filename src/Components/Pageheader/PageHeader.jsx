import React from 'react'

export const PageHeader = ({Pagename}) => {
  return (
    <div>
    <div className="w-full h-64 flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold">{Pagename}</h1>
      <p className="text-gray-500 mt-2">
        Home <span className="mx-2">&gt;</span> {Pagename}
      </p>
    </div>
    </div>
  )
}
