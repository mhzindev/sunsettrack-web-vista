
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: "Básico",
      price: "R$ 29,90",
      period: "/mês",
      description: "Ideal para veículos pessoais",
      features: [
        "Localização em tempo real",
        "Histórico de 30 dias",
        "Alertas básicos",
        "Suporte por email",
        "App mobile"
      ],
      highlighted: false
    },
    {
      name: "Profissional",
      price: "R$ 49,90",
      period: "/mês",
      description: "Perfeito para pequenas frotas",
      features: [
        "Tudo do plano Básico",
        "Histórico de 90 dias",
        "Relatórios avançados",
        "Cerca eletrônica",
        "Suporte prioritário",
        "Múltiplos usuários"
      ],
      highlighted: true
    },
    {
      name: "Empresarial",
      price: "R$ 89,90",
      period: "/mês",
      description: "Solução completa para frotas",
      features: [
        "Tudo do plano Profissional",
        "Histórico ilimitado",
        "API personalizada",
        "Integração com sistemas",
        "Suporte 24h",
        "Treinamento incluso",
        "Relatórios personalizados"
      ],
      highlighted: false
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

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold font-rethink">
                    Mais Popular
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
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold text-primary font-rethink">
                    {plan.price}
                  </span>
                  <span className="text-white/70 font-rethink ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
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
                Contratar Plano
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
