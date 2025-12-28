"use client";

import { useEffect, useState } from "react";


type TransactionsType = DataType[];

type DataType = {
  name: string;
  type: string;
  amount: number;
};

export const Notifications = ({
  transactions,
}: {
  transactions: TransactionsType;
}) => {
  const [currentNotif, setCurrentNotif] = useState<DataType | null>(null);
 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (transactions.length === 0) return;
    let timeoutId: any;

    const showNotification = () => {  
      const randomIndex = Math.floor(Math.random() * transactions.length)

    
      setCurrentNotif(transactions[randomIndex]);
      setIsVisible(true);

      timeoutId = setTimeout(() => {
        setIsVisible(false);

        timeoutId = setTimeout(() => {
          setCurrentNotif(null);

          const delay = Math.random() * 4000 + 1000;
          timeoutId = setTimeout(showNotification, delay );
        }, 500);
      }, 2000);
    };

    const initialDelay = Math.floor(Math.random() * 4000) + 1000;
    timeoutId = setTimeout(showNotification, initialDelay)

    return () => clearTimeout(timeoutId);
  }, [transactions]);

  if (transactions.length === 0) return null;
  
  return (
    <div>
      {currentNotif && <div
        className={`${isVisible ? "-translate-y-24" : ""} fixed -bottom-20 left-4 flex w-[200px] items-center justify-center  bg-blue-800 text-white p-2 outline outline-blue-900 transition-all! delay-200! z-900`}
      >
        <p className="text-xs font-semibold">
          <span>{currentNotif.name}</span> just made a {currentNotif.type} of <span className="font-extrabold ">${currentNotif.amount}</span> just now.
        </p>
      </div>}
    </div>
  );
};