
import { Calendar, Search, Users, FileText, Smartphone, Bell } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Rastreamento em tempo real 24h",
      description: "Acompanhamento em tempo real da localização e status dos seus veículos"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Histórico de Rotas",
      description: "Relatórios detalhados de trajetos, paradas e deslocamentos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestão de Motoristas",
      description: "Controle de condutores, horários e comportamento de direção"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Alertas Inteligentes",
      description: "Alertas de movimento/ignição, excesso de velocidade e outros eventos importantes"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Relatórios Personalizados",
      description: "Relatórios detalhados e customizáveis para análise da sua frota"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Aplicativo Completo S-PRO",
      description: "App completo para celular com todas as funcionalidades de monitoramento"
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-darker-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-rethink">
            Serviços de <span className="text-primary">Rastreamento Veicular</span> em Imperatriz
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-rethink">
            Soluções completas em <strong>rastreamento veicular</strong> e <strong>monitoramento de frotas</strong> 
            com tecnologia GPS avançada para máxima segurança em Imperatriz MA
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-dark-blue/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 h-full"
            >
              <div className="text-primary mb-4 sm:mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 font-rethink">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-white/70 font-rethink leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/20">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 font-rethink">Cerca Eletrônica</h4>
            <p className="text-sm sm:text-base text-white/70 font-rethink">Defina áreas permitidas e receba alertas automáticos quando o veículo sair da zona autorizada.</p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/20">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 font-rethink">Bloqueio Remoto</h4>
            <p className="text-sm sm:text-base text-white/70 font-rethink">Sistema de bloqueio à distância para proteção contra roubos e furtos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
