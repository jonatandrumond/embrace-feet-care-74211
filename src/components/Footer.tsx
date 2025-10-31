import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Andrea Lima</h3>
              <p className="text-secondary-foreground leading-relaxed">
                Podóloga especializada em cuidados com os pés, 
                oferecendo atendimento humanizado e de excelência.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contato</h4>
              <ul className="space-y-2 text-secondary-foreground">
                <li className="font-medium">(11) 97249-2829</li>
                <li>Estrada do Campo Limpo, 1062</li>
                <li>São Paulo - SP</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Horário</h4>
              <ul className="space-y-2 text-secondary-foreground">
                <li>Segunda a Sexta: 9h às 18h</li>
                <li>Sábado: 9h às 13h</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 pt-8 text-center">
            <p className="text-secondary-foreground flex items-center justify-center gap-2">
              Feito com <Heart className="h-4 w-4 fill-current" /> por Clínica de Podologia Andrea Lima
            </p>
            <p className="text-sm text-secondary-foreground mt-2">
              CNPJ: 205.860.538-16
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
