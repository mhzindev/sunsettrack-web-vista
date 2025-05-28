
const ClientLogos = () => {
  return (
    <section className="py-16 bg-dark-blue/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-white/90 mb-2 font-rethink">
            Trusted by developers from
          </h3>
          <p className="text-white/60 font-rethink">
            Empresas que confiam na nossa tecnologia
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <span className="text-white/80 font-semibold font-rethink">URTH.</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <span className="text-white/80 font-semibold font-rethink">RevisionDojo</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <span className="text-white/80 font-semibold font-rethink">ByteDance</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <span className="text-white/80 font-semibold font-rethink">Capgemini</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <span className="text-white/80 font-semibold font-rethink">Smart Group</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
