
import { Satellite, Car, Smartphone } from 'lucide-react';

const Technology = () => {
  const technologies = [
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Dispositivos GSM e Satelital",
      description: "Conexão dupla garantindo cobertura total em áreas urbanas e remotas",
      features: ["Cobertura GSM urbana", "Rastreamento satelital", "Conexão redundante"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Compatibilidade Universal",
      description: "Nossos dispositivos funcionam em qualquer tipo de veículo",
      features: ["Carros e motos", "Caminhões e frotas", "Máquinas pesadas"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Plataforma S-PRO",
      description: "Nossa plataforma própria com acesso total via celular, computador ou tablet",
      features: ["App mobile nativo", "Interface web", "Acesso multiplataforma"]
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-primary">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 font-rethink">
                  {tech.title}
                </h3>
                <p className="text-gray-600 font-rethink mb-6 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <ul className="space-y-3">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 font-rethink">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
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
              <div className="text-white/80 font-rethink">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
