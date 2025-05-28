import { Button } from '@/components/ui/button';
import { Phone, ExternalLink } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="py-20 bg-gradient-to-br from-dark-blue to-darker-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rethink">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-12 font-rethink">
            Estamos prontos para atender você e encontrar a melhor solução para sua necessidade
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-3xl p-8 border border-primary/20">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 font-rethink">
                WhatsApp
              </h3>
              
              <p className="text-white/70 mb-6 font-rethink">
                Fale conosco agora mesmo e tire todas suas dúvidas
              </p>
              
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 font-rethink" onClick={() => window.open('https://wa.me/5599999350533', '_blank')}>
                +55 99 99935-0533
              </Button>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-3xl p-8 border border-primary/20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 font-rethink">
                E-mail Comercial
              </h3>
              
              <p className="text-white/70 mb-6 font-rethink">
                Envie sua mensagem e receba uma proposta personalizada
              </p>
              
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-rethink" onClick={() => window.open('mailto:comercial.sunsettrack@gmail.com', '_blank')}>
                comercial.sunsettrack@gmail.com
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-darker-blue/80 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4 font-rethink">
              Pronto para Proteger sua Frota?
            </h3>
            
            <p className="text-white/70 mb-8 font-rethink max-w-2xl mx-auto">
              Nossa equipe está preparada para desenvolver a solução ideal para sua empresa. 
              Entre em contato e solicite uma demonstração gratuita.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-rethink" onClick={() => window.open('https://wa.me/5599999350533', '_blank')}>
                <Phone className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
              
              <Button variant="outline" size="lg" onClick={() => window.open('https://rastreame.com.br/#/sunsettrack', '_blank')} className="border-white text-dark-blue px-8 py-3 font-rethink">
                <ExternalLink className="w-5 h-5 mr-2" />
                Área do Cliente
              </Button>
            </div>
          </div>

          {/* App Downloads */}
          <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-3xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-white mb-6 font-rethink">
              Baixe o App S-PRO
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 font-rethink" onClick={() => window.open('https://play.google.com/store/apps/details?id=br.com.appselsyn.spro', '_blank')}>
                <ExternalLink className="w-5 h-5 mr-2" />
                Google Play Store
              </Button>
              
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 font-rethink" onClick={() => window.open('https://apps.apple.com/br/app/s-pro/id1458113409', '_blank')}>
                <ExternalLink className="w-5 h-5 mr-2" />
                App Store
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;