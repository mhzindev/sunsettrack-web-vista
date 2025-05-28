import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ClientLogos = () => {
  const clients = [
    {
      name: "IMPERAGRO",
      logo: "/lovable-uploads/c63e5c28-3d72-4e4e-9f9a-cdf1231d3676.png"
    },
    {
      name: "TERRA FORTE",
      logo: "/lovable-uploads/981747a6-e3eb-4df4-b632-018f7cf0c703.png"
    },
    {
      name: "PCM FRIOS",
      logo: "/lovable-uploads/2581c9e9-22e7-4871-8084-898db8ce4e52.png"
    },
    {
      name: "JR TRANSPORTES",
      logo: "/lovable-uploads/48b2777d-dee4-4f41-b703-80497a1f177c.png"
    },
    {
      name: "TERRA MATA",
      logo: "/lovable-uploads/981747a6-e3eb-4df4-b632-018f7cf0c703.png"
    },
    {
      name: "NÁDIA RURAL",
      logo: "/lovable-uploads/176031d1-0f86-4fbf-a64b-7a9f20009f89.png"
    },
    {
      name: "PROAGRO",
      logo: "/lovable-uploads/086e33d8-2635-4227-b19d-1a124628ab05.png"
    },
    {
      name: "D'MILA",
      logo: "/lovable-uploads/55034421-ae2a-4188-957e-02bf0a90f3bf.png"
    }
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
                    <div className="flex items-center justify-center gap-3">
                      <img 
                        src={client.logo} 
                        alt={`Logo ${client.name}`}
                        className="w-8 h-8 object-contain flex-shrink-0"
                      />
                      <span className="text-white/80 font-semibold font-rethink text-center">
                        {client.name}
                      </span>
                    </div>
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
