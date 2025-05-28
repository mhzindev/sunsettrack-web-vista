
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Como é feita a instalação do equipamento?",
      answer: "A instalação é realizada por nossa equipe técnica especializada, de forma gratuita e em local de sua escolha. O processo leva cerca de 30 minutos e não afeta o funcionamento do veículo."
    },
    {
      question: "Qual a diferença entre os planos GSM e Satelital?",
      answer: "O plano GSM utiliza a rede de telefonia móvel, ideal para uso urbano com excelente custo-benefício. O plano Satelital oferece cobertura global, funcionando em qualquer lugar do mundo, ideal para áreas remotas."
    },
    {
      question: "O equipamento funciona em qualquer tipo de veículo?",
      answer: "Sim! Nossos equipamentos são compatíveis com carros, motos, caminhões, máquinas pesadas e qualquer tipo de veículo. Temos soluções específicas para cada necessidade."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte técnico especializado 24 horas por dia, 7 dias por semana. Nossa equipe está sempre disponível via WhatsApp, telefone ou através do app S-PRO."
    },
    {
      question: "Posso acompanhar meu veículo pelo celular?",
      answer: "Sim! Com o app S-PRO você tem acesso completo a todas as funcionalidades: localização em tempo real, histórico de trajetos, alertas e muito mais. Disponível para Android e iOS."
    },
    {
      question: "O que acontece se meu veículo for roubado?",
      answer: "Nossa equipe atua imediatamente para recuperação do veículo. Com mais de 10 anos de experiência, mantemos uma das maiores taxas de recuperação do mercado, chegando a 95% de sucesso."
    },
    {
      question: "Posso cancelar o serviço a qualquer momento?",
      answer: "Sim, não há fidelidade obrigatória. Você pode cancelar o serviço quando desejar. O equipamento é nosso e será recolhido sem custos adicionais."
    },
    {
      question: "Como funciona a cerca eletrônica?",
      answer: "Você define áreas permitidas pelo app S-PRO e recebe alertas automáticos sempre que o veículo entrar ou sair dessas zonas. Ideal para controle de uso e segurança."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-darker-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rethink">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-xl text-white/80 font-rethink">
              Tire suas dúvidas sobre nossos serviços de rastreamento veicular
            </p>
          </div>

          <div className="bg-dark-blue/50 backdrop-blur-sm rounded-3xl p-8 border border-primary/20">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-primary/20"
                >
                  <AccordionTrigger className="text-white hover:text-primary font-rethink text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 font-rethink leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-white/70 font-rethink mb-6">
              Não encontrou a resposta que procurava?
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-rethink"
              onClick={() => window.open('https://wa.me/5599999350533', '_blank')}
            >
              Fale Conosco no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
