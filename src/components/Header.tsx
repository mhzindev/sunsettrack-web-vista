import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, User, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [{
    label: 'Início',
    id: 'home'
  }, {
    label: 'Serviços',
    id: 'services'
  }, {
    label: 'Tecnologia',
    id: 'technology'
  }, {
    label: 'Planos',
    id: 'plans'
  }, {
    label: 'Público',
    id: 'target'
  }, {
    label: 'Sobre',
    id: 'about'
  }, {
    label: 'Contato',
    id: 'contact'
  }];

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-darker-blue/95 backdrop-blur-md border-b border-primary/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-white font-rethink">
            Sunset<span className="text-primary">track</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-white/80 hover:text-primary transition-colors duration-300 font-rethink">
                {item.label}
              </button>)}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white text-sm" onClick={() => window.open('https://rastreame.com.br/#/sunsettrack', '_blank')}>
              <User className="w-4 h-4 mr-2" />
              <span className="hidden xl:inline">Área do Cliente</span>
              <span className="xl:hidden">Cliente</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden text-white p-2">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-full sm:w-80 bg-darker-blue border-l border-primary/20 p-0">
              <div className="flex flex-col h-full">
                {/* Header do Menu */}
                <div className="flex items-center justify-between p-6 border-b border-primary/20">
                  <div className="text-xl font-bold text-white font-rethink">
                    Sunset<span className="text-primary">track</span>
                  </div>
                </div>

                {/* Navegação Mobile */}
                <nav className="flex-1 py-6">
                  <div className="space-y-1">
                    {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="w-full text-left px-6 py-4 text-white/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-rethink border-l-2 border-transparent hover:border-primary">
                        {item.label}
                      </button>)}
                  </div>
                </nav>

                {/* Botão Área do Cliente */}
                <div className="p-6 border-t border-primary/20">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" onClick={() => {
                  window.open('https://rastreame.com.br/#/sunsettrack', '_blank');
                  setIsMenuOpen(false);
                }}>
                    <User className="w-4 h-4 mr-2" />
                    Área do Cliente
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};

export default Header;
