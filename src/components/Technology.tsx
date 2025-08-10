import { Satellite, Car, Smartphone } from 'lucide-react';
const Technology = () => {
  const technologies = [{
    icon: <Satellite className="w-8 h-8" />,
    title: "Dispositivos GSM e Satelital",
    description: "Conexão dupla garantindo cobertura total em áreas urbanas e remotas",
    features: ["Cobertura GSM urbana", "Rastreamento satelital", "Conexão redundante"]
  }, {
    icon: <Car className="w-8 h-8" />,
    title: "Compatibilidade Universal",
    description: "Nossos dispositivos funcionam em qualquer tipo de veículo",
    features: ["Carros e motos", "Caminhões e frotas", "Máquinas pesadas"]
  }, {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Plataforma S-PRO",
    description: "Nossa plataforma própria com acesso total via celular, computador ou tablet",
    features: ["App mobile nativo", "Interface web", "Acesso multiplataforma"]
  }];
  return <section id="technology" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-dark-blue to-darker-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-rethink">
            Tecnologia <span className="text-primary">Avançada</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-rethink">
            Utilizamos as mais modernas tecnologias para garantir o melhor rastreamento do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {technologies.map((tech, index) => <div key={index} className="bg-gradient-to-br from-primary/20 to-transparent rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/20 h-full">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <div className="text-primary">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 font-rethink text-gray-50">
                  {tech.title}
                </h3>
                <p className="text-sm sm:text-base font-rethink mb-4 sm:mb-6 leading-relaxed text-slate-400">
                  {tech.description}
                </p>
              </div>

              <ul className="space-y-2 sm:space-y-3">
                {tech.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm sm:text-base text-gray-50 font-rethink bg-transparent">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Technical Specs */}
        <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2 font-rethink">&lt; 30s</div>
              <div className="text-xs sm:text-sm lg:text-base text-white/80 font-rethink">Tempo de Resposta</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2 font-rethink">99.9%</div>
              <div className="text-xs sm:text-sm lg:text-base text-white/80 font-rethink">Disponibilidade</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2 font-rethink">256-bit</div>
              <div className="text-xs sm:text-sm lg:text-base text-white/80 font-rethink">Criptografia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2 font-rethink">24h</div>
              <div className="text-xs sm:text-sm lg:text-base text-white/80 font-rethink">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Technology;