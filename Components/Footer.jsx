"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineMail, MdOutlinePhone, MdOutlineLocationOn } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-[#1B7E44] text-white py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Coluna 1: Logo e Sobre */}
          <div>
            <Image src="/logo.png" width={50} height={50} alt="Logo" />
            <p className="text-white mb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              voluptate tenetur
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition">
                <AiFillInstagram />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-gray-400 transition">
                  Como funciona?
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400 transition">
                  Projetos em Destaque
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400 transition">
                  Parcerias
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400 transition">
                  Relação com a comunidade
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Informações */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <a href="/Admin" className="text-white hover:text-gray-400 transition">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400 transition">
                  Cultura
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400 transition">
                  Turismo
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:Secultmpe@gmail.com" className="flex items-center text-white hover:text-gray-400 transition">
                  <MdOutlineMail className="mr-2" size={20} />
                  Secultmpe@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+5585906875892" className="flex items-center text-white hover:text-gray-400 transition">
                  <MdOutlinePhone className="mr-2" size={20} />
                  (85) 90687-5892
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-white hover:text-gray-400 transition">
                  <MdOutlineLocationOn className="mr-2" size={20} />
                  794 Rua Major Agostinho
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Desenvolvido por */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Desenvolvido por</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/_devberg?utm_source=ig_web_button_share_sheet&igsh=YWwyNWsyM296Mnhu" target="_blank" className="flex items-center text-white hover:text-gray-400 transition">
                  <BsInstagram className="mr-3" size={15} />
                  <p>Wandemberg Viana</p>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/lxtycia_?igsh=OGNxcDgyOTcwNmIz" target="_blank" className="flex items-center text-white hover:text-gray-400 transition">
                  <BsInstagram className="mr-3" size={15} />
                  <p>Letycia Santos</p>
                </a>
              </li>
              <li>
            
                <a href="https://www.instagram.com/arimateia_maciel/?utm_source=ig_web_button_share_sheet" target="_blank" className="flex items-center text-white hover:text-gray-400 transition">
                  <BsInstagram className="mr-3" size={15} />
                  <p>Arimateia Maciel</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white pt-6 text-center text-white">
          <p>&copy; 2025 Secult Maranguape. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};


NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=1nL3__KPPt78UvYRa7ylSbnsVb-ICkxl78oPCRMUdwU


NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyB2HIdWKhsjXu182gWU6ApXt4yDyMgiYjw
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=qr-cultural-e8e71.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=qr-cultural-e8e71
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=qr-cultural-e8e71.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=53519925285
NEXT_PUBLIC_FIREBASE_APP_ID=1:53519925285:web:b09bd7227ff8c4a8c13fcc

CLOUDINARY_CLOUD_NAME=dtd3cpjas
CLOUDINARY_API_KEY=654816997116226
CLOUDINARY_API_SECRET=TqXG18wyHhDcwRNqDrClj_DZ1Zg

export default Footer;