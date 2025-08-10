import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star, Zap, Crown } from 'lucide-react';
const PlansComparison = () => {
  const [selectedPlan, setSelectedPlan] = useState('advanced');
  const plans = [{
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
  }, {
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
  }, {
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
  }];
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
    contactElement?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />;
    }
    return <span className="text-sm font-medium text-foreground">{value}</span>;
  };
  return;
};
export default PlansComparison;