import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-modern-clinic.jpg";

const Hero = () => {
  const whatsappNumber = "5511972492829";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um atendimento.");
  
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with enhanced overlay and parallax effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'brightness(0.75)'
        }}
      >
        <div className="absolute inset-0 bg-[var(--gradient-overlay)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20 pb-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
            <span className="text-white drop-shadow-lg">
              Cuidar dos seus pés é cuidar da sua{" "}
            </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] animate-glow">
              saúde
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed drop-shadow-md max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Atendimento humanizado e especializado com a Podóloga Andrea Lima. 
            Cada paciente é acolhido com carinho, respeito e cuidado individualizado.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 shadow-[var(--shadow-hero)] hover:scale-105 transition-transform duration-300"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
              Agendar Atendimento
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 bg-[#f70f59] border-[#f70f59] text-white hover:bg-[#d90d4d] hover:border-[#d90d4d] backdrop-blur-sm hover:scale-105 transition-all duration-300"
              onClick={() => window.open("https://www.instagram.com/andrealima_podologa", '_blank')}
            >
              <Instagram className="h-5 w-5" />
              Siga no Instagram
            </Button>
          </div>
          
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
    </section>
  );
};

export default Hero;
