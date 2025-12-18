import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@mui/material";
export default function Contact() {
  return (
    <footer className="bg-neutral-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="mb-6 text-amber-500">Cortes Classicos</h3>
            <p className="text-neutral-400">
              Sua barbearia de confiança para cuidados e estilo de alta qualidade desde 2025.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Contato</h4>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>(55) 14 9 88168-5267</span>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <span>Jose Carlos Tirolo: 190<br />Bocaina, São Paulo</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Horarios</h4>
            <div className="space-y-2 text-neutral-400">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1" />
                <div>
                  <div>Quinta - Sexta: 16h - 20h</div>
                  <div>Sábado: 9h - 14h</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Reserve já!</h4>
            <p className="text-neutral-400 mb-4">
              Agende sua consulta hoje mesmo e sinta a diferença.
            </p>
            <Button className="w-full bg-amber-600 hover:bg-amber-700">
              Agendar Corte
            </Button>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500">
          <p>&copy; 2025 Classic Cuts Barbershop. All rights reserved. @l.aleep</p>
        </div>
      </div>
    </footer>
  );
}
