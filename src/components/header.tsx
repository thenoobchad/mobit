"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


import { Button } from "./button";
import { MobileMenu } from "./mobile-menu";


const menu = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Packages",
    href: "packages",
  },
  {
    name: "FAQs",
    href: "faqs",
  },
  {
    name: "Help",
    href: "help",
  },
];

export const Header = () => {
  const [isActive, setIsActive] = useState("home")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // const fetchUser = async () => {
    //   const user = await getCurrentUserById();
    // };

    // fetchUser()
  }, [])
 
  
  
  return (
    <header className="bg-white top-0 z-20 h-21 border-b border-zinc-300 sticky">
      <div className="flex items-center justify-between max-w-5xl mx-auto px-5 sm:px-3 py-3 mt-2 w-full font-mono">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-zinc-800 p-2 tracking-wider ">MOBIT.IO</Link>


        <div className="flex">
        {/* Nav links */}
          <nav className="hidden sm:flex items-center gap-6">
            <ul className="flex gap-4">{menu.map((nav) => (
              <li className={`cursor-pointer ${isActive && isActive === nav.href ? "underline": "text-black/50"}`} key={nav.href}
                onClick={() => {
                setIsActive(nav.href)
              }}
              >{nav.name}</li>
            ))}
            </ul>
            <Button title="Sign in"/>
        </nav>
        {/* Mobile Nav */}
          <div className="flex sm:hidden w-full">
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className={`absolute transition-all delay-150 right-0 bg-white w-full ${isOpen ? "translate-y-10" : "-translate-y-120"} rounded-sm`}>
              <ul className="p-4 space-y-8">
               
                  {menu.map((nav) => (
                    <li className={`cursor-pointer ${isActive && isActive === nav.href ? "underline" : "text-black/50"}`} key={nav.href}
                      onClick={() => {
                        setIsActive(nav.href)
                        setIsOpen(false)
                      }}
                    >{nav.name}</li>
                  ))}
                <Button title="Sign in" />
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit error ad atque, esse blanditiis officia.</p>
              </ul>
             
            </div>
          </div>
          </div>
      </div> 
    </header>
  );
};