"use client";

import { useEffect, useState } from "react";





type TransactionsType =  DataType[]

  type DataType = {
    name: string;
    type: string;
    amount: number;
  };


export const Notifications = ({transactions}:{transactions: TransactionsType}) => {
    const [isActive, setIsActive] = useState<DataType | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0)


    useEffect(() => {
        if(transactions.length === 0) return
        let timeoutId: any

        const showNotification = () => {
            setIsActive(transactions[currentIndex])

            timeoutId = setTimeout(() => {
              setIsActive(null)
              
              setCurrentIndex((prev) => (prev + 1) % transactions.length)
             

              const randomDelay = Math.random() * (5 - 2) + 2
              
              timeoutId = setTimeout(showNotification, randomDelay * 2000)
              
              
            }, 2000)
        }

        
        const initialDelay = Math.random() * (5 - 2) + 2;
        timeoutId = setTimeout(showNotification, initialDelay * 1000)

        return () => clearTimeout(timeoutId)
    }, [transactions])
  
  if (transactions.length === 0) return null;
  const {name, amount, type} = transactions[currentIndex]
  return (
    <div>
          <div className={`${isActive ? "-translate-y-24":""} fixed -bottom-20 left-4 flex  w-[200px] items-center transition-all! delay-200! justify-center bg-white outline p-4 rounded outline-zinc-300`}>
        <p className="text-sm">{name} just made a {type} of ${amount} now</p>
          </div>
    </div>
  );
};