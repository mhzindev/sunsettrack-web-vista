
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import Technology from '@/components/Technology';
import Plans from '@/components/Plans';
import Target from '@/components/Target';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-darker-blue font-rethink">
      <Header />
      <Hero />
      <ClientLogos />
      <Services />
      <Technology />
      <Plans />
      <Target />
      <About />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
