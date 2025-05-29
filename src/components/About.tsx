const About = () => {
  return <section id="about" className="py-20 bg-darker-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rethink">
                Sobre a <span className="text-primary">Sunsettrack</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-6 font-rethink leading-relaxed">
                Com mais de 10 anos de experiência no mercado, a Sunsettrack é reconhecida 
                pelo alto índice de recuperação de veículos roubados e pela excelência em tecnologia de rastreamento.
              </p>
              
              <p className="text-white/70 mb-8 font-rethink leading-relaxed">Nossa missão é entregar segurança, controle e praticidade com tecnologia confiável. Nosso diferencial está na combinação de uma plataforma altamente intuitiva, que permite o monitoramento em tempo real por celular, computador ou tablet.</p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-white/80 font-rethink">Mais de 10 anos de experiência</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-white/80 font-rethink">Alto índice de recuperação de veículos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-white/80 font-rethink">Plataforma própria S-PRO</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-white/80 font-rethink">Suporte técnico especializado</span>
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
                    <div className="text-3xl font-bold text-primary mb-2 font-rethink">10+</div>
                    <div className="text-white/80 font-rethink text-sm">Anos de Mercado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2 font-rethink">100%</div>
                    <div className="text-white/80 font-rethink text-sm">Atual taxa de Recuperação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2 font-rethink">24h</div>
                    <div className="text-white/80 font-rethink text-sm">Suporte Técnico</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2 font-rethink">S-PRO</div>
                    <div className="text-white/80 font-rethink text-sm">Plataforma Própria</div>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="space-y-4">
                <div className="bg-dark-blue/50 rounded-2xl p-6 border border-primary/20">
                  <h4 className="text-lg font-semibold text-white mb-3 font-rethink">🎯 Nossa Missão</h4>
                  <p className="text-white/70 font-rethink">
                    Entregar segurança, controle e praticidade com tecnologia confiável para proteção veicular.
                  </p>
                </div>
                
                <div className="bg-dark-blue/50 rounded-2xl p-6 border border-primary/20">
                  <h4 className="text-lg font-semibold text-white mb-3 font-rethink">💎 Nossos Diferenciais</h4>
                  <p className="text-white/70 font-rethink">Suporte especializado, rastreamento em tempo real e gestão de frotas eficiente com plataforma própria.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;