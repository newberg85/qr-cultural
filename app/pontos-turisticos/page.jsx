'use client'

import Link from 'next/link';
import React, { use, useEffect, useState } from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaArrowLeft } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/services/firebaseConnection';
import { useParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [ponto, setPonto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const ref = doc(db, "pontos-turisticos", id);
      const snapshot = await getDoc(ref);
      if (snapshot.exists()) {
        setPonto({ id: snapshot.id, ...snapshot.data() });
      }
    };
    fetchData();
  }, [id]);

  if (!ponto) return <div>Carregando...</div>;

  return (
    <div className='flex flex-col md:flex-row w-full items-center'>
      <div className='flex flex-col md:w-[60%] justify-center items-start'>
        <div className='flex flex-row w-[80%] text-sm mt-[40px] md:mt-0  justify-start items-center border-2 mx-14 border-gray-300 rounded-full '>
            <button className='bg-[#10783b] rounded-tl-full rounded-bl-full p-4 text-white'>
            <Link href="/">
            <FaArrowLeft className='ml-3 mr-2 h-full text-2xl'/>
            </Link>
            </button>
            <h1 className='ml-5 text-[#10783b] text-lg font-semibold border-b-2 border-[#10783b]'>Pontos Turísticos</h1>
        </div>

        <div className='flex flex-col w-full justify-center md:items-start p-15'>
            <h1 className='text-5xl font-semibold text-[#10783b] mb-3'>{ponto.nome}</h1>
            <p className='text-gray-500 mb-4 text-xl'>
                {ponto.descricao}
            </p>

            <p className='text-gray-500 mb-4 text-xl'>
                {ponto.descricao2}
            </p>

            <div className='flex flex-row justify-between w-full mt-4 mb-20'>
                <button className='bg-[#10783b] text-white font-semibold px-10 py-2 rounded-full'>Explorar Mais</button>
            </div>

             <div className='flex space-x-3 justify-center mt-4 text-2xl '>
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
      </div>
       <div className='md:w-[40%] flex justify-center items-center h-[60%]  md:h-[729px] md:m-0'>
        <img src={ponto.imagem} alt="Praça Capistrano De Abreu"  className='w-full h-full object-cover'/>
       </div>
    </div>
  )
}

export default Page;
