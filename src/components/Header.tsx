
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';

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
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'home' },
    { label: 'Serviços', id: 'services' },
    { label: 'Tecnologia', id: 'technology' },
    { label: 'Planos', id: 'plans' },
    { label: 'Público', id: 'target' },
    { label: 'Sobre', id: 'about' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-darker-blue/95 backdrop-blur-md border-b border-primary/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white font-rethink">
            Sunset<span className="text-primary">track</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-primary transition-colors duration-300 font-rethink"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.open('https://rastreame.com.br/#/sunsettrack', '_blank')}
            >
              <User className="w-4 h-4 mr-2" />
              Área do Cliente
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-primary/20">
            <nav className="flex flex-col space-y-3 mt-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-primary transition-colors duration-300 text-left font-rethink"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white mt-4 w-full"
                onClick={() => window.open('https://rastreame.com.br/#/sunsettrack', '_blank')}
              >
                <User className="w-4 h-4 mr-2" />
                Área do Cliente
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
