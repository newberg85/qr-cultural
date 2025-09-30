import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'
import Link from 'next/link'
import Destaques from './Destaques'


export default function Home() {
  return (
    <div>
      <Header />
        <div className='flex flex-col md:flex-row w-full mb-5'>
            <div className='flex flex-col md:w-[50%] p-10 justify-center text-center md:text-start md:ml-[50px]'>
                <h1 className='text-[#10783B] font-semibold text-4xl md:text-5xl pb-2'>Sobre Nós</h1>
                <div className='border-b-2 border-[#10783B] justify-center md:justify-end md:mx-0 mx-auto w-[180px] md:w-[220px]'></div>
                <p className='text-gray-700 text-md md:text-lg justify-between pt-3 text-justify'>
                  Somos apaixonados por valorizar a história, a cultura e as belezas que fazem de Maranguape um lugar único. Nosso objetivo é conectar moradores e visitantes aos principais pontos turísticos, celebrando o patrimônio local e incentivando a descoberta de novos encantos.
                </p>
                <div className='flex flex-row justify-center md:justify-start items-center'>
                    <Link href="/">
                    <button className='bg-[#10783b] md:w-[220px] border-1 border-[#10783b] text-white font-bold py-2 px-15 hover:bg-[#0a622e] mt-6'>Saiba Mais</button>
                    </Link>
                    <Link href="/contato">  
                    <button className='bg-white border-1 border-[#10783b] md:w-[220px] text-[#10783b] font-bold py-2 px-15  hover:bg-[#0a622e] hover:text-white mt-6 ml-4'>Contato</button>
                    </Link>
                </div>
            </div>
            <div className='md:w-[50%] m-10 flex justify-center items-center '>
                <img src="/image.jpg" alt="Sobre Nós" className='w-[80%] md:w-[600px] md:h-[600px] object-cover shadow-lg'/>
            </div>  
        </div> 
        <div className='border-t-3 border-gray-300 w-[80%] md:w-[1370px] mx-auto mb-13'></div>

        <div className='flex flex-col md:flex-row w-full text-center items-center p-10'>
            <div className='md:w-[50%] m-5 flex justify-center items-center'>
                <img src="/paisagem2.jpg" alt="Sobre Nós" className='w-[80%] md:w-[800px] md:h-[400px] object-cover shadow-lg'/>
            </div>
            <div className='flex flex-col md:w-[50%] justify-center items-center md:items-start md:pr-5'>
                <h1 className='text-[#10783B] font-semibold text-4xl md:text-5xl pb-2 flex items-center md:items-center-safe '>Nossa Visão e Valores</h1>
                <div className='border-b-3 border-[#10783B] justify-center w-[80%] md:w-[700px] mb-5 md:mr-auto'></div>

                <p className='text-gray-700 pb-8 text-lg md:text-xl text-justify'>Nossa visão é transformar Maranguape em um destino de destaque no turismo cultural e sustentável, reconhecido pela riqueza de sua história, hospitalidade e belezas naturais. Queremos inspirar visitantes e moradores a viver experiências autênticas que valorizem nossa identidade e fortaleçam a cultura local, sempre guiados por princípios que dão sentido a essa jornada.</p>

                <p className='text-gray-700 text-xl text-justify'>Valorizamos Respeito à Cultura e à História, Sustentabilidade, Hospitalidade, Inovação e Comunidade, para manter vivo nosso patrimônio e fortalecer quem vive e cria aqui.</p>
            </div>
        </div>

      <Destaques />
      <Footer />
    </div>
  )
}
