"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  // linkando caminhos para ficarem ativos
  const pathname = usePathname();
  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // menu de acessiblidade
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState(false);

  const changeFont = (delta) => {
    setFontSize((prev) => Math.max(12, prev + delta));
    document.documentElement.style.fontSize = `${fontSize + delta}px`;
  };

  const toggleContrast = () => {
    setContrast(!contrast);
    document.body.classList.toggle("high-contrast");
  };

  return (
    <header className="flex p-20">
      <div className="flex flex-row font-medium text-sm z-20 justify-end items-center border-1 border-gray-500 w-full p-4 rounded-full">
        <ul className="flex space-x-8 text-base">
          <Link href="/">
          <li
            className={`high-contrasttext-[#4B4B4B] hover:text-[#1B7E44] ${
              isActiveLink("/")
                ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                : ""
            }`}
          >
            Home
          </li>
          </Link>
          <Link href="/sobre" className="">
          <li
              className={`text-gray-400 high-contrasttext-[#4B4B4B] hover:text-[#1B7E44] ${
                isActiveLink("/sobre")
                  ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                  : ""
              }`}
            >
              Sobre nós
          </li>
          </Link>

          <Link href="/contato" className="">
            <li
              className={`text-gray-400 high-contrasttext-[#4B4B4B] hover:text-[#1B7E44] ${
                isActiveLink("/contato")
                  ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                  : ""
              }`}
            >
              Contato
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
