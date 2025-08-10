import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User, ArrowRight, Truck, Shield, TrendingUp } from 'lucide-react';
import LazyImage from './LazyImage';

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: 'Como o Rastreamento Veicular Reduz Custos Operacionais em 30%',
      excerpt: 'Descubra as estratégias comprovadas que empresas têm usado para diminuir drasticamente seus gastos com combustível e manutenção.',
      category: 'Economia',
      readTime: '5 min',
      date: '2024-01-15',
      author: 'Equipe Técnica',
      image: '/lovable-uploads/c63e5c28-3d72-4e4e-9f9a-cdf1231d3676.png',
      featured: true,
      tags: ['Economia', 'ROI', 'Gestão']
    },
    {
      id: 2,
      title: 'Tecnologia GPS: A Evolução do Rastreamento Veicular no Brasil',
      excerpt: 'Entenda como a tecnologia GPS evoluiu e quais são as tendências mais recentes no mercado brasileiro de rastreamento.',
      category: 'Tecnologia',
      readTime: '7 min',
      date: '2024-01-12',
      author: 'Carlos Tech',
      image: '/lovable-uploads/912c62c8-6deb-42b3-b6e2-abd3d80bb342.png',
      tags: ['GPS', 'Inovação', 'Tendências']
    },
    {
      id: 3,
      title: 'Segurança da Frota: Prevenção de Roubos e Furtos',
      excerpt: 'Estratégias eficazes para proteger sua frota contra roubos, incluindo tecnologias anti-furto e melhores práticas de segurança.',
      category: 'Segurança',
      readTime: '6 min',
      date: '2024-01-10',
      author: 'Ana Segurança',
      image: '/lovable-uploads/72eb837b-19f9-46c5-ad59-2121411705ed.png',
      tags: ['Segurança', 'Prevenção', 'Anti-furto']
    },
    {
      id: 4,
      title: 'Relatórios Inteligentes: Como Usar Dados para Otimizar Rotas',
      excerpt: 'Aprenda a interpretar dados de rastreamento para criar rotas mais eficientes e reduzir tempo de entrega.',
      category: 'Otimização',
      readTime: '8 min',
      date: '2024-01-08',
      author: 'Pedro Analytics',
      image: '/lovable-uploads/55034421-ae2a-4188-957e-02bf0a90f3bf.png',
      tags: ['Rotas', 'Dados', 'Eficiência']
    },
    {
      id: 5,
      title: 'Monitoramento de Combustível: Eliminando Desperdícios',
      excerpt: 'Técnicas avançadas para monitorar o consumo de combustível e identificar vazamentos, furtos e mau uso.',
      category: 'Gestão',
      readTime: '5 min',
      date: '2024-01-05',
      author: 'Maria Gestão',
      image: '/lovable-uploads/2c79e7f5-8030-4422-bf08-2ef50fab3fee.png',
      tags: ['Combustível', 'Controle', 'Desperdício']
    },
    {
      id: 6,
      title: 'Lei do Rastreamento: Obrigatoriedade e Benefícios Fiscais',
      excerpt: 'Entenda as legislações atuais sobre rastreamento veicular e como sua empresa pode se beneficiar fiscalmente.',
      category: 'Legislação',
      readTime: '6 min',
      date: '2024-01-03',
      author: 'Roberto Legal',
      image: '/lovable-uploads/2cf40316-6fd6-46d4-afd0-2ecd3e5626d9.png',
      tags: ['Lei', 'Fiscal', 'Compliance']
    }
  ];

  const categories = [
    { name: 'Todos', icon: ArrowRight, count: articles.length },
    { name: 'Tecnologia', icon: Truck, count: articles.filter(a => a.category === 'Tecnologia').length },
    { name: 'Segurança', icon: Shield, count: articles.filter(a => a.category === 'Segurança').length },
    { name: 'Economia', icon: TrendingUp, count: articles.filter(a => a.category === 'Economia').length },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('Todos');
  const [visibleArticles, setVisibleArticles] = React.useState(3);

  const filteredArticles = selectedCategory === 'Todos' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const displayedArticles = filteredArticles.slice(0, visibleArticles);
  const featuredArticle = articles.find(article => article.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-rethink">
            Blog & <span className="text-primary">Artigos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-rethink">
            Mantenha-se atualizado com dicas, tendências e insights sobre rastreamento veicular
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setVisibleArticles(3);
                }}
                className={`${
                  selectedCategory === category.name 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-primary/20 text-muted-foreground hover:border-primary hover:text-primary'
                } font-rethink`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Featured Article */}
          {featuredArticle && selectedCategory === 'Todos' && (
            <Card className="mb-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative h-64 lg:h-auto">
                  <LazyImage
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Em Destaque
                  </Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className="border-primary text-primary">
                      {featuredArticle.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground font-rethink">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-rethink">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 font-rethink">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground font-rethink">
                      <User className="w-4 h-4 mr-2" />
                      {featuredArticle.author}
                      <span className="mx-2">•</span>
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {new Date(featuredArticle.date).toLocaleDateString('pt-BR')}
                    </div>
                    
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-rethink">
                      Ler Artigo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedArticles
              .filter(article => !article.featured || selectedCategory !== 'Todos')
              .map((article) => (
              <Card key={article.id} className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative h-48">
                  <LazyImage
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 left-3 bg-background/90 text-foreground"
                  >
                    {article.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center text-sm text-muted-foreground font-rethink">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground font-rethink">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 font-rethink line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 font-rethink line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-primary/20 text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-muted/20">
                    <div className="flex items-center text-sm text-muted-foreground font-rethink">
                      <User className="w-4 h-4 mr-2" />
                      {article.author}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary-foreground hover:bg-primary font-rethink"
                    >
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {visibleArticles < filteredArticles.length && (
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setVisibleArticles(prev => prev + 3)}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-rethink"
              >
                Carregar Mais Artigos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-rethink">
                  Receba Conteúdo Exclusivo
                </h3>
                <p className="text-muted-foreground mb-6 font-rethink max-w-2xl mx-auto">
                  Assine nossa newsletter e receba artigos, dicas e tendências sobre gestão de frotas diretamente no seu email
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="flex-1 px-4 py-2 rounded-md border border-primary/20 bg-background/50 focus:outline-none focus:border-primary"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-rethink">
                    Assinar
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground mt-3 font-rethink">
                  Sem spam. Cancele a qualquer momento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;