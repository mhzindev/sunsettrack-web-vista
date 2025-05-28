
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-darker-blue border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4 font-rethink">
              Sunset<span className="text-primary">track</span>
            </div>
            <p className="text-white/70 font-rethink mb-6 max-w-md">
              Tecnologia avançada em rastreamento veicular. Protegemos o que é importante para você com soluções inteligentes e confiáveis.
            </p>
            <div className="flex space-x-4">
              <button 
                className="text-white/70 hover:text-primary transition-colors"
                onClick={() => window.open('https://wa.me/5599999350533', '_blank')}
              >
                WhatsApp
              </button>
              <button 
                className="text-white/70 hover:text-primary transition-colors"
                onClick={() => window.open('mailto:comercial.sunsettrack@gmail.com', '_blank')}
              >
                Email
              </button>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-rethink">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white/70 hover:text-primary transition-colors font-rethink"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-primary transition-colors font-rethink"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('plans')}
                  className="text-white/70 hover:text-primary transition-colors font-rethink"
                >
                  Planos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/70 hover:text-primary transition-colors font-rethink"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/70 hover:text-primary transition-colors font-rethink"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-rethink">Contato</h4>
            <div className="space-y-2">
              <p className="text-white/70 font-rethink">
                WhatsApp: +55 99 99935-0533
              </p>
              <p className="text-white/70 font-rethink">
                Email: comercial.sunsettrack@gmail.com
              </p>
              <button 
                className="text-primary hover:text-primary/80 transition-colors font-rethink"
                onClick={() => window.open('https://rastreame.com.br/#/sunsettrack', '_blank')}
              >
                Área do Cliente
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-white/60 font-rethink">
            © 2024 Sunsettrack. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
