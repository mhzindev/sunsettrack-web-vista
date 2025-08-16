import React, { useState } from 'react';
import { Calendar, Search, Users, FileText, Smartphone, Bell, MapPin, Shield, BarChart3, Clock, Zap, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const Services = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const functionalities = [{
    icon: <Search className="w-8 h-8" />,
    title: "Rastreamento em tempo real 24h",
    description: "Acompanhamento em tempo real da localização e status dos seus veículos",
    metrics: "Atualização: 30 segundos",
    demo: "live-tracking",
    technical: "Sistema GPS/GLONASS com precisão de 3-5 metros"
  }, {
    icon: <Calendar className="w-8 h-8" />,
    title: "Histórico de Rotas",
    description: "Relatórios detalhados de trajetos, paradas e deslocamentos",
    metrics: "Dados: 365 dias",
    demo: "route-history",
    technical: "Armazenamento de dados completo com análise de padrões"
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Gestão de Motoristas",
    description: "Controle de condutores, horários e comportamento no trânsito",
    metrics: "Score: 0-100",
    demo: "driver-management",
    technical: "Análise de condução e comportamento no trânsito"
  }, {
    icon: <Bell className="w-8 h-8" />,
    title: "Alertas Inteligentes",
    description: "Alertas de movimento/ignição, excesso de velocidade e outros eventos importantes",
    metrics: "Resposta: < 60s",
    demo: "smart-alerts",
    technical: "Sistema de notificações multichannel em tempo real"
  }, {
    icon: <FileText className="w-8 h-8" />,
    title: "Relatórios Personalizados",
    description: "Relatórios detalhados e customizáveis para análise da sua frota",
    metrics: "Formatos: PDF, Excel",
    demo: "custom-reports",
    technical: "Engine de relatórios com mais de 50 métricas disponíveis"
  }, {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Aplicativo Completo S-PRO",
    description: "App completo para celular com todas as funcionalidades de monitoramento",
    metrics: "iOS/Android",
    demo: "mobile-app",
    technical: "App nativo com sincronização offline e push notifications"
  }];
  const performanceMetrics = [{
    label: "Precisão GPS",
    value: "99.8%",
    icon: <MapPin className="w-5 h-5" />
  }, {
    label: "Uptime da Plataforma",
    value: "99.9%",
    icon: <Zap className="w-5 h-5" />
  }, {
    label: "Tempo de Resposta",
    value: "< 30s",
    icon: <Clock className="w-5 h-5" />
  }, {
    label: "Alertas Processados/dia",
    value: "50K+",
    icon: <BarChart3 className="w-5 h-5" />
  }];
  const renderDemo = (demoType: string) => {
    switch (demoType) {
      case 'live-tracking':
        return <div className="bg-darker-blue/80 rounded-lg p-4 border border-primary/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-primary">Veículo Online</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-white/70">Ao vivo</span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex justify-between">
                <span>Localização:</span>
                <span className="text-primary">São Paulo, SP</span>
              </div>
              <div className="flex justify-between">
                <span>Velocidade:</span>
                <span className="text-green-400">45 km/h</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-blue-400">Em movimento</span>
              </div>
            </div>
          </div>;
      case 'route-history':
        return <div className="bg-darker-blue/80 rounded-lg p-4 border border-primary/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-primary">Rota de Hoje</span>
              <span className="text-xs text-white/70">8h30 - 17h45</span>
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Início: Centro - 8h30</span>
              </div>
              <div className="w-px h-4 bg-primary/30 ml-1"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Parada: Zona Sul - 12h15</span>
              </div>
              <div className="w-px h-4 bg-primary/30 ml-1"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Atual: Zona Norte - 17h45</span>
              </div>
            </div>
          </div>;
      case 'driver-management':
        return <div className="bg-darker-blue/80 rounded-lg p-4 border border-primary/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-primary">João Silva</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs text-white/70">Ativo</span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex justify-between">
                <span>Score de Condução:</span>
                <span className="text-green-400 font-semibold">87/100</span>
              </div>
              <div className="flex justify-between">
                <span>Horas Dirigidas:</span>
                <span className="text-blue-400">6h 24m</span>
              </div>
              <div className="flex justify-between">
                <span>Infrações:</span>
                <span className="text-yellow-400">2 esta semana</span>
              </div>
            </div>
          </div>;
      case 'smart-alerts':
        return <div className="bg-darker-blue/80 rounded-lg p-4 border border-primary/30">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 p-2 bg-red-500/20 rounded border-l-2 border-red-500">
                <Bell className="w-4 h-4 text-red-400" />
                <div className="text-sm">
                  <span className="text-red-400 font-medium">Excesso de velocidade</span>
                  <div className="text-white/70 text-xs">Agora - Marginal Pinheiros</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-yellow-500/20 rounded border-l-2 border-yellow-500">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <div className="text-sm">
                  <span className="text-yellow-400 font-medium">Saída da área</span>
                  <div className="text-white/70 text-xs">2 min atrás - Zona Centro</div>
                </div>
              </div>
            </div>
          </div>;
      case 'custom-reports':
        return <div className="bg-darker-blue/80 rounded-lg p-4 border border-primary/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-primary">Relatório Semanal</span>
              <Button size="sm" variant="outline" className="h-6 text-xs">
                <FileText className="w-3 h-3 mr-1" />
                Baixar PDF
              </Button>
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-white/60">Km Rodados:</span>
                  <div className="text-primary font-semibold">1.247 km</div>
                </div>
                <div>
                  <span className="text-white/60">Combustível:</span>
                  <div className="text-green-400 font-semibold">R$ 380,50</div>
                </div>
              </div>
              <div className="w-full bg-darker-blue/50 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-3/4"></div>
              </div>
              <span className="text-xs text-white/60">Eficiência: 75%</span>
            </div>
          </div>;
      case 'mobile-app':
        return <div className="bg-darker-blue/80 rounded-lg p-4 border border-primary/30">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-dark-blue/50 rounded-lg p-3 w-24 h-32 border border-primary/20">
                <div className="space-y-2">
                  <div className="bg-primary/30 h-2 rounded w-full"></div>
                  <div className="bg-primary/20 h-1 rounded w-3/4"></div>
                  <div className="bg-primary/20 h-1 rounded w-1/2"></div>
                  <div className="flex space-x-1 mt-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-primary mb-1">S-PRO Mobile</p>
              <p className="text-xs text-white/70">Todas as funcionalidades na palma da mão</p>
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <section id="services" className="py-12 sm:py-16 lg:py-20 bg-darker-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-rethink">
            Funcionalidades da <span className="text-primary">Plataforma</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-rethink">
            Recursos avançados integrados para monitoramento completo e controle total da sua frota
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-16">
          {performanceMetrics.map((metric, index) => <Card key={index} className="bg-dark-blue/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="text-primary mb-2 flex justify-center">
                  {metric.icon}
                </div>
                <div className="text-lg sm:text-xl font-bold text-white font-rethink">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-white/70 font-rethink">
                  {metric.label}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Main Functionalities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {functionalities.map((functionality, index) => <Card key={index} className={`bg-dark-blue/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer ${expandedCard === index ? 'ring-1 ring-primary/50' : ''}`} onClick={() => setExpandedCard(expandedCard === index ? null : index)}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary flex-shrink-0">
                      {functionality.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg sm:text-xl text-white font-rethink mb-2">
                        {functionality.title}
                      </CardTitle>
                      <CardDescription className="text-white/70 font-rethink text-sm sm:text-base">
                        {functionality.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {functionality.metrics}
                    </span>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10 h-6 px-2">
                      <Play className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              {expandedCard === index && <CardContent className="pt-0 animate-fade-in">
                  <div className="space-y-4">
                    {/* Technical Info */}
                    <div className="bg-darker-blue/50 rounded-lg p-3 border border-primary/20">
                      <h4 className="text-sm font-medium text-primary mb-2">Especificações Técnicas</h4>
                      <p className="text-xs text-white/80">{functionality.technical}</p>
                    </div>
                    
                    {/* Interactive Demo */}
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-3">Demonstração Interativa</h4>
                      {renderDemo(functionality.demo)}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" className="flex-1" onClick={() => window.open('https://wa.me/5599999350533', '_blank')}>
                        Testar Funcionalidade
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1" onClick={() => window.open('https://wa.me/5599999350533', '_blank')}>
                        Saber Mais
                      </Button>
                    </div>
                  </div>
                </CardContent>}
            </Card>)}
        </div>

        {/* How It Works Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-rethink">
              Como Funciona a <span className="text-primary">Integração</span>
            </h3>
            <p className="text-white/80 font-rethink">
              Todas as funcionalidades trabalham em conjunto para oferecer controle total
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 font-rethink">Coleta de Dados</h4>
              <p className="text-white/70 font-rethink text-sm">
                Sensores GPS coletam informações em tempo real do veículo
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 font-rethink">Processamento</h4>
              <p className="text-white/70 font-rethink text-sm">Sistema analisa os dados e limites mínimos e máximose gera os alertas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 font-rethink">Ação</h4>
              <p className="text-white/70 font-rethink text-sm">
                Receba alertas e tome decisões baseadas em dados precisos
              </p>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="bg-dark-blue/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="text-primary flex-shrink-0">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl text-white font-rethink mb-2">
                      Cerca Eletrônica
                    </CardTitle>
                    <CardDescription className="text-white/70 font-rethink text-sm sm:text-base">
                      Defina áreas permitidas e receba alertas automáticos quando o veículo sair da zona autorizada
                    </CardDescription>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    Precisão 10m
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="bg-darker-blue/80 rounded-lg p-4 border border-primary/30">
                <div className="space-y-2 text-sm text-white/80">
                  <div className="flex justify-between">
                    <span>Zonas Configuradas:</span>
                    <span className="text-primary font-semibold">5 ativas</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Precisão:</span>
                    <span className="text-green-400">10-50 metros</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-blue-400">Monitorando</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 pt-4">
                <Button size="sm" className="flex-1" onClick={() => window.open('https://wa.me/5599999350533', '_blank')}>
                  Configurar Zonas
                </Button>
                <Button size="sm" variant="outline" className="flex-1" onClick={() => window.open('https://wa.me/5599999350533', '_blank')}>
                  Ver Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-dark-blue/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="text-primary flex-shrink-0">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl text-white font-rethink mb-2">
                      Bloqueio Remoto
                    </CardTitle>
                    <CardDescription className="text-white/70 font-rethink text-sm sm:text-base">
                      Sistema de bloqueio à distância para proteção contra roubos e furtos
                    </CardDescription>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    &lt; 30s resposta
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="bg-darker-blue/80 rounded-lg p-4 border border-primary/30">
                <div className="space-y-2 text-sm text-white/80">
                  <div className="flex justify-between">
                    <span>Tempo de Resposta:</span>
                    <span className="text-primary font-semibold">15-30 segundos</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de Sucesso:</span>
                    <span className="text-green-400">98.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Disponibilidade:</span>
                    <span className="text-blue-400">24/7</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 pt-4">
                <Button size="sm" className="flex-1" onClick={() => window.open('https://wa.me/5599999350533', '_blank')}>
                  Testar Bloqueio
                </Button>
                <Button size="sm" variant="outline" className="flex-1" onClick={() => window.open('https://wa.me/5599999350533', '_blank')}>
                  Configurar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Services;