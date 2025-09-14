"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {  IconPackage } from "@tabler/icons-react";

import { logout } from "@/actions/auth";
import { User } from "@/db/schema";

interface NavHeaderProp {
  user?: User;
}

export const NavHeader = ({ user }: NavHeaderProp) => {
  const [userData, setUserData] = useState<User | undefined>(undefined);

  const [header, setHeader] = useState<boolean>(false);

  const [path, setPath] = useState<boolean | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 40 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (pathname === "/login") {
      setPath(null);
    } else if (pathname === "/dashboard") {
      setPath(null);
    } else if (pathname === "/") {
      setPath(true);
    }
  }, [pathname]);

  useEffect(() => {
    setUserData(user);
  }, []);

  return (
    <div
      className={`bg-transparent ${header ? "fixed top-0 flex w-full" : "flex"} ?`}
    >
      {path && (
        <div className="flex h-22 border-b border-zinc-200 w-full items-center justify-between px-4 font-semibold">
          <Link href="/" className="flex gap-2">
            <IconPackage />
            Mobit
          </Link>

          {/* Nav menu */}
          <div className="flex gap-4 font-semibold">
            <ul className="flex gap-4">
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#services" className="hover:underline">
                Service
              </a>
              <a href="#investment" className="hover:underline">
                Plans
              </a>
              <a href="#faq" className="hover:underline">
                FAQs
              </a>
            </ul>
            {!!userData ? (
              <div className="flex gap-3">
                <Link href="/dashboard" className="cursor-pointer">
                  Dashboard
                </Link>
                <button className="cursor-pointer" onClick={() => logout()}>
                  Sign out
                </button>
              </div>
            ) : (
              <Link href="/login">Sign In</Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};