
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
    <section id="services" className="py-20 bg-darker-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rethink">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-rethink">
            Soluções completas em rastreamento veicular para atender todas as necessidades da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-dark-blue/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-primary mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 font-rethink">
                {service.title}
              </h3>
              
              <p className="text-white/70 font-rethink leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-2xl p-6 border border-primary/20">
            <h4 className="text-lg font-semibold text-white mb-3 font-rethink">Cerca Eletrônica</h4>
            <p className="text-white/70 font-rethink">Defina áreas permitidas e receba alertas automáticos quando o veículo sair da zona autorizada.</p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-2xl p-6 border border-primary/20">
            <h4 className="text-lg font-semibold text-white mb-3 font-rethink">Bloqueio Remoto</h4>
            <p className="text-white/70 font-rethink">Sistema de bloqueio à distância para proteção contra roubos e furtos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
