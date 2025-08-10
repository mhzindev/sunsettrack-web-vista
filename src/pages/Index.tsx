
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import Technology from '@/components/Technology';
import Plans from '@/components/Plans';
import PriceCalculator from '@/components/PriceCalculator';
import Target from '@/components/Target';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen bg-darker-blue font-rethink">
      <ScrollProgress />
      <Header />
      <Hero />
      <ClientLogos />
      <Services />
      <Technology />
      <Plans />
      <PriceCalculator />
      <Target />
      <Testimonials />
      <About />
      <Contact />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
