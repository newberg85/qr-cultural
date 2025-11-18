"use client";
import React, { useState, useEffect } from "react";
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

  // menu de acessibilidade
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState(false);

  const changeFont = (delta) => {
    const newSize = Math.max(12, Math.min(24, fontSize + delta));
    setFontSize(newSize);
  };

  const toggleContrast = () => {
    setContrast(!contrast);
  };

  // Aplicar mudanças de acessibilidade quando o estado mudar
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    if (contrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  }, [contrast]);

  return (
    <header className="flex p-8">
      <div className="flex flex-col lg:flex-row font-medium text-sm z-20 justify-between items-center border border-gray-300 w-full px-4 lg:px-8 py-4 rounded-full">
        <div className="mb-4 lg:mb-0 text-2xl font-bold text-[#1B7E44]">QRCultural</div>
        
        {/* Menu de Acessibilidade
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <button 
            onClick={() => changeFont(-2)}
            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-300"
            aria-label="Diminuir fonte"
          >
            A-
          </button>
          <button 
            onClick={() => changeFont(2)}
            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-300"
            aria-label="Aumentar fonte"
          >
            A+
          </button>
          <button 
            onClick={toggleContrast}
            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-300"
            aria-label={contrast ? "Desativar alto contraste" : "Ativar alto contraste"}
          >
            Alto Contraste
          </button>
        </div> */}

        <nav>
          <ul className="flex space-x-4 lg:space-x-8 text-base">
            <li>
              <Link href="/">
                <span
                  className={`hover:text-[#1B7E44] transition duration-300 ease-in-out hover:scale-105 block ${
                    isActiveLink("/")
                      ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                      : "text-gray-400"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <span
                  className={`hover:text-[#1B7E44] transition duration-300 ease-in-out hover:scale-105 block ${
                    isActiveLink("/sobre")
                      ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                      : "text-gray-400"
                  }`}
                >
                  Sobre nós
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contato">
                <span
                  className={`hover:text-[#1B7E44] transition duration-300 ease-in-out hover:scale-105 block ${
                    isActiveLink("/contato")
                      ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                      : "text-gray-400"
                  }`}
                >
                  Contato
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;