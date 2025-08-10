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

  const installmentOptions = [
    { value: 1, label: '1x (à vista)', discount: 0.10 },
    { value: 2, label: '2x', discount: 0.05 },
    { value: 3, label: '3x', discount: 0 },
    { value: 6, label: '6x', discount: -0.05 },
    { value: 12, label: '12x', discount: -0.10 }
  ];

  const selectedPlan = plans[plan as keyof typeof plans];
  const selectedInstallment = installmentOptions.find(opt => opt.value === installment);
  
  const totalVehicles = vehicles[0];
  const monthlyTotal = selectedPlan.monthlyPrice * totalVehicles;
  const activationTotal = selectedPlan.activationPrice * totalVehicles;
  const discountedActivation = activationTotal * (1 + (selectedInstallment?.discount || 0));
  const monthlyPayment = discountedActivation / installment;

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-rethink">
            Calcule o <span className="text-primary">Investimento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-rethink">
            Descubra quanto custa proteger sua frota com nossas soluções personalizadas
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground font-rethink">
                <Calculator className="w-6 h-6 text-primary mr-3" />
                Configurar Simulação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Vehicle Count */}
              <div className="space-y-4">
                <Label className="text-foreground font-rethink flex items-center">
                  <Truck className="w-4 h-4 mr-2" />
                  Quantidade de Veículos: {totalVehicles}
                </Label>
                <Slider
                  value={vehicles}
                  onValueChange={setVehicles}
                  max={50}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground font-rethink">
                  <span>1 veículo</span>
                  <span>50+ veículos</span>
                </div>
              </div>

              {/* Plan Selection */}
              <div className="space-y-4">
                <Label className="text-foreground font-rethink flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Plano de Rastreamento
                </Label>
                <Select value={plan} onValueChange={setPlan}>
                  <SelectTrigger className="bg-background/50 border-primary/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(plans).map(([key, planData]) => (
                      <SelectItem key={key} value={key}>
                        {planData.name} - R$ {planData.monthlyPrice.toFixed(2)}/mês
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Installment Selection */}
              <div className="space-y-4">
                <Label className="text-foreground font-rethink">
                  Parcelamento da Ativação
                </Label>
                <Select value={installment.toString()} onValueChange={(value) => setInstallment(parseInt(value))}>
                  <SelectTrigger className="bg-background/50 border-primary/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {installmentOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value.toString()}>
                        {option.label}
                        {option.discount > 0 && (
                          <span className="text-green-600 ml-2">
                            ({(option.discount * 100).toFixed(0)}% desconto)
                          </span>
                        )}
                        {option.discount < 0 && (
                          <span className="text-orange-600 ml-2">
                            (+{Math.abs(option.discount * 100).toFixed(0)}% juros)
                          </span>
                        )}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={() => setShowDetails(!showDetails)}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Info className="w-4 h-4 mr-2" />
                {showDetails ? 'Ocultar' : 'Ver'} Detalhes do Plano
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {/* Price Summary */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground font-rethink">Resumo do Investimento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-primary/20">
                    <span className="font-rethink text-muted-foreground">Plano Mensal</span>
                    <span className="font-bold text-lg text-foreground font-rethink">
                      R$ {monthlyTotal.toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-primary/20">
                    <span className="font-rethink text-muted-foreground">
                      Ativação ({installment}x)
                    </span>
                    <span className="font-bold text-lg text-foreground font-rethink">
                      R$ {monthlyPayment.toFixed(2)}
                    </span>
                  </div>

                  <div className="bg-primary/10 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground font-rethink">
                        Total Primeiro Mês
                      </span>
                      <span className="font-bold text-2xl text-primary font-rethink">
                        R$ {(monthlyTotal + monthlyPayment).toFixed(2)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 font-rethink">
                      A partir do 2º mês: R$ {monthlyTotal.toFixed(2)}
                    </p>
                  </div>
                </div>

                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-rethink"
                  size="lg"
                >
                  Solicitar Proposta Personalizada
                </Button>
              </CardContent>
            </Card>

            {/* Plan Features */}
            {showDetails && (
              <Card className="bg-card/30 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-foreground font-rethink">
                    {selectedPlan.name} - Funcionalidades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {selectedPlan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-foreground font-rethink">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground font-rethink">
            * Valores promocionais válidos até o final do mês. Consulte condições especiais para frotas acima de 50 veículos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;