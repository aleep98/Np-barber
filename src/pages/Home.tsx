import { Button } from "../_components/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1627238772768-e3d0ccb1adb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2MDQ4ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Barber shop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold">Cortes e cuidados premium</h1>
          <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">
            Experimente a arte da barbearia tradicional combinada com técnicas modernas.<br/>
            <span className="mt-8 flex justify-center">Onde o estilo encontra a precisão.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <a href="https://wa.me/qr/B6WCGDMATG7CA1">Agendar</a>
            </Button>
            
          </div>
        </div>
      </div>
    </section>
  );
}