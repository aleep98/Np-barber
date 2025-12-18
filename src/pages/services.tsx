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
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8">Our Services</h2>
      </div>
    </section>
  );
}