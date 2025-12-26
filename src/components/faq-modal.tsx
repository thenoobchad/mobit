"use client"

import { ChevronRight, ChevronUp, CircleQuestionMark } from "lucide-react"
import { useState } from "react"

interface FaqModalType {
    title: string,
    description: string
}

export const FaqModal = ({ title, description }: FaqModalType) => {
    
    const [view, setView] = useState(false)
    return (
      <div className="max-w-[600px] mx-auto sm:max-w-[800px] w-full">
        <div key={title} className="flex justify-between w-full items-center border-b border-black/5 bg-white p-3">
            <h1 className="rounded-sm flex gap-4 items-center"><span><CircleQuestionMark/></span>{title}</h1>
          <span onClick={() => setView(prev => !prev)}>{!view ? <ChevronRight /> : <ChevronUp/>}</span>
            </div>
            <div>
                <p className={`${view ? "flex  " : "hidden"} transition-all delay-400 ease-in-out p-3 bg-white rounded-sm text-black/60 text-[14px] text-justify`}>
                    {description}
                </p>
            </div>
    </div>
  )
}
