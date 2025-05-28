
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-darker-blue via-dark-blue to-darker-blue relative overflow-hidden">
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
                <span className="text-primary block">Protege Sua Frota</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 font-rethink max-w-lg">
                Tecnologia avançada em monitoramento veicular. Segurança, eficiência e controle total da sua frota em tempo real.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-rethink"
                  onClick={scrollToContact}
                >
                  Solicitar Orçamento
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-dark-blue px-8 py-3 font-rethink"
                  onClick={() => window.open('https://wa.me/5599999350533', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-rethink">500+</div>
                  <div className="text-sm text-white/60 font-rethink">Veículos Monitorados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-rethink">24/7</div>
                  <div className="text-sm text-white/60 font-rethink">Monitoramento</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-rethink">98%</div>
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
                      <span className="text-primary font-rethink">São Luís, MA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80 font-rethink">Velocidade</span>
                      <span className="text-primary font-rethink">45 km/h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80 font-rethink">Combustível</span>
                      <span className="text-primary font-rethink">85%</span>
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
