import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaYoutube, FaFacebook, FaArrowLeft } from 'react-icons/fa'



const page = () => {
  return (
    <div className='flex flex-col md:flex-row w-full items-center'>
      <div className='flex flex-col md:w-[60%] justify-center items-start'>
        <div className='flex flex-row w-[80%] text-sm mt-[40px] md:mt-0  justify-start items-center border-2 mx-auto border-gray-300 rounded-full '>
            <button className='bg-[#10783b] rounded-tl-full rounded-bl-full p-4 text-white'>
            <Link href="/">
            <FaArrowLeft className='ml-3 mr-2 h-full text-2xl'/>
            </Link>
            </button>
            <h1 className='ml-5 text-[#10783b] text-lg font-semibold border-b-2 border-[#10783b]'>Pontos Turísticos</h1>
        </div>

        <div className='flex flex-col w-full justify-center md:items-start p-15'>
            <h1 className='text-5xl font-semibold text-[#10783b] mb-3'>Praça Capistrano <br />
            de Abreu</h1>
            <p className='text-gray-500 mb-4 text-xl'>
                No coração de Maranguape, a Praça Capistrano de Abreu é um dos cenários mais charmosos da cidade. Rodeada por jardins bem cuidados e arquitetura histórica, o local homenageia o célebre historiador maranguapense que dá nome à praça.
            </p>

            <p className='text-gray-500 mb-4 text-xl'>
                Ideal para passeios tranquilos, fotos e momentos de descanso, a praça também serve de palco para eventos culturais e encontros ao ar livre, tornando-se parada obrigatória para quem deseja sentir o clima acolhedor da cidade.
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
        <img src="/paisagem.jpg" alt="Praça Capistrano De Abreu"  className='w-full h-full object-cover'/>
       </div>
    </div>
  )
}

export default page


