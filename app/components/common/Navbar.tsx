"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
// import Logo from "@/public/assets/images/SINC LOGO black outline 1.png";
import Logo from "@/public/assets/images/Sinc Logo.png";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "About", path: "" },
    { title: "SIP", path: "" },
    { title: "Studio", path: "" },
    { title: "SEEQ", path: "" },
    { title: "Platforms", path: "" },
    { title: "Initiatives", path: "" },
    { title: "More", path: "" },
  ];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".menu-btn")) setState(false);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav
      className={`bg-white lg:pb-0 lg:max-h-[100px] max-h-[95px] shadow-md text-base sticky top-0 z-[999] ${
        // bg-[#F9F9F9]
        state
          ? "shadow-lg rounded-xl pb-5 h-full max-h-fit border mx-2 lg:border-none"
          : ""
      }`}
    >
      <div className="gap-x-10 items-center max-w-[1480px] mx-auto px-4 lg:flex lg:px-8">
        <div className="flex items-center justify-between py-5 lg:py-2 lg:block">
          <Link href="/">
            <Image
              src={Logo}
              width={114}
              height={64}
              // className="w-[114px] h-[64px]"
              alt="SINC Logo"
            />
          </Link>
          <div className="lg:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 items-center mt-8 lg:mt-0 lg:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="justify-center items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-[#212121] hover:text-[#212121]/90 font-medium"
                >
                  <Link
                    href={item.path}
                    className="block active:scale-95 duration-150"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-4 lg:flex lg:space-y-0 lg:mt-0">
            <Link
              href=""
              className="flex lg:inline-flex items-center justify-center py-[15px] px-[20px] text-white font-medium bg-[#20888F] hover:bg-[#20888F]/90 active:bg-[#20888F] rounded-full active:scale-95 duration-150"
            >
              SINC With Us
            </Link>
            <Link
              href=""
              className="flex lg:inline-flex items-center justify-center py-[15px] px-[20px] text-white font-medium bg-[#303030] hover:bg-[#303030]/90 active:bg-[#303030] rounded-full active:scale-95 duration-150"
            >
              Apply to SIP 1.0
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
