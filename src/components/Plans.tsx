
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: "Plano GSM",
      subtitle: "Recomendado",
      description: "Rastreamento via rede de telefonia móvel",
      activationPrice: "R$ 150,00",
      monthlyPrice: "R$ 70,00",
      features: [
        "Rastreamento via rede GSM",
        "Ampla cobertura urbana",
        "Localização em tempo real",
        "Histórico de trajetos",
        "Alertas inteligentes",
        "App S-PRO incluso",
        "Suporte técnico"
      ],
      highlighted: true,
      coverage: "Cobertura urbana completa"
    },
    {
      name: "Plano Satelital",
      subtitle: "",
      description: "Rastreamento por satélite com cobertura global",
      activationPrice: "R$ 600,00",
      monthlyPrice: "R$ 200,00",
      features: [
        "Rastreamento satelital",
        "Cobertura global",
        "Funciona em áreas remotas",
        "Alta precisão",
        "Localização em tempo real",
        "App S-PRO incluso",
        "Suporte especializado"
      ],
      highlighted: false,
      coverage: "Funciona em qualquer lugar do mundo"
    },
    {
      name: "GSM + Videomonitoramento",
      subtitle: "",
      description: "Rastreamento + câmeras de segurança",
      activationPrice: "R$ 1.000,00",
      monthlyPrice: "R$ 200,00",
      features: [
        "Rastreamento GSM completo",
        "Até 4 câmeras incluídas",
        "Monitoramento visual em tempo real",
        "Gravação de imagens",
        "Alertas com foto",
        "App S-PRO completo",
        "Suporte prioritário"
      ],
      highlighted: false,
      coverage: "Segurança visual completa"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="plans" className="py-20 bg-darker-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rethink">
            Planos e <span className="text-primary">Preços</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-rethink">
            Escolha o plano ideal para suas necessidades. Todos incluem instalação gratuita e equipamento incluso.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-primary shadow-xl shadow-primary/20' 
                  : 'bg-dark-blue/50 border-primary/20 hover:border-primary/40'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold font-rethink flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    {plan.subtitle}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 font-rethink">
                  {plan.name}
                </h3>
                <p className="text-white/70 font-rethink mb-6">
                  {plan.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 font-rethink">Ativação:</span>
                    <span className="text-xl font-bold text-primary font-rethink">
                      {plan.activationPrice}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 font-rethink">Mensalidade:</span>
                    <span className="text-2xl font-bold text-primary font-rethink">
                      {plan.monthlyPrice}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-white/60 font-rethink bg-white/5 rounded-lg p-2">
                  {plan.coverage}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/80 font-rethink">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 font-rethink ${
                  plan.highlighted 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white'
                }`}
                onClick={scrollToContact}
              >
                Quero este plano
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/70 font-rethink mb-4">
            * Equipamento incluso na mensalidade | Instalação gratuita | Sem taxa de adesão
          </p>
          <p className="text-primary font-rethink">
            Desconto especial para frotas acima de 10 veículos - Entre em contato!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
