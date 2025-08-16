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
  return <section id="home" className="min-h-screen bg-gradient-to-br from-darker-blue via-dark-blue to-darker-blue relative overflow-hidden">
      {/* Globe Background Image with reduced opacity */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full min-w-[100vw] min-h-[100vh]">
          <img src="/lovable-uploads/16637410-bfb0-4b07-8e40-50bc8e74b9d3.png" alt="Globe" className="w-full h-full object-cover opacity-40" />
        </div>
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-darker-blue/70 via-dark-blue/50 to-darker-blue/70"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-primary/60 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] sm:min-h-[80vh]">
            {/* Content */}
            <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 font-rethink leading-tight">
                Rastreamento Veicular que
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-clip-text text-transparent block">Protege Sua Frota</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 font-rethink max-w-lg mx-auto lg:mx-0">Rastreamento GPS confiável em Imperatriz e região. Monitoramento 24h, localização em tempo real e gestão inteligente de frotas com tecnologia avançada.</p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 font-rethink text-sm sm:text-base" onClick={scrollToContact}>
                  Solicitar Orçamento
                </Button>
                
                <Button variant="outline" size="lg" onClick={() => window.open('https://wa.me/5599999350533', '_blank')} className="-bottom-0 text-white hover:bg-white hover:text-darker-blue px-6 sm:px-8 py-3 font-rethink text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-primary font-rethink">400+</div>
                  <div className="text-xs sm:text-sm text-white/60 font-rethink">Veículos rastreados</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-primary font-rethink">24/7</div>
                  <div className="text-xs sm:text-sm text-white/60 font-rethink">Rastreamento</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-primary font-rethink">99.8%</div>
                  <div className="text-xs sm:text-sm text-white/60 font-rethink">Precisão GPS</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm border border-primary/20">
                <div className="bg-darker-blue rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="text-xs sm:text-sm text-white/60 font-rethink">Status: Online</div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm sm:text-base text-white/80 font-rethink">Localização</span>
                      <span className="text-sm sm:text-base text-primary font-rethink">Imperatriz, MA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm sm:text-base text-white/80 font-rethink">Velocidade</span>
                      <span className="text-sm sm:text-base text-primary font-rethink">45 km/h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm sm:text-base text-white/80 font-rethink">Ignição</span>
                      <span className="text-sm sm:text-base text-primary font-rethink">Ligada</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-xs sm:text-sm text-white/80 font-rethink mb-1 sm:mb-2">Última atualização</div>
                    <div className="text-sm sm:text-base text-primary font-semibold font-rethink">Agora mesmo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;