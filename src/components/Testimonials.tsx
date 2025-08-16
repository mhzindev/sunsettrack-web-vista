import { Star, Shield, Clock, Users, CheckCircle, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from 'react';
const testimonials = [{
  id: 1,
  name: "Carlos Silva",
  role: "Proprietário",
  company: "Moto Honda CB 600",
  avatar: "CS",
  rating: 5,
  content: "Em apenas 30 minutos recuperei minha moto! O app S-PRO me alertou imediatamente sobre o movimento suspeito. Investimento que vale cada centavo.",
  timeUsing: "2 anos",
  verified: true
}, {
  id: 2,
  name: "Maria Santos",
  role: "Gestora de Frota",
  company: "Transportes Santos Ltda",
  avatar: "MS",
  rating: 5,
  content: "Reduziu 45% os custos operacionais da nossa frota de 25 veículos. O relatório de condutores transformou nossa gestão completamente.",
  timeUsing: "3 anos",
  verified: true
}, {
  id: 3,
  name: "João Pereira",
  role: "Empresário",
  company: "Carro Civic 2022",
  avatar: "JP",
  rating: 5,
  content: "Já uso há 4 anos, nunca tive problemas. A tranquilidade de saber que meu veículo está protegido 24h não tem preço.",
  timeUsing: "4 anos",
  verified: true
}, {
  id: 4,
  name: "Ana Costa",
  role: "Coordenadora",
  company: "Logística Costa & Cia",
  avatar: "AC",
  rating: 5,
  content: "A recuperação do nosso caminhão em tempo recorde salvou a operação. Eficiência e profissionalismo incomparáveis no mercado.",
  timeUsing: "1 ano",
  verified: true
}, {
  id: 5,
  name: "Roberto Lima",
  role: "Motorista",
  company: "Pickup Hilux",
  avatar: "RL",
  rating: 5,
  content: "Sistema impecável! Quando tentaram levar minha pickup, o rastreamento funcionou perfeitamente. Polícia chegou em minutos.",
  timeUsing: "3 anos",
  verified: true
}];
const stats = [{
  icon: Shield,
  value: "100%",
  label: "Taxa de Recuperação",
  description: "Veículos recuperados"
}, {
  icon: Clock,
  value: "< 30min",
  label: "Tempo Médio",
  description: "Para localização"
}, {
  icon: Users,
  value: "50K+",
  label: "Clientes Satisfeitos",
  description: "Em todo o país"
}, {
  icon: Star,
  value: "9.8/10",
  label: "Avaliação Média",
  description: "Satisfação dos clientes"
}];
const Testimonials = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5599999350533', '_blank');
  };
  return <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-dark-blue to-darker-blue font-rethink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Mais de 50.000 clientes confiam em nossa tecnologia para proteger seus veículos
          </p>
        </div>

        {/* Stats Grid - Melhor responsividade */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return <div key={index} className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 bg-dark-blue/50 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 rounded-full bg-primary/20">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 font-rethink">
                    {stat.value}
                  </div>
                  <div className="text-primary font-semibold mb-1 font-rethink text-sm sm:text-base">
                    {stat.label}
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm font-rethink">
                    {stat.description}
                  </div>
                </div>
              </div>;
        })}
        </div>

        {/* Testimonials Carousel - Navegação Moderna */}
        <div className="relative mb-8 sm:mb-12">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {testimonials.map(testimonial => <CarouselItem key={testimonial.id} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 bg-dark-blue/50 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-[1.02] h-full">
                    <div className="h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="flex justify-between items-start mb-3 sm:mb-4">
                        <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/60" />
                        {testimonial.verified && <div className="flex items-center gap-1 text-xs text-primary font-rethink">
                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline">Verificado</span>
                          </div>}
                      </div>

                      {/* Content */}
                      <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed font-rethink flex-grow text-sm sm:text-base">
                        "{testimonial.content}"
                      </p>

                      {/* Rating */}
                      <div className="flex gap-1 mb-3 sm:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-primary text-primary" />)}
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold font-rethink text-sm sm:text-base">
                          {testimonial.avatar}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-white font-rethink text-sm sm:text-base truncate">
                            {testimonial.name}
                          </div>
                          <div className="text-white/60 text-xs sm:text-sm font-rethink truncate">
                            {testimonial.role}
                          </div>
                          <div className="text-primary text-xs sm:text-sm font-rethink truncate">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>

                      {/* Time Using */}
                      <div className="text-white/60 text-xs border-t border-primary/10 pt-2 sm:pt-3 font-rethink">
                        Cliente há {testimonial.timeUsing}
                      </div>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            
            {/* Navegação Customizada */}
            <div className="hidden sm:block">
              <CarouselPrevious className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 bg-dark-blue/80 border-primary/30 hover:bg-primary/20 hover:border-primary h-10 w-10 lg:h-12 lg:w-12" />
              <CarouselNext className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 bg-dark-blue/80 border-primary/30 hover:bg-primary/20 hover:border-primary h-10 w-10 lg:h-12 lg:w-12" />
            </div>
          </Carousel>

          {/* Indicadores de Progresso Modernos */}
          <div className="flex justify-center items-center gap-3 mt-6 sm:mt-8">
            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    index === current - 1
                      ? 'bg-primary w-8 h-2'
                      : 'bg-white/20 hover:bg-white/40 w-2 h-2'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
            <div className="text-white/60 text-xs font-rethink ml-2">
              {current} de {count}
            </div>
          </div>
        </div>

        {/* CTA Section - Melhor Responsividade */}
        <div className="text-center px-2 sm:px-0">
          <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 transition-all duration-300 hover:border-primary/40 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 font-rethink">
              Seja nosso próximo <span className="text-primary">caso de sucesso</span>
            </h3>
            <p className="text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto font-rethink text-sm sm:text-base lg:text-lg">
              Junte-se a mais de 50.000 clientes que já protegem seus veículos com nossa tecnologia
            </p>
            <Button onClick={handleWhatsAppClick} size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 sm:px-8 py-3 font-rethink text-sm sm:text-base w-full sm:w-auto">
              Quero Proteger Meu Veículo
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;