'use client'
import { use } from 'react'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'
import Form from 'next/form'
import { FaInstagram, FaYoutube, FaFacebook, FaPhoneAlt} from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../services/firebaseConnection'
import {  ToastContainer ,  toast  }  from  'react-toastify' ;
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

    const myPromisse = new Promise((resolve, reject) => {
      setTimeout(() => {
        const sucess = true;
        if (sucess) {
          resolve("Mensagem enviada com sucesso!");
        } else {
          reject("Erro ao enviar mensagem!");
        }
      }, 3000);
    });

    const notify = () => toast.promise(myPromisse, {
      pending: 'Enviando mensagem...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar mensagem!'
    });

    const notifyError = () => toast.error("Erro ao enviar mensagem! Preencha todos os campos!", {
      autoClose: 3000,
    });

  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!nome || !sobrenome || !email || !telefone || !mensagem) {
        notifyError();
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "usuarios"), {
        nome,
        sobrenome,
        email,
        telefone,
        mensagem
      });

      notify();


      setNome("");
      setSobrenome("");
      setEmail("");
      setTelefone("");
      setMensagem("");

    } catch (error) {
      console.error("Error adding document: ", error);
      notify();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans flex flex-col min-h-screen w-full">
      <Header />
       <div className='flex flex-col md:flex-row w-full'>
          <div  className='flex flex-col md:w-[50%] md:pt-[220px]'>
             <h1 className='text-[#10783B] font-semibold text-5xl md:text-6xl text-center pb-4'>Fale Conosco</h1>
             <p className='text-gray-400 text-center text-lg justify-between'>
                Estamos aqui para ouvir você! Seja para tirar <br />
                dúvidas, enviar sugestões ou compartilhar suas<br />
                ideias, sua mensagem é importante para nós.<br/>
                Responderemos o mais rápido possível.
             </p>
              <div className='flex space-x-3 justify-center mt-4 text-2xl'>
                <a href="" target="_blank" className='p-2 bg-[#10783b] rounded-full'>
                  <FaYoutube className="text-white hover:text-[#333333]" />
                </a>
                <a href="" target="_blank" className='p-2 bg-[#10783b] rounded-full'>
                  <FaFacebook className="text-white hover:text-[#333333]" />
                </a>
                <a href="https://www.instagram.com/secultmpe/" target="_blank" className='p-2 bg-[#10783b] rounded-full'>
                  <FaInstagram className="text-white hover:text-[#333333]" />
                </a>
                
              </div>
          </div>
          <div className='md:w-[50%] m-10'>
            <Form onSubmit={handleSubmit} className=' md:w-[600px] mx-auto flex flex-col py-[45px] px-[65] border-2 border-gray-300 rounded-4xl shadow-lg'>
              <h2 className='text-center md:text-start text-[#10783b] text-4xl font-bold'>Entre em contato</h2>
              <p className='text-center  md:text-start text-gray-400 mb-4 text-lg'>Compartilhe sua ideia ou pergunta conosco</p>
              <div className='flex flex-col md:flex-row md:space-x-4 w-full'>
              <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome' className='border-2 border-gray-300 rounded-full py-2 md:w-[50%] px-2 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]'/>
              <input type='text' value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} placeholder='Sobrenome' className='border-2 border-gray-300 rounded-full py-2 md:w-[50%] px-2 mb-4 focus:outline-none focus:border-2 focus:border-[#10783b]'/>
              </div>
              <div className="flex items-center border-2 border-gray-300 rounded-full px-4 mb-4 focus-within:border-[#10783b] focus-within:border-2 transition-all duration-200">
                <GoMail className="text-gray-700 mr-3" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu e-mail" className="flex-1 outline-none py-2"
                />
              </div>
              <div className='flex items-center border-2 border-gray-300 rounded-full px-4 mb-4 focus-within:border-[#10783b] focus-within:border-2 transition-all duration-200'>
                <FaPhoneAlt className='text-gray-700 mr-3'/>
              <input type='number'  inputMode='numeric' pattern='[0-9]*' value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Número' className='appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-inner-spin-button]:appearance-none flex-1 outline-none py-2'/>
              </div>
              <textarea rows="7" value={mensagem} onChange={(e) => setMensagem(e.target.value)} className='border-2 text-wrap border-gray-300 rounded-3xl py-3 px-2 mb-4 resize-none focus:outline-none focus:border-2 focus:border-[#10783b]'/>
              <div className='flex justify-center items-center'>
                <button type='submit' name='Enviar' 
             disabled={loading}
             className='bg-[#10783b] w-[220px] text-white font-bold py-2 px-15 rounded-full hover:bg-[#0a622e]'>
              {loading ? 'Enviando...' : 'Enviar'}
             </button>
              </div>
              <ToastContainer limit={1} position='top-center'/>
            </Form>
          </div>
       </div>
      <Footer />
    </div>
  )
}
