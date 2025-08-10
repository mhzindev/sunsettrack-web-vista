import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Clock, Fuel, AlertTriangle, Shield, Play, Pause, RotateCcw } from 'lucide-react';

const PlatformSimulator = () => {
  const [currentView, setCurrentView] = useState('map');
  const [isTracking, setIsTracking] = useState(true);
  const [currentVehicle, setCurrentVehicle] = useState(0);
  const [alertCount, setAlertCount] = useState(3);

  const vehicles = [
    {
      id: 'VEH001',
      name: 'Caminhão Mercedes 1',
      driver: 'João Silva',
      speed: 65,
      fuel: 78,
      status: 'Em movimento',
      location: 'BR-101, KM 45',
      lastUpdate: '2 min atrás',
      route: 'São Paulo → Rio de Janeiro',
      eta: '14:30'
    },
    {
      id: 'VEH002', 
      name: 'Van Iveco 2',
      driver: 'Maria Santos',
      speed: 0,
      fuel: 45,
      status: 'Parado',
      location: 'Centro de Distribuição SP',
      lastUpdate: '5 min atrás',
      route: 'São Paulo → Campinas',
      eta: '16:45'
    },
    {
      id: 'VEH003',
      name: 'Caminhão Volvo 3',
      driver: 'Carlos Oliveira',
      speed: 82,
      fuel: 92,
      status: 'Velocidade alta',
      location: 'Via Dutra, KM 120',
      lastUpdate: '1 min atrás',
      route: 'Rio de Janeiro → São Paulo',
      eta: '18:20'
    }
  ];

  const alerts = [
    { type: 'speed', message: 'Velocidade acima do limite - Caminhão Volvo 3', time: '5 min atrás', severity: 'high' },
    { type: 'fuel', message: 'Combustível baixo - Van Iveco 2', time: '15 min atrás', severity: 'medium' },
    { type: 'maintenance', message: 'Manutenção programada - Caminhão Mercedes 1', time: '1 hora atrás', severity: 'low' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVehicle((prev) => (prev + 1) % vehicles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Em movimento': return 'bg-green-500';
      case 'Parado': return 'bg-yellow-500';
      case 'Velocidade alta': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-500 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-blue-500 bg-blue-50 border-blue-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  };

  const currentVehicleData = vehicles[currentVehicle];

  return (
    <section className="py-20 bg-gradient-to-br from-dark-blue to-darker-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rethink">
            Experimente a <span className="text-primary">Plataforma S-PRO</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-rethink">
            Veja como seria monitorar sua frota com nossa tecnologia de ponta
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {[
              { id: 'map', label: 'Mapa em Tempo Real', icon: MapPin },
              { id: 'fleet', label: 'Status da Frota', icon: Navigation },
              { id: 'alerts', label: 'Central de Alertas', icon: AlertTriangle },
              { id: 'reports', label: 'Relatórios', icon: Clock }
            ].map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={currentView === id ? "default" : "outline"}
                onClick={() => setCurrentView(id)}
                className={`${
                  currentView === id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-primary/20 text-white hover:bg-primary/10'
                } font-rethink`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Button>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map View */}
            {currentView === 'map' && (
              <>
                <div className="lg:col-span-2">
                  <Card className="bg-card/10 backdrop-blur-sm border-primary/20 h-[400px]">
                    <CardContent className="p-6 h-full">
                      <div className="relative h-full bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(25,78,255,0.1),transparent_70%)]"></div>
                        
                        {/* Simulated Map Points */}
                        <div className="absolute top-1/3 left-1/4 animate-pulse">
                          <div className={`w-4 h-4 rounded-full ${getStatusColor(currentVehicleData.status)}`}></div>
                          <div className="absolute -top-8 -left-6 bg-card/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-foreground whitespace-nowrap">
                            {currentVehicleData.name}
                          </div>
                        </div>
                        
                        <div className="absolute top-1/2 right-1/3 animate-pulse delay-150">
                          <div className="w-4 h-4 rounded-full bg-green-500"></div>
                        </div>
                        
                        <div className="absolute bottom-1/3 left-1/2 animate-pulse delay-300">
                          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                        </div>

                        {/* Route Line */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                          <path
                            d="M 100 150 Q 200 100 300 150 T 500 200"
                            stroke="#194EFF"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="5,5"
                            className="animate-pulse"
                          />
                        </svg>

                        <div className="absolute bottom-4 left-4 text-white/60 text-xs font-rethink">
                          Mapa simulado - Região Sudeste
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <Card className="bg-card/10 backdrop-blur-sm border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-white font-rethink flex items-center">
                        <Navigation className="w-5 h-5 mr-2 text-primary" />
                        Veículo Selecionado
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-white font-rethink">{currentVehicleData.name}</h3>
                        <p className="text-sm text-white/70 font-rethink">{currentVehicleData.driver}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-white/70 font-rethink">Status:</span>
                          <Badge className={`${getStatusColor(currentVehicleData.status)} text-white`}>
                            {currentVehicleData.status}
                          </Badge>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-white/70 font-rethink">Velocidade:</span>
                          <span className="text-white font-rethink">{currentVehicleData.speed} km/h</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-white/70 font-rethink">Combustível:</span>
                          <span className="text-white font-rethink">{currentVehicleData.fuel}%</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-white/70 font-rethink">Localização:</span>
                          <span className="text-white font-rethink text-right text-sm">{currentVehicleData.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsTracking(!isTracking)}
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-rethink"
                    >
                      {isTracking ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                      {isTracking ? 'Pausar' : 'Iniciar'}
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}

            {/* Fleet Status */}
            {currentView === 'fleet' && (
              <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((vehicle, index) => (
                  <Card key={vehicle.id} className="bg-card/10 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white font-rethink">{vehicle.name}</CardTitle>
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(vehicle.status)}`}></div>
                      </div>
                      <p className="text-sm text-white/70 font-rethink">{vehicle.driver}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-white/70 font-rethink">Velocidade</span>
                          <p className="text-white font-semibold font-rethink">{vehicle.speed} km/h</p>
                        </div>
                        <div>
                          <span className="text-white/70 font-rethink">Combustível</span>
                          <p className="text-white font-semibold font-rethink">{vehicle.fuel}%</p>
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-white/70 text-sm font-rethink">Rota:</span>
                        <p className="text-white text-sm font-rethink">{vehicle.route}</p>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70 font-rethink">ETA: {vehicle.eta}</span>
                        <span className="text-white/70 font-rethink">{vehicle.lastUpdate}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Alerts */}
            {currentView === 'alerts' && (
              <div className="lg:col-span-3 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white font-rethink">Central de Alertas</h3>
                  <Badge variant="destructive" className="bg-red-500 text-white">
                    {alertCount} alertas ativos
                  </Badge>
                </div>
                
                {alerts.map((alert, index) => (
                  <Card key={index} className={`border ${getSeverityColor(alert.severity)}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <AlertTriangle className="w-5 h-5" />
                          <div>
                            <p className="font-medium font-rethink">{alert.message}</p>
                            <p className="text-sm opacity-70 font-rethink">{alert.time}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="font-rethink">
                          Resolver
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Reports */}
            {currentView === 'reports' && (
              <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Quilometragem Total', value: '12,543 km', change: '+8.2%', icon: Navigation },
                  { title: 'Consumo de Combustível', value: '2,145 L', change: '-5.1%', icon: Fuel },
                  { title: 'Tempo de Operação', value: '186h 42m', change: '+12.5%', icon: Clock },
                  { title: 'Alertas Resolvidos', value: '23', change: '+15.3%', icon: Shield }
                ].map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <Card key={index} className="bg-card/10 backdrop-blur-sm border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Icon className="w-8 h-8 text-primary" />
                          <span className={`text-sm font-medium ${
                            metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                          } font-rethink`}>
                            {metric.change}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white font-rethink">{metric.value}</h3>
                        <p className="text-white/70 text-sm font-rethink">{metric.title}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/60 text-sm mb-4 font-rethink">
              Esta é uma demonstração interativa da plataforma S-PRO
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-rethink"
              onClick={() => {
                const contactElement = document.getElementById('contact');
                contactElement?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Solicitar Demonstração Completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSimulator;