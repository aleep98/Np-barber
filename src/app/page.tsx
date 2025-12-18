import Hero from "../pages/Home";
import Services from "../pages/services";
import Contatos from "../pages/Contatos";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Hero/>
      <Services/>
      <Contatos/>

    </div>
  );
}
