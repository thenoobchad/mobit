import React from 'react'
import { Button } from './button'

type SubCardType = {
    id: string,
    plan: string,
    rate: number,
    min: number,
    max: number,
    interest: string
}

export const SubCard = ({plan, rate, min, max, interest}: SubCardType) => {
  return (
     <div className="bg-white min-w-[290px] sm:w-[280px] p-4 rounded-sm flex flex-col border border-zinc-200">
          <h4 className="text-center text-black/70 text-2xl">{plan}</h4>
          <p className="text-center text-6xl text-accent font-semibold pt-4 ">{rate}%</p>
                <p className="text-center text-black/70">Daily</p>
                <div className="py-8">
                  <ul className="flex flex-col gap-4">
                    <li className="flex w-full justify-between p-2 border-b-accent/10 border-b text-black/70 ">For <span>52 Times</span></li>
                  <li className="flex w-full justify-between p-2 border-b-accent/10 border-b text-black/70 ">Min <span>${min}</span></li>
                    <li className="flex w-full justify-between  p-2 border-b-accent/10 border-b text-black/70">For <span>$51.00</span></li>
                    <li className="flex w-full justify-between  p-2 border-b-accent/10 border-b text-black/70">Capital Back <span>No</span></li>
                  <li className="flex w-full justify-between  p-2 border-b-accent/10 border-b text-black/70">Interest <span>{interest}</span></li>
                  </ul>
                </div>
                <Button title="Invest Now" style="!w-full"/>
              </div>
  )
}
