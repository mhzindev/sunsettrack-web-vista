import { Users } from 'lucide-react';
const Target = () => {
  const targets = [{
    title: "Empresas de Logística",
    description: "Otimize rotas, reduza custos operacionais e melhore a eficiência da sua frota de entrega",
    icon: "🚛"
  }, {
    title: "Transportadoras",
    description: "Monitore cargas valiosas, garanta pontualidade e ofereça mais segurança aos clientes",
    icon: "🚚"
  }, {
    title: "Frotas Corporativas",
    description: "Controle veículos da empresa, monitore uso e garanta segurança dos colaboradores",
    icon: "🚗"
  }, {
    title: "Prestadores de Serviço",
    description: "Comprove presença em locais de trabalho e otimize deslocamentos entre clientes",
    icon: "🔧"
  }, {
    title: "Veículos Pessoais",
    description: "Proteja seu patrimônio familiar contra roubo e tenha controle sobre localização",
    icon: "👨‍👩‍👧‍👦"
  }, {
    title: "Motocicletas e Motos",
    description: "Solução específica para duas rodas com tecnologia adaptada e instalação discreta",
    icon: "🏍️"
  }];
  return <section id="target" className="py-20 bg-gradient-to-br from-dark-blue to-darker-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rethink">
            Quem <span className="text-primary">Atendemos</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-rethink">
            Soluções personalizadas para diferentes segmentos e necessidades de rastreamento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {targets.map((target, index) => <div key={index} className="bg-darker-blue/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">{target.icon}</div>
              
              <h3 className="text-xl font-semibold text-white mb-4 font-rethink">
                {target.title}
              </h3>
              
              <p className="text-white/70 font-rethink leading-relaxed">
                {target.description}
              </p>
            </div>)}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-3xl p-8 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-rethink">
                Benefícios Para Todos os Segmentos
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-white/80 font-rethink">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Redução de custos operacionais
                </li>
                <li className="flex items-center text-white/80 font-rethink">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Maior segurança e proteção
                </li>
                <li className="flex items-center text-white/80 font-rethink">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Controle total da frota
                </li>
                <li className="flex items-center text-white/80 font-rethink">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Relatórios detalhados
                </li>
              </ul>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-darker-blue rounded-2xl p-6 w-full max-w-sm">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2 font-rethink">250+</div>
                  <div className="text-white/80 font-rethink">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Target;