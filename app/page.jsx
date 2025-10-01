import Apresentação from "@/Components/Apresentação";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Imagens from "@/Components/Imagens";


export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Apresentação/>
      <Imagens />
      <Footer />
    </div>
  );
}
