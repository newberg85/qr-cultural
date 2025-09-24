import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react';
import Form from 'next/form';
import { FaInstagram, FaYoutube, FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

export default function Home() {
  return (

    
    <div className="font-sans flex flex-col min-h-screen w-full">
      <div className="border-r-4 w-[400px] border-green-">
        
      
      <div className="flex flex-row w-full justify-center items-center">
        <div className="w-[600px] m-10">
          <Form action="" className="flex flex-col py-[45px] px-[65px] rounded-4xl">
            <h2 className="text-[#10783b] text-4xl font-bold text-center">Entre em contato</h2>
            <p className="text-gray-400 mb-4 text-lg text-center">Compartilhe sua ideia ou pergunta conosco</p>
            <div className="flex space-x-4 justify-center">
              <input type="text" placeholder="Nome" className="border-2 border-gray-300 rounded-full py-2 px-5 mb-4"/>
              <input type="text" placeholder="Sobrenome" className="border-2 border-gray-300 rounded-full py-2 px-5 mb-4"/>
            </div>
            <div className="flex items-center border-2 border-gray-300 rounded-full px-4 mb-4">
              <GoMail className="text-gray-700 mr-3" />
              <input type="email" placeholder="Seu e-mail" className="flex-1 outline-none py-2"/>
            </div>
            <div className="flex items-center border-2 border-gray-300 rounded-full px-4 mb-4">
              <FaPhoneAlt className="text-gray-700 mr-3"/>
              <input type="tel" placeholder="Número" className="flex-1 outline-none py-2"/>
            </div>
            <textarea rows="7" maxLength={500} className="border-2 border-gray-300 rounded-3xl py-3 px-2 mb-4 resize-none"/>
            <div className="flex justify-center items-center">
              <input type="submit" name="Enviar" className="bg-[#10783b] w-[220px] text-white font-bold py-2 px-15 rounded-full hover:bg-[#0a622e]"/>
            </div>
          </Form>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}