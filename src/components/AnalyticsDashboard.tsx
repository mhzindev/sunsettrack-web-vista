import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Clock, 
  MapPin, 
  Fuel,
  Shield,
  AlertTriangle,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const AnalyticsDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    totalUsers: 0,
    activeFleets: 0,
    monthlySavings: 0,
    securityIncidents: 0
  });

  const metrics = {
    totalUsers: { target: 1250, suffix: '+', label: 'Clientes Ativos' },
    activeFleets: { target: 8500, suffix: '+', label: 'Veículos Monitorados' },
    monthlySavings: { target: 2.4, suffix: 'M', label: 'Economia Mensal (R$)' },
    securityIncidents: { target: 127, suffix: '', label: 'Roubos Evitados' }
  };

  const kpis = [
    {
      title: 'Redução de Combustível',
      value: '34%',
      change: '+5.2%',
      trend: 'up',
      icon: Fuel,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      progress: 74
    },
    {
      title: 'Tempo de Resposta',
      value: '2.3min',
      change: '-15%',
      trend: 'down',
      icon: Clock,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      progress: 89
    },
    {
      title: 'Cobertura Nacional',
      value: '98.5%',
      change: '+2.1%',
      trend: 'up',
      icon: MapPin,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      progress: 98.5
    },
    {
      title: 'Satisfação do Cliente',
      value: '4.8/5',
      change: '+0.3',
      trend: 'up',
      icon: Users,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      progress: 96
    }
  ];

  const recentActivity = [
    {
      type: 'success',
      message: 'Roubo evitado - Caminhão Mercedes SP-1234',
      time: '5 min atrás',
      icon: Shield
    },
    {
      type: 'alert',
      message: 'Velocidade alta detectada - Via Dutra KM 150',
      time: '12 min atrás',
      icon: AlertTriangle
    },
    {
      type: 'success',
      message: 'Nova frota ativada - Transportadora Silva',
      time: '1 hora atrás',
      icon: CheckCircle
    },
    {
      type: 'info',
      message: 'Relatório mensal gerado - Janeiro 2024',
      time: '2 horas atrás',
      icon: BarChart3
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counter values
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedValues({
        totalUsers: Math.floor(metrics.totalUsers.target * progress),
        activeFleets: Math.floor(metrics.activeFleets.target * progress),
        monthlySavings: Number((metrics.monthlySavings.target * progress).toFixed(1)),
        securityIncidents: Math.floor(metrics.securityIncidents.target * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);
    
    return () => clearInterval(interval);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-500 bg-green-50';
      case 'alert': return 'text-red-500 bg-red-50';
      case 'info': return 'text-blue-500 bg-blue-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-rethink">
            Nossos <span className="text-primary">Resultados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-rethink">
            Dados em tempo real que demonstram o impacto das nossas soluções no mercado brasileiro
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Object.entries(animatedValues).map(([key, value]) => {
              const metric = metrics[key as keyof typeof metrics];
              return (
                <Card key={key} className={`bg-card/50 backdrop-blur-sm border-primary/20 text-center transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <CardContent className="p-6">
                    <div className="text-3xl lg:text-4xl font-bold text-primary font-rethink mb-2">
                      {value}{metric.suffix}
                    </div>
                    <p className="text-sm text-muted-foreground font-rethink">{metric.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* KPIs */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-foreground font-rethink">Indicadores de Performance</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {kpis.map((kpi, index) => {
                  const Icon = kpi.icon;
                  const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown;
                  
                  return (
                    <Card key={index} className="bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-lg ${kpi.bgColor} flex items-center justify-center`}>
                            <Icon className={`w-6 h-6 ${kpi.color}`} />
                          </div>
                          <div className={`flex items-center ${kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                            <TrendIcon className="w-4 h-4 mr-1" />
                            <span className="text-sm font-medium font-rethink">{kpi.change}</span>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-foreground font-rethink mb-2">
                          {kpi.title}
                        </h4>
                        
                        <div className="text-2xl font-bold text-foreground font-rethink mb-3">
                          {kpi.value}
                        </div>
                        
                        <Progress value={kpi.progress} className="h-2" />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground font-rethink">Atividade Recente</h3>
              
              <Card className="bg-card/30 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-foreground font-rethink">Sistema em Tempo Real</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border border-muted/20 hover:border-primary/20 transition-colors">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityIcon(activity.type)}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground font-rethink">{activity.message}</p>
                          <p className="text-xs text-muted-foreground font-rethink">{activity.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Status Overview */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground font-rethink mb-4">
                    Status do Sistema
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-rethink">Uptime</span>
                      <div className="flex items-center">
                        <Badge className="bg-green-500 text-white mr-2">99.9%</Badge>
                        <span className="text-sm text-foreground font-rethink">Operacional</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-rethink">Resposta API</span>
                      <div className="flex items-center">
                        <Badge className="bg-blue-500 text-white mr-2">45ms</Badge>
                        <span className="text-sm text-foreground font-rethink">Excelente</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-rethink">Cobertura</span>
                      <div className="flex items-center">
                        <Badge className="bg-purple-500 text-white mr-2">Brasil</Badge>
                        <span className="text-sm text-foreground font-rethink">Nacional</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-rethink">
                  Faça Parte Destes Resultados
                </h3>
                <p className="text-muted-foreground mb-6 font-rethink">
                  Junte-se a mais de 1.250 empresas que já transformaram suas operações com nossas soluções
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="bg-background/50 rounded-lg px-6 py-3 border border-primary/20">
                    <div className="text-lg font-bold text-primary font-rethink">R$ 2.4M+</div>
                    <div className="text-xs text-muted-foreground font-rethink">Economizados mensalmente</div>
                  </div>
                  <div className="bg-background/50 rounded-lg px-6 py-3 border border-primary/20">
                    <div className="text-lg font-bold text-primary font-rethink">127</div>
                    <div className="text-xs text-muted-foreground font-rethink">Roubos evitados este mês</div>
                  </div>
                  <div className="bg-background/50 rounded-lg px-6 py-3 border border-primary/20">
                    <div className="text-lg font-bold text-primary font-rethink">98.5%</div>
                    <div className="text-xs text-muted-foreground font-rethink">Cobertura nacional</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;