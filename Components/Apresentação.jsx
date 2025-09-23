import React from "react";

const Apresentação = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="border-1 border-gray-300 pb-8 pt-6 p-4 w-[1200px] h-[500px] rounded-xl">
        <div className="flex justify-center items-center">
          <h1 className="text-6xl text-[#1B7E44] font-bold flex pt-36">
            QR Cultural
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
                className="w-full px-1 py-3 pr-24 text-lg text-gray-300 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
                placeholder="Digite sua pesquisa"
              />
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 px-8 py-3.5 bg-[#1B7E44] text-white font-semibold rounded-full focus:ring-2 focus:ring-[#1B7E44] transition duration-300">
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
