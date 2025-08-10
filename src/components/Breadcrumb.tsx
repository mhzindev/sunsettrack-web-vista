import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const BreadcrumbNav = ({ items }: BreadcrumbProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav aria-label="Breadcrumb" className="fixed top-20 left-4 right-4 z-40 lg:left-8 lg:right-8">
      <div className="bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20 shadow-lg max-w-fit mx-auto">
        <ol className="flex items-center space-x-2 text-sm font-rethink">
          <li>
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Ir para o início"
            >
              <Home className="w-4 h-4" />
            </button>
          </li>
          
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
              </li>
              <li>
                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className={`transition-colors ${
                      index === items.length - 1
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : item.href ? (
                  <a
                    href={item.href}
                    className={`transition-colors ${
                      index === items.length - 1
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-primary font-medium">
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNav;