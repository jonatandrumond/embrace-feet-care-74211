import { Footprints, Scissors, Eye, HeartPulse, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import podoprofilaxiaImg from "@/assets/services/podoprofilaxia.jpg";
import unhaEncravadaImg from "@/assets/services/unha-encravada.jpg";
import micoseImg from "@/assets/services/micose.jpg";
import olhoDePeixeImg from "@/assets/services/olho-de-peixe.jpg";
import orteseImg from "@/assets/services/ortese.jpg";

const services = [
  {
    icon: Footprints,
    title: "Podoprofilaxia",
    description: "Prevenção e cuidados gerais com os pés, incluindo corte de unhas, lixamento e hidratação profissional.",
    image: podoprofilaxiaImg
  },
  {
    icon: Scissors,
    title: "Unha Encravada",
    description: "Tratamento especializado para unhas encravadas, com técnicas seguras e eficazes para alívio imediato.",
    image: unhaEncravadaImg
  },
  {
    icon: HeartPulse,
    title: "Micose",
    description: "Diagnóstico e tratamento de micoses nas unhas e pés, com orientações para prevenção de reincidências.",
    image: micoseImg
  },
  {
    icon: Eye,
    title: "Olho de Peixe",
    description: "Remoção profissional de calos e calosidades (olho de peixe) com técnicas indolores e seguras.",
    image: olhoDePeixeImg
  },
  {
    icon: Wrench,
    title: "Órtese",
    description: "Aplicação de órteses para correção e proteção das unhas, auxiliando no tratamento de diversas condições.",
    image: orteseImg
  }
];

const Services = () => {
  return (
    <section id="tratamentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <p className="text-sm font-medium text-primary">
              Nossos Serviços
            </p>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Tratamentos Especializados para Seus Pés
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços de podologia, 
            sempre com foco no seu bem-estar e conforto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card animate-fade-in overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-[var(--shadow-card)]">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
