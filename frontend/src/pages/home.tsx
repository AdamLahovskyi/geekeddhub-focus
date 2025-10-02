import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features"; 
import { Testimonials } from "@/components/testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
