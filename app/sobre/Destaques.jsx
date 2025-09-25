"use client"; // necessário para Client Component no Next.js

import { useEffect, useState } from "react";
import axios from "axios";

export default function Destaques() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            query: "cultura brasileira",
            per_page: 6,
          },
          headers: {
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
          },
        });

        setPhotos(res.data.results);
      } catch (err) {
        console.error("Erro ao buscar imagens do Unsplash:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  if (loading) return <p>Carregando imagens...</p>;

  return (
    <div className=" w-full p-10 justify-center">
      <div className=" w-full p-10 justify-center">
            <div className='flex flex-col w-full justify-center items-center mb-5'>
                <h1 className='text-[#10783B] font-semibold text-4xl md:text-5xl pb-3'>Destaques Anuais</h1>
                <div className='border-b-3 border-[#10783B] w-[100%] md:w-[1400px]'></div>
            </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {photos.map((p) => (
            <a
              key={p.id}
              href={p.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[430px] h-[300px]"
            >
              <img
                src={p.urls.small}
                alt={p.alt_description ?? "Foto do Unsplash"}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
