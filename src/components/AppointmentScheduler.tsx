import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { CalendarIcon, Clock, MapPin, User, Phone, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  company: z.string().min(2, 'Nome da empresa é obrigatório'),
  fleetSize: z.string().min(1, 'Selecione o tamanho da frota'),
  service: z.string().min(1, 'Selecione o serviço desejado'),
  date: z.date({
    required_error: "Data é obrigatória",
  }),
  time: z.string().min(1, 'Selecione um horário'),
  location: z.string().min(1, 'Selecione o local'),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const AppointmentScheduler = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      fleetSize: '',
      service: '',
      time: '',
      location: '',
      notes: '',
    },
  });

  const fleetSizes = [
    { value: '1-5', label: '1 a 5 veículos' },
    { value: '6-20', label: '6 a 20 veículos' },
    { value: '21-50', label: '21 a 50 veículos' },
    { value: '51-100', label: '51 a 100 veículos' },
    { value: '100+', label: 'Mais de 100 veículos' },
  ];

  const services = [
    { value: 'demo', label: 'Demonstração da Plataforma' },
    { value: 'consultation', label: 'Consultoria Personalizada' },
    { value: 'installation', label: 'Instalação e Configuração' },
    { value: 'training', label: 'Treinamento da Equipe' },
    { value: 'support', label: 'Suporte Técnico' },
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const locations = [
    { value: 'client', label: 'Na sua empresa' },
    { value: 'office', label: 'Em nosso escritório' },
    { value: 'online', label: 'Videoconferência' },
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create WhatsApp message
      const message = `Agendamento solicitado:

Nome: ${data.name}
Email: ${data.email}
Telefone: ${data.phone}
Empresa: ${data.company}
Tamanho da Frota: ${data.fleetSize}
Serviço: ${services.find(s => s.value === data.service)?.label}
Data: ${format(data.date, 'dd/MM/yyyy', { locale: ptBR })}
Horário: ${data.time}
Local: ${locations.find(l => l.value === data.location)?.label}
${data.notes ? `Observações: ${data.notes}` : ''}`;
      
      const whatsappUrl = `https://wa.me/5599999350533?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setIsSuccess(true);
      
      toast({
        title: "Agendamento solicitado!",
        description: "Nossa equipe entrará em contato para confirmar o horário.",
      });
      
    } catch (error) {
      toast({
        title: "Erro ao agendar",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4 font-rethink">
                  Agendamento Enviado!
                </h2>
                <p className="text-muted-foreground mb-8 font-rethink">
                  Recebemos sua solicitação de agendamento. Nossa equipe entrará em contato em até 2 horas úteis para confirmar o horário e detalhes.
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-rethink"
                >
                  Agendar Outro Horário
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-rethink">
            Agende uma <span className="text-primary">Demonstração</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-rethink">
            Reserve um horário com nossos especialistas para conhecer todas as funcionalidades da nossa plataforma
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground font-rethink">
                O que você vai receber:
              </h3>
              
              {[
                {
                  title: 'Demonstração Personalizada',
                  description: 'Veja a plataforma funcionando com dados similares à sua frota',
                  icon: User
                },
                {
                  title: 'Consultoria Gratuita',
                  description: 'Análise das necessidades específicas da sua empresa',
                  icon: MapPin
                },
                {
                  title: 'Proposta Customizada',
                  description: 'Orçamento detalhado baseado no seu perfil de uso',
                  icon: Clock
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground font-rethink">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground font-rethink">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}

              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2 font-rethink">Duração:</h4>
                <p className="text-sm text-muted-foreground font-rethink">
                  30 a 60 minutos, dependendo do serviço selecionado
                </p>
                <h4 className="font-semibold text-foreground mt-3 mb-2 font-rethink">Disponibilidade:</h4>
                <p className="text-sm text-muted-foreground font-rethink">
                  Segunda a sexta, 8h às 18h
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-foreground font-rethink">
                    Preencha os dados para agendamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Personal Info */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-rethink">Nome Completo *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Seu nome"
                                  {...field}
                                  className="bg-background/50 border-primary/20 focus:border-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-rethink">Email *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="seu@email.com"
                                  type="email"
                                  {...field}
                                  className="bg-background/50 border-primary/20 focus:border-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-rethink">Telefone *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="(99) 99999-9999"
                                  {...field}
                                  className="bg-background/50 border-primary/20 focus:border-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-rethink">Empresa *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Nome da empresa"
                                  {...field}
                                  className="bg-background/50 border-primary/20 focus:border-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Fleet Info */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="fleetSize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-rethink">Tamanho da Frota *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary">
                                    <SelectValue placeholder="Selecione" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {fleetSizes.map((size) => (
                                    <SelectItem key={size.value} value={size.value}>
                                      {size.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-rethink">Serviço Desejado *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary">
                                    <SelectValue placeholder="Selecione" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {services.map((service) => (
                                    <SelectItem key={service.value} value={service.value}>
                                      {service.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Date and Time */}
                      <div className="grid md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-rethink">Data *</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant="outline"
                                      className={cn(
                                        "w-full pl-3 text-left font-normal bg-background/50 border-primary/20 focus:border-primary",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "dd/MM/yyyy")
                                      ) : (
                                        <span>Selecione</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date < new Date() || date.getDay() === 0 || date.getDay() === 6
                                    }
                                    initialFocus
                                    className={cn("p-3 pointer-events-auto")}
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-rethink">Horário *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary">
                                    <SelectValue placeholder="Selecione" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-rethink">Local *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary">
                                    <SelectValue placeholder="Selecione" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {locations.map((location) => (
                                    <SelectItem key={location.value} value={location.value}>
                                      {location.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Notes */}
                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-rethink">Observações</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Informações adicionais sobre sua necessidade..."
                                className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-rethink"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        ) : (
                          <CalendarIcon className="w-5 h-5 mr-2" />
                        )}
                        {isSubmitting ? 'Agendando...' : 'Agendar Demonstração'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentScheduler;