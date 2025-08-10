import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Eduardo Silva',
    company: 'Transportadora Silva & Cia',
    role: 'Diretor Comercial',
    content: 'A Sunset Track transformou nossa operação. Reduzimos 40% dos custos com combustível e melhoramos significativamente a segurança da nossa frota.',
    rating: 5,
    image: '/lovable-uploads/f2d7eddc-7e28-427f-b221-333544d1a4d0.png'
  },
  {
    id: 2,
    name: 'Maria Fernanda Costa',
    company: 'Logística Moderna',
    role: 'Gerente de Operações',
    content: 'O suporte técnico é excepcional e a plataforma S-PRO é muito intuitiva. Conseguimos monitorar toda nossa frota em tempo real com facilidade.',
    rating: 5,
    image: '/lovable-uploads/2581c9e9-22e7-4871-8084-898db8ce4e52.png'
  },
  {
    id: 3,
    name: 'Roberto Santos',
    company: 'Distribuidora Norte',
    role: 'Proprietário',
    content: 'Investimento que se pagou rapidamente. A economia em combustível e a redução de roubos compensaram o valor investido em poucos meses.',
    rating: 5,
    image: '/lovable-uploads/48b2777d-dee4-4f41-b703-80497a1f177c.png'
  },
  {
    id: 4,
    name: 'Ana Paula Oliveira',
    company: 'Express Delivery',
    role: 'Coordenadora de Frota',
    content: 'A tecnologia de ponta da Sunset Track nos deu uma vantagem competitiva. Nossos clientes agora recebem atualizações precisas de entrega.',
    rating: 5,
    image: '/lovable-uploads/176031d1-0f86-4fbf-a64b-7a9f20009f89.png'
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 h-full hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105">
    <div className="flex items-center mb-6">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
      />
      <div className="ml-4">
        <h4 className="font-semibold text-foreground font-rethink">{testimonial.name}</h4>
        <p className="text-sm text-muted-foreground font-rethink">{testimonial.role}</p>
        <p className="text-sm text-primary font-rethink">{testimonial.company}</p>
      </div>
    </div>

    <div className="flex items-center mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>

    <div className="relative">
      <Quote className="w-8 h-8 text-primary/30 absolute -top-2 -left-2" />
      <p className="text-foreground/80 font-rethink leading-relaxed pl-6">
        {testimonial.content}
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-rethink">
            O que nossos <span className="text-primary">Clientes</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-rethink">
            Histórias reais de empresas que transformaram suas operações com nossas soluções de rastreamento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-card/50 backdrop-blur-sm rounded-full px-8 py-4 border border-primary/20">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((testimonial) => (
                  <img
                    key={testimonial.id}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground font-rethink">+50 empresas confiam</p>
                <p className="text-xs text-muted-foreground font-rethink">em nossas soluções</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;