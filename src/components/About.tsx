
const About = () => {
  return (
    <section id="about" className="py-20 bg-darker-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rethink">
                Sobre a <span className="text-primary">Sunsettrack</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-6 font-rethink leading-relaxed">
                Nossa missão é proteger e monitorar veículos com tecnologia de ponta, 
                oferecendo soluções de rastreamento que geram valor real para nossos clientes.
              </p>
              
              <p className="text-white/70 mb-8 font-rethink leading-relaxed">
                Com anos de experiência no mercado de rastreamento veicular, desenvolvemos 
                um sistema completo que combina hardware de qualidade, software intuitivo 
                e suporte especializado para garantir a melhor experiência em monitoramento.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-white/80 font-rethink">Tecnologia nacional e internacional</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-white/80 font-rethink">Suporte técnico especializado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-white/80 font-rethink">Instalação profissional</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-white/80 font-rethink">Preços competitivos</span>
                </div>
              </div>
            </div>

            {/* Stats & Values */}
            <div className="space-y-8">
              {/* Company Stats */}
              <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-3xl p-8 border border-primary/20">
                <h3 className="text-xl font-semibold text-white mb-6 font-rethink">
                  Nossa Trajetória
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2 font-rethink">5+</div>
                    <div className="text-white/80 font-rethink text-sm">Anos de Mercado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2 font-rethink">500+</div>
                    <div className="text-white/80 font-rethink text-sm">Clientes Ativos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2 font-rethink">24h</div>
                    <div className="text-white/80 font-rethink text-sm">Suporte Técnico</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2 font-rethink">99%</div>
                    <div className="text-white/80 font-rethink text-sm">Satisfação</div>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="space-y-4">
                <div className="bg-dark-blue/50 rounded-2xl p-6 border border-primary/20">
                  <h4 className="text-lg font-semibold text-white mb-3 font-rethink">🎯 Nossa Visão</h4>
                  <p className="text-white/70 font-rethink">
                    Ser referência em rastreamento veicular, oferecendo as melhores soluções em segurança e monitoramento.
                  </p>
                </div>
                
                <div className="bg-dark-blue/50 rounded-2xl p-6 border border-primary/20">
                  <h4 className="text-lg font-semibold text-white mb-3 font-rethink">💎 Nossos Valores</h4>
                  <p className="text-white/70 font-rethink">
                    Transparência, qualidade, inovação e compromisso com a segurança dos nossos clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
