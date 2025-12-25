"use client"

import { Dispatch, SetStateAction, useState } from "react"

type MobileMenuType = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const MobileMenu = ({isOpen, setIsOpen}: MobileMenuType) => {


  return (
      <div onClick={() => setIsOpen(prev => !prev)} className="flex h-[20px] items-center justify-center  flex-col  gap-1 relative z-40">
          <div  className={`${isOpen && "rotate-45  translate-y-1 "} transition-all ease-linear delay-150 w-7 h-1 bg-accent rounded-sm`} />
          <div className={`${isOpen && "-rotate-45 -translate-y-1  mb-2"} transition-all delay-150 w-7 h-1 bg-accent rounded-sm`} />
    </div>
  )
}
