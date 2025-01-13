import BlogSection from "@/components/home/Blog";
import HeroSection from "@/components/home/Hero";
import ProductInnovationSection from "@/components/home/ProductInnovation";
import ReadyToScale from "@/components/home/ReadyToScale";
import SolutionsSection from "@/components/home/Solutions";
import SpotLightSection from "@/components/home/Spotlight";
import StoriesSection from "@/components/home/Stories";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StoriesSection />
      <SpotLightSection />
      <ProductInnovationSection />
      <SolutionsSection />
      <BlogSection />
      <ReadyToScale />
    </>
  );
}
