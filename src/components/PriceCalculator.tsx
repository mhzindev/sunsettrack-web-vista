import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, Truck, Zap, CheckCircle, Info } from 'lucide-react';
const PriceCalculator = () => {
  const [vehicles, setVehicles] = useState([1]);
  const [plan, setPlan] = useState('basic');
  const [installment, setInstallment] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const plans = {
    basic: {
      name: 'Rastreamento Básico',
      monthlyPrice: 29.90,
      activationPrice: 180,
      features: ['Localização em tempo real', 'Histórico de 30 dias', 'Relatórios básicos', 'Suporte via WhatsApp']
    },
    advanced: {
      name: 'Rastreamento Avançado',
      monthlyPrice: 49.90,
      activationPrice: 280,
      features: ['Localização em tempo real', 'Histórico ilimitado', 'Relatórios avançados', 'Cercas eletrônicas', 'Alertas personalizados', 'Suporte prioritário']
    },
    complete: {
      name: 'Controle Total',
      monthlyPrice: 79.90,
      activationPrice: 380,
      features: ['Todas as funcionalidades', 'Monitoramento de combustível', 'Análise de condução', 'Dashboard executivo', 'API personalizada', 'Suporte 24/7']
    }
  };
  const installmentOptions = [{
    value: 1,
    label: '1x (à vista)',
    discount: 0.10
  }, {
    value: 2,
    label: '2x',
    discount: 0.05
  }, {
    value: 3,
    label: '3x',
    discount: 0
  }, {
    value: 6,
    label: '6x',
    discount: -0.05
  }, {
    value: 12,
    label: '12x',
    discount: -0.10
  }];
  const selectedPlan = plans[plan as keyof typeof plans];
  const selectedInstallment = installmentOptions.find(opt => opt.value === installment);
  const totalVehicles = vehicles[0];
  const monthlyTotal = selectedPlan.monthlyPrice * totalVehicles;
  const activationTotal = selectedPlan.activationPrice * totalVehicles;
  const discountedActivation = activationTotal * (1 + (selectedInstallment?.discount || 0));
  const monthlyPayment = discountedActivation / installment;
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return;
};
export default PriceCalculator;