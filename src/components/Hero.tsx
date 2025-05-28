
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-darker-blue via-dark-blue to-darker-blue relative overflow-hidden">
      {/* Globe Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent opacity-60 blur-sm"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/30 via-blue-400/20 to-transparent"></div>
        
        {/* Globe Grid Lines */}
        <div className="absolute w-[600px] h-[600px] rounded-full border border-blue-400/20"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border-2 border-blue-300/10 transform rotate-45"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full border border-blue-300/15 transform rotate-12"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-blue-300/10 transform -rotate-12"></div>
        
        {/* Horizontal grid lines */}
        <div className="absolute w-[600px] h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent top-1/2 transform -translate-y-1/2"></div>
        <div className="absolute w-[550px] h-px bg-gradient-to-r from-transparent via-blue-300/15 to-transparent top-1/2 transform -translate-y-12"></div>
        <div className="absolute w-[550px] h-px bg-gradient-to-r from-transparent via-blue-300/15 to-transparent top-1/2 transform translate-y-12"></div>
        <div className="absolute w-[480px] h-px bg-gradient-to-r from-transparent via-blue-300/10 to-transparent top-1/2 transform -translate-y-24"></div>
        <div className="absolute w-[480px] h-px bg-gradient-to-r from-transparent via-blue-300/10 to-transparent top-1/2 transform translate-y-24"></div>
        
        {/* Vertical grid lines */}
        <div className="absolute h-[600px] w-px bg-gradient-to-b from-transparent via-blue-300/20 to-transparent left-1/2 transform -translate-x-1/2"></div>
        <div className="absolute h-[550px] w-px bg-gradient-to-b from-transparent via-blue-300/15 to-transparent left-1/2 transform -translate-x-12"></div>
        <div className="absolute h-[550px] w-px bg-gradient-to-b from-transparent via-blue-300/15 to-transparent left-1/2 transform translate-x-12"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-primary/60 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-rethink leading-tight">
                Rastreamento que
                <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">Protege Sua Frota</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 font-rethink max-w-lg">
                Tecnologia avançada em monitoramento veicular. Segurança, eficiência e controle total da sua frota em tempo real.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-rethink" onClick={scrollToContact}>
                  Solicitar Orçamento
                </Button>
                
                <Button variant="outline" size="lg" onClick={() => window.open('https://wa.me/5599999350533', '_blank')} className="border-white text-dark-blue px-8 py-3 font-rethink">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-rethink">400+</div>
                  <div className="text-sm text-white/60 font-rethink">Veículos Monitorados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-rethink">24/7</div>
                  <div className="text-sm text-white/60 font-rethink">Monitoramento</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-rethink">99.9%</div>
                  <div className="text-sm text-white/60 font-rethink">Precisão GPS</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="bg-darker-blue rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="text-sm text-white/60 font-rethink">Status: Online</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/80 font-rethink">Localização</span>
                      <span className="text-primary font-rethink">Imperatriz, MA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80 font-rethink">Velocidade</span>
                      <span className="text-primary font-rethink">45 km/h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80 font-rethink">Ignição</span>
                      <span className="text-primary font-rethink">Ligada</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-sm text-white/80 font-rethink mb-2">Última atualização</div>
                    <div className="text-primary font-semibold font-rethink">Agora mesmo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
