import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Apresentação from "@/Components/Apresentação";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Header />
       <Apresentação />
      <Footer />
     
    </div>
  );
}
