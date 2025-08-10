
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-darker-blue border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo e Descrição */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-rethink">
              Sunset<span className="text-primary">track</span>
            </div>
            <p className="text-sm sm:text-base text-white/70 font-rethink mb-4 sm:mb-6 max-w-md">
              Tecnologia avançada em rastreamento veicular. Protegemos o que é importante para você com soluções inteligentes e confiáveis.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <button 
                className="text-sm sm:text-base text-white/70 hover:text-primary transition-colors"
                onClick={() => window.open('https://wa.me/5599999350533', '_blank')}
              >
                WhatsApp
              </button>
              <button 
                className="text-sm sm:text-base text-white/70 hover:text-primary transition-colors"
                onClick={() => window.open('mailto:comercial.sunsettrack@gmail.com', '_blank')}
              >
                Email
              </button>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 font-rethink text-sm sm:text-base">Navegação</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-sm sm:text-base text-white/70 hover:text-primary transition-colors font-rethink"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-sm sm:text-base text-white/70 hover:text-primary transition-colors font-rethink"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('plans')}
                  className="text-sm sm:text-base text-white/70 hover:text-primary transition-colors font-rethink"
                >
                  Planos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-sm sm:text-base text-white/70 hover:text-primary transition-colors font-rethink"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-sm sm:text-base text-white/70 hover:text-primary transition-colors font-rethink"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 font-rethink text-sm sm:text-base">Contato</h4>
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xs sm:text-sm text-white/70 font-rethink">
                WhatsApp: +55 99 99935-0533
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-rethink">
                Email: comercial.sunsettrack@gmail.com
              </p>
              <button 
                className="text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors font-rethink"
                onClick={() => window.open('https://rastreame.com.br/#/sunsettrack', '_blank')}
              >
                Área do Cliente
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-white/60 font-rethink">
            © 2024 Sunsettrack. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
