
const Technology = () => {
  const technologies = [
    {
      title: "GPS de Alta Precisão",
      description: "Localização com precisão de até 3 metros utilizando satélites GPS e GLONASS",
      features: ["Precisão de 98%", "Cobertura nacional", "Atualização em tempo real"]
    },
    {
      title: "Conectividade 4G/5G",
      description: "Transmissão de dados rápida e confiável através das melhores redes móveis",
      features: ["Velocidade otimizada", "Baixo consumo", "Conexão estável"]
    },
    {
      title: "Inteligência Artificial",
      description: "Análise inteligente de padrões de uso e detecção de anomalias",
      features: ["Alertas preditivos", "Análise comportamental", "Otimização de rotas"]
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-dark-blue to-darker-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rethink">
            Tecnologia <span className="text-primary">Avançada</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-rethink">
            Utilizamos as mais modernas tecnologias para garantir o melhor rastreamento do mercado
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-darker-blue/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-rethink">
                  {tech.title}
                </h3>
                <p className="text-white/70 font-rethink mb-6">
                  {tech.description}
                </p>
              </div>

              <ul className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/80 font-rethink">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Specs */}
        <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-3xl p-8 border border-primary/20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2 font-rethink">&lt; 30s</div>
              <div className="text-white/80 font-rethink">Tempo de Resposta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2 font-rethink">99.9%</div>
              <div className="text-white/80 font-rethink">Disponibilidade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2 font-rethink">256-bit</div>
              <div className="text-white/80 font-rethink">Criptografia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2 font-rethink">24h</div>
              <div className="text-white/80 font-rethink">Backup de Bateria</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
