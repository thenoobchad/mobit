import React from 'react'

interface ButtonType  {
  title: string
  style?: string
}

export const Button = ({ title, style }: ButtonType) => {
  return (
    <button className={` ${style} group items-center justify-center px-8 relative h-12 inline-flex w-fit overflow-hidden text-white font-semibold cursor-pointer rounded-sm` }>
              
              <span className="pointer-events-none absolute inset-0 bg-accent"
              style={{clipPath:'polygon(16px 0%, 100% 0%,100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%,0% 16px ',}}
              />
      <span className="relative z-10">{title}</span> </button>
  )
}
