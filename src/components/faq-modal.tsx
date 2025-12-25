"use client"

import { useState } from "react"

interface FaqModalType {
    title: string,
    description: string
}

export const FaqModal = ({ title, description }: FaqModalType) => {
    
    const [view, setView] = useState(false)
    return (
      <div className="max-w-[500px] mx-auto sm:max-w-[600px] w-full">
        <div key={title} className="flex justify-between w-full items-center border-b border-black/5 bg-white p-3">
            <h1 className="rounded-sm">{title}</h1>
            <span onClick={() => setView(prev => !prev)}>icon</span>
            </div>
            <div>
                <p className={`${view ? "flex  " : "hidden"} transition-all delay-400 ease-in-out p-3 bg-white rounded-sm text-black/60 text-[14px] text-justify`}>
                    {description}
                </p>
            </div>
    </div>
  )
}
