import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star, Zap, Crown } from 'lucide-react';

const PlansComparison = () => {
  const [selectedPlan, setSelectedPlan] = useState('advanced');

  const plans = [
    {
      id: 'basic',
      name: 'Rastreamento Básico',
      subtitle: 'Ideal para frotas pequenas',
      price: 29.90,
      activation: 180,
      icon: Star,
      color: 'from-blue-500 to-blue-600',
      features: {
        tracking: true,
        history: '30 dias',
        reports: 'Básicos',
        geofencing: false,
        alerts: false,
        fuel: false,
        api: false,
        support: 'WhatsApp',
        dashboard: 'Básico',
        mobile: true,
        maintenance: false,
        analytics: false
      }
    },
    {
      id: 'advanced',
      name: 'Rastreamento Avançado',
      subtitle: 'Mais popular entre empresas',
      price: 49.90,
      activation: 280,
      icon: Zap,
      color: 'from-primary to-primary/80',
      popular: true,
      features: {
        tracking: true,
        history: 'Ilimitado',
        reports: 'Avançados',
        geofencing: true,
        alerts: true,
        fuel: false,
        api: false,
        support: 'Prioritário',
        dashboard: 'Avançado',
        mobile: true,
        maintenance: true,
        analytics: 'Básico'
      }
    },
    {
      id: 'complete',
      name: 'Controle Total',
      subtitle: 'Solução empresarial completa',
      price: 79.90,
      activation: 380,
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      features: {
        tracking: true,
        history: 'Ilimitado',
        reports: 'Personalizados',
        geofencing: true,
        alerts: true,
        fuel: true,
        api: true,
        support: '24/7',
        dashboard: 'Executivo',
        mobile: true,
        maintenance: true,
        analytics: 'Avançado'
      }
    }
  ];

  const featureLabels = {
    tracking: 'Rastreamento em tempo real',
    history: 'Histórico de rotas',
    reports: 'Relatórios',
    geofencing: 'Cercas eletrônicas',
    alerts: 'Alertas personalizados',
    fuel: 'Monitoramento de combustível',
    api: 'API personalizada',
    support: 'Suporte técnico',
    dashboard: 'Dashboard',
    mobile: 'App móvel',
    maintenance: 'Alertas de manutenção',
    analytics: 'Analytics avançado'
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
      );
    }
    return <span className="text-sm font-medium text-foreground">{value}</span>;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-rethink">
            Compare nossos <span className="text-primary">Planos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-rethink">
            Encontre o plano perfeito para sua frota com nossa comparação detalhada
          </p>
        </div>

        {/* Mobile Plan Selector */}
        <div className="lg:hidden mb-8">
          <div className="flex gap-2 p-2 bg-muted rounded-lg">
            {plans.map((plan) => (
              <Button
                key={plan.id}
                variant={selectedPlan === plan.id ? "default" : "ghost"}
                onClick={() => setSelectedPlan(plan.id)}
                className="flex-1 text-xs"
              >
                {plan.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop Comparison Table */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Features Column */}
              <div className="space-y-4">
                <div className="h-[280px] flex items-end">
                  <h3 className="text-lg font-semibold text-foreground font-rethink">
                    Funcionalidades
                  </h3>
                </div>
                {Object.entries(featureLabels).map(([key, label]) => (
                  <div key={key} className="h-12 flex items-center">
                    <span className="text-sm text-muted-foreground font-rethink">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Plan Columns */}
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div key={plan.id} className="relative">
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge className="bg-primary text-primary-foreground px-3 py-1">
                          Mais Popular
                        </Badge>
                      </div>
                    )}
                    
                    <Card className={`border-2 ${plan.popular ? 'border-primary' : 'border-muted'} bg-card/50 backdrop-blur-sm`}>
                      <CardHeader className="text-center pb-8">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground font-rethink">
                          {plan.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-rethink">
                          {plan.subtitle}
                        </p>
                        <div className="pt-4">
                          <div className="text-3xl font-bold text-primary font-rethink">
                            R$ {plan.price.toFixed(2)}
                          </div>
                          <div className="text-sm text-muted-foreground font-rethink">
                            por veículo/mês
                          </div>
                          <div className="text-xs text-muted-foreground font-rethink mt-2">
                            + R$ {plan.activation} ativação
                          </div>
                        </div>
                        <Button 
                          className={`w-full mt-4 ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''} font-rethink`}
                          variant={plan.popular ? "default" : "outline"}
                          onClick={scrollToContact}
                        >
                          Contratar Agora
                        </Button>
                      </CardHeader>
                    </Card>

                    {/* Features */}
                    <div className="space-y-4 mt-4">
                      {Object.entries(plan.features).map(([key, value]) => (
                        <div key={key} className="h-12 flex items-center justify-center">
                          {renderFeatureValue(value)}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden">
            {plans
              .filter(plan => plan.id === selectedPlan)
              .map(plan => {
                const Icon = plan.icon;
                return (
                  <Card key={plan.id} className="bg-card/50 backdrop-blur-sm border-primary/20">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground font-rethink">
                        {plan.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-rethink">
                        {plan.subtitle}
                      </p>
                      <div className="pt-4">
                        <div className="text-3xl font-bold text-primary font-rethink">
                          R$ {plan.price.toFixed(2)}
                        </div>
                        <div className="text-sm text-muted-foreground font-rethink">
                          por veículo/mês
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {Object.entries(plan.features).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between py-2 border-b border-muted/20">
                            <span className="text-sm text-muted-foreground font-rethink">
                              {featureLabels[key as keyof typeof featureLabels]}
                            </span>
                            <div className="flex items-center">
                              {renderFeatureValue(value)}
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button 
                        className="w-full mt-6 bg-primary hover:bg-primary/90 font-rethink"
                        onClick={scrollToContact}
                      >
                        Contratar Agora
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansComparison;