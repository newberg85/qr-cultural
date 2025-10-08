"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "@/app/services/firebaseConnection";
import { collection, getDocs, limit, query } from "firebase/firestore";

const Imagens = ({ searchTerm, searchTriggered }) => {
  const [pontos, setPontos] = useState([]);
  const [perPage, setPerPage] = useState(3); 

  const mostrarButton = pontos.length >= perPage;
  

  useEffect(() => {
    const fetchPontos = async () => {
      try {
        let q;
        if (searchTriggered && searchTerm.trim() !== "") {
          q = query(collection(db, "pontos-turisticos"));
        } else {
          q = query(collection(db, "pontos-turisticos"), limit(perPage));
        }
        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPontos(data);
      } catch (error) {
        console.error("Erro ao buscar pontos turísticos:", error);
      }
    };

    fetchPontos();
  }, [perPage, searchTriggered, searchTerm]);

  const pontosFiltrados =
    searchTriggered && searchTerm.trim() !== ""
      ? pontos.filter((ponto) => {
          const termo = searchTerm.toLowerCase();

          const nome = ponto.nome ? ponto.nome.toLowerCase() : "";
          const categoria = ponto.categoria ? ponto.categoria.toLowerCase() : "";
         

          return nome.includes(termo) || categoria.includes(termo);
        })
      : pontos;


  return (
    <div className="font-[Montserrat] bg-white">
      <div className="flex items-center justify-center py-6">
        <h1 className="text-[#1B7E44] text-3xl font-bold">
          Principais pontos
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center py-10 w-full">
      {pontosFiltrados.length > 0 ? (
        pontosFiltrados.map((ponto) => (
          <div
            key={ponto.id}
            className="flex justify-center px-5 py-5"
          >
            <div className="relative w-[400px] bg-white rounded-t-4xl border border-gray-200 shadow-sm transition delay-150 duration-300 ease-in-out">
              <img
                src={ponto.imagem}
                alt={ponto.nome}
                width={400}
                height={400}
                className="w-[400px] h-[250px] rounded-t-4xl object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {ponto.nome}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus soluta totam nesciunt nobis? Dolores voluptas velit ea impedit, accusantium vero in, consequuntur, quas dolore maxime nam obcaecati! Autem, amet dolor. 
                </p>
                <a
                  href={`/pontos-turisticos/?id=${ponto.id}`}
                  className="mt-4 px-4 py-2 bg-[#1B7E44] text-white text-sm font-medium rounded-full hover:bg-green-700 transition-colors inline-block"
                >
                  Veja Mais
                </a>
              </div>
            </div>
          </div>
        )) ) : (<p className="text-gray-500">Nenhum ponto turístico encontrado.</p>
        )}

      </div>

      { !searchTriggered && pontos.length > 0 && mostrarButton && (<div className="flex items-center justify-center pb-5">
        <button
          onClick={() => setPerPage(perPage + 3)}
          className="mt-4 px-4 py-2 bg-[#1B7E44] text-white text-sm font-semibold rounded-sm hover:bg-green-700 transition-colors inline-block"
        >
          Carregar mais
        </button>
      </div>)}
    </div>
  );
};  

export default Imagens;
