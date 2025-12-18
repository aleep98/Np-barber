import { Scissors, Star, Clock } from "lucide-react";
import Card from '@mui/material/Card';


const services = {
  haircuts: {
    title: "Haircuts",
    description: "Precision cuts with traditional techniques.",
    icon: Scissors,
  },
  beardTrimming: {
    title: "Beard Trimming",
    description: "Perfectly shaped beards and mustaches.",
    icon: Scissors,
  },
  styling: {
    title: "Styling",
    description: "Professional styling for any occasion.",
    icon: Star,
  },
  consultation: {
    title: "Consultation",
    description: "Personalized grooming advice.",
    icon: Clock,
  },
};

export default function Services() {
    return (
    <section className="py-15 px-4 bg-#f3eae8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">Nossos Serviços</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto text-2xl">Serviços profissionais de cuidados pessoais personalizados ao seu estilo e necessidades.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(services).map(([key, service]) => (
          <Card key={key} className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-amber-100 text-amber-600 mx-auto">
              <service.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}