

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ClientLogos = () => {
  const clients = [
    "IMPERAGRO",
    "TERRA FORTE", 
    "PCM FRIOS",
    "JR TRANSPORTES",
    "TERRA MATA",
    "NÁDIA RURAL",
    "PROAGRO",
    "D'MILA"
  ];

  return (
    <section className="py-16 bg-dark-blue/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 font-rethink text-gray-50">
            Alguns dos Nossos Clientes
          </h3>
          <p className="text-white/60 font-rethink">
            Empresas que confiam na nossa tecnologia
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Gradiente esquerdo */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-blue/30 to-transparent z-10 pointer-events-none"></div>
          
          {/* Gradiente direito */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-blue/30 to-transparent z-10 pointer-events-none"></div>
          
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {clients.map((client, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <span className="text-white/80 font-semibold font-rethink text-center block">
                      {client}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-8 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="right-8 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

