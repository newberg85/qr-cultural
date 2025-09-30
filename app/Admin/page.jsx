import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";
import Form from "next/form";
import { FaInstagram, FaYoutube, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { MdOutlineAppRegistration } from "react-icons/md";
import { LuImageUp } from 'react-icons/lu';

export default function Home() {
  return (
    <div className="flex font-[Montserrat]">
      <div>
        <div className="flex flex-col items-center pt-16 w-[300px] h-[800px] border-r-4 border-green-900 bg-green-900 rounded-r-md font-[Montserrat]">
          <a
            href="#"
            className="flex items-center text-white font-semibold mb-4"
          >
            <MdOutlineAppRegistration className="mr-2" />
            Cadastrar
          </a>
          <a href="#" className="flex items-center text-white font-semibold">
            <MdOutlineAppRegistration className="mr-2" />
            Listar
          </a>
        </div>
      </div>
      <div className="w-[500px] mx-auto flex justify-center ">
        <Form action="" className="">
          <h2 className="text-[#10783B] font-bold text-2xl justify-center pt-6 flex">
            Cadastrar Ponto Turístico{" "}
          </h2>
          <p className="text-gray-400 font-normal pt-1 justify-center flex">
            Adicione um novo destino ao nosso guia.
          </p>
          <div className="flex space-x-5">
            <input
              type="text"
              placeholder="Nome"
              className="border-2 border-gray-300 rounded-xl py-2 px-5 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]"
            />
            <input
              type="text"
              placeholder="Cateoria"
              className="border-2 border-gray-300 rounded-xl py-2 px-5 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Cidade"
              className="border-2 border-gray-300 rounded-xl py-2 px-5 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]"
            />
            <input
              type="text"
              placeholder="Bairro"
              className="border-2 border-gray-300 rounded-xl py-2 px-5 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Rua"
              className="border-2 border-gray-300 rounded-xl w-[330px] py-2 px-5 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]"
            />
            <input
              type="text"
              placeholder="CEP"
              className="border-2 border-gray-300 rounded-xl w-[150px] py-2 px-5 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]"
            />
          </div>
          <textarea
          placeholder="Descrição do ponto turistico"
            rows="7"
            maxLength={500}
            className="border-2 text-wrap border-gray-300 w-full rounded-3xl py-3 px-2 mb-4 resize-none focus:outline-none focus:border-2 focus:border-[#10783b]"
          />
          
          <div className="upload-container mb-4 border-solid border-2 rounded-3xl border-gray-300 w-[500px] h-[200px] flex items-center justify-center">
            <label htmlFor="imageUpload" className="upload-label">
              <div className="upload-placeholder">
              <span role="img" aria-label="upload">
                <div className="flex items-center justify-center">
                  <LuImageUp width={70} height={70} className="flex justify-center text-gray-300 w-[70] h-[70]"/>
                </div>
                  
             
                </span>
                <p className="text-sm text-gray-300">Adicionar Imagem</p>
              </div>
            </label>
           </div>
             <div className='flex justify-center items-center'>
              <input type='submit' name='Cadastrar' className='bg-[#10783b] w-[220px] text-white font-bold py-2 px-15 rounded-full hover:bg-[#0a622e]'/>
              </div>
        </Form>
         
          
      </div>
    </div>
  );
}
