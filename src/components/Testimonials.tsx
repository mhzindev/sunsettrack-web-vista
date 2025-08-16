import { Star, Shield, Clock, Users, CheckCircle, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return <Card key={index} className="bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/20">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white/60 text-sm">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-12">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map(testimonial => <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Quote Icon */}
                      <div className="flex justify-between items-start mb-4">
                        <Quote className="h-8 w-8 text-primary/60" />
                        {testimonial.verified && <div className="flex items-center gap-1 text-xs text-primary">
                            <CheckCircle className="h-4 w-4" />
                            Verificado
                          </div>}
                      </div>

                      {/* Content */}
                      <p className="text-white/90 mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-white/60 text-sm">
                            {testimonial.role}
                          </div>
                          <div className="text-primary text-sm">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>

                      {/* Time Using */}
                      <div className="text-white/60 text-xs border-t border-primary/10 pt-3">
                        Cliente há {testimonial.timeUsing}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Seja nosso próximo <span className="text-primary">caso de sucesso</span>
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">Junte-se a mais de 1.000 clientes que já protegem seus veículos com nossa tecnologia</p>
              <Button onClick={handleWhatsAppClick} size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3">
                Quero Proteger Meu Veículo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Testimonials;