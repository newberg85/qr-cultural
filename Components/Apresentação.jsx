"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/app/services/firebaseConnection";
import { collection, getDocs, limit, query } from "firebase/firestore";


const Apresentação = ({ searchTerm, setSearchTerm, onSearch }) => {

  const [pontos, setPontos] = useState([]);
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "pontos-turisticos"), limit(10));
        const querySnapshot = await getDocs(q);
        const pontosData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data(),}));
        setPontos(pontosData);
        setResultados(pontosData);
      } catch (error) {
        console.error("Erro ao buscar pontos turísticos:", error);
      }
    };

    fetchData();
  }, []);


   return (
     <div className="flex items-center justify-center w-full p-8">
       <div className="border-1 border-gray-300 pb-8 pt-6 p-4 w-full h-[500px] rounded-xl">
         <div className="flex justify-center items-center">
            <h1 className="text-6xl text-[#1B7E44] font-bold flex pt-36">
            Bem-Vindo
          </h1>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          <p className="flex text-center pt-6 pb-8">
            Viva a cultura a cultura e encante-se com nossas
            <br />
            tradições e patrimônio histórico.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="relative">
              <input
                type="text"
                className="w-full px-5 py-3 pr-24 text-lg text-gray-700 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
                placeholder="Digite sua pesquisa"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                onClick={onSearch}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 px-8 py-3.5 bg-[#1B7E44] text-white font-semibold rounded-full focus:ring-2 focus:ring-[#1B7E44] transition duration-300">
                Pesquisar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apresentação;
