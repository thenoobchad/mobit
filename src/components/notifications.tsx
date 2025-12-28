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

      console.log(randomIndex)
      setCurrentNotif(transactions[randomIndex]);
      setIsVisible(true);

      timeoutId = setTimeout(() => {
        setIsVisible(false);

        timeoutId = setTimeout(() => {
          setCurrentNotif(null);

          const delay = Math.random() * (5 - 2) + 2;
          timeoutId = setTimeout(showNotification, delay * 1000);
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
        className={`${isVisible ? "-translate-y-24" : ""} fixed -bottom-20 left-4 flex w-[200px] items-center justify-center rounded bg-white p-4 outline outline-zinc-300 transition-all! delay-200!`}
      >
        <p className="text-sm">
          {currentNotif.name} just made a {currentNotif.type} of ${currentNotif.amount} now
        </p>
      </div>}
    </div>
  );
};