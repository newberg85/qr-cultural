"use client";
import React, { useState } from "react";
import Apresentação from "@/Components/Apresentação";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Imagens from "@/Components/Imagens";



export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  const handleSearch = () => {
    setSearchTriggered(true);
  }

  return (
    <div className="font-sans">
      <Header />
      <Apresentação searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
      <Imagens searchTerm={searchTerm} searchTriggered={searchTriggered}/>
      <Footer />
    </div>
  );
}
