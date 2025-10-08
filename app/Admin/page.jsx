"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React, { use } from "react";
import Form from "next/form";
import { FaInstagram, FaYoutube, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { MdOutlineAppRegistration } from "react-icons/md";
import { LuImageUp } from 'react-icons/lu';
import { db } from "@/app/services/firebaseConnection";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/services/firebaseConnection";
import {  ToastContainer ,  toast  }  from  'react-toastify' ;  
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const myPromisse = new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucess = true;
      if (sucess) {
        resolve("Ponto turístico cadastrado com sucesso!");
      } else {
        reject("Erro ao cadastrar ponto turístico!");
      }
    }, 3000);
  });

  const notify = () => toast.promise(myPromisse, {
    pending: 'Cadastrando ponto turístico...',
    success: 'Ponto turístico cadastrado com sucesso!',
    error: 'Erro ao cadastrar ponto turístico!'
  });

  const notifyError = () => toast.error("Erro ao cadastrar ponto turístico! Preencha todos os campos!", {
    autoClose: 3000,
  });

  const [nome, setNome] = React.useState('');
  const [categoria, setCategoria] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [bairro, setBairro] = React.useState('');
  const [rua, setRua] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [imagem, setImagem] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    

    try {
      let imageUrl = "";
      console.log("enviando imagem");
      if (imagem) {
        const formData = new FormData();
        formData.append("file", imagem);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
         if (data.url) {
          imageUrl = data.url;
          console.log("Imagem enviada com sucesso:", imageUrl);
         }
      }

      if (!nome || !categoria || !cidade || !bairro || !rua || !cep || !descricao) {
        notifyError();
        setLoading(false);
        return;
      }
   
      await addDoc(collection(db, "pontos-turisticos"), {
        nome,
        categoria,
        cidade,
        bairro,
        rua,
        cep,
        descricao,
        imagem: imageUrl,
      });

      notify();
   
      setNome("");
      setCategoria("");
      setCidade("");
      setBairro("");
      setRua("");
      setCep("");
      setDescricao("");
      setImagem(null);

    } catch (error) {
      console.error("Erro ao cadastrar ponto:", error);
      notify();
    } finally {
      setLoading(false);
    }
  };



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
        <Form onSubmit={handleSubmit} className="">
          <h2 className="text-[#10783B] font-bold text-2xl justify-center pt-6 flex">
            Cadastrar Ponto Turístico{" "}
          </h2>
          <p className="text-gray-400 font-normal pt-1 justify-center flex">
            Adicione um novo destino ao nosso guia.
          </p>
          <div className="flex space-x-5">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
              className="border-2 border-gray-300 rounded-xl py-2 px-5 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]"
            />
            <input
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              placeholder="Categoria"
              className="border-2 border-gray-300 rounded-xl py-2 px-5 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className="border-2 border-gray-300 rounded-xl py-2 px-5 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]"
            />
            <input
              type="text"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              className="border-2 border-gray-300 rounded-xl py-2 px-5 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              className="border-2 border-gray-300 rounded-xl w-[330px] py-2 px-5 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]"
            />
            <input
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              className="border-2 border-gray-300 rounded-xl w-[150px] py-2 px-5 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]"
            />
          </div>
          <textarea
          placeholder="Descrição do ponto turistico"
            rows="7"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            maxLength={500}
            className="border-2 text-wrap border-gray-300 w-full rounded-3xl py-3 px-2 mb-4 resize-none focus:outline-none focus:border-2 focus:border-[#10783b]"
          />
          
         <div className="upload-container mb-4 border-solid border-2 rounded-3xl border-gray-300 w-[500px] h-[200px] flex items-center justify-center">
           <label htmlFor="imageUpload" className="upload-label cursor-pointer w-full h-full flex items-center justify-center">
           { imagem ? (
               <span><img src={URL.createObjectURL(imagem)} alt={imagem.name} className="w-[500px] h-[200px] rounded-3xl" /></span>
          ) : (

              <div className="upload-placeholder text-center">
                <LuImageUp className="mx-auto text-gray-300 w-20 h-20" />
                <p className="text-sm text-gray-300">Adicionar Imagem</p>
              </div>
          )}
           </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={(e) => setImagem(e.target.files[0])}
            />
        </div>


            <div className="flex justify-center items-center">
            <button
              type="submit"
              disabled={loading}

              className="bg-[#10783b] w-[220px] text-white font-bold py-2 px-15 rounded-full hover:bg-[#0a622e] disabled:opacity-60"
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
            <ToastContainer limit={1} position="top-center"/>
          </div>
        </Form>
         
          
      </div>    
    </div>
  );
}
