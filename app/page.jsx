import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Apresentação from "@/Components/Apresentação";
import Imagens from "@/Components/Imagens";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Apresentação />
      <Imagens />
      <Footer />
     
    </div>
  );
}
