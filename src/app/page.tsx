import About from "@/components/about";
import Blogs from "@/components/blogs";
import Connect from "@/components/connect";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import OurApproach from "@/components/our-approach";
import OurImpact from "@/components/our-impact";
import OurInsights from "@/components/our-insights";
import OurLeadership from "@/components/our-leadership";
import OurOfferings from "@/components/our-offerings";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <OurApproach />
      <OurOfferings />
      <OurImpact />
      <OurLeadership />
      <OurInsights />
      <Blogs />
      <Connect />
      <Footer />
    </div>
  );
}
