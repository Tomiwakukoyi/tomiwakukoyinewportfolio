import TopProjects from "../components/TopProjects";
import SocialMediaLinks from "../components/SocialMediaLinks";
import HeroSection from "../components/HeroSection";
import MainStack from "../components/MainStack";

const Home = () => {
  return (
    <div
      className="flex flex-col -mt-10 md:mt-5 items-center justify-center w-full"
      style={{ fontFamily: "Noto Serif, serif" }}
    >
      {/* Hero section texts */}
      <HeroSection />
      {/* social media */}
      <SocialMediaLinks />
      {/* MY Stack/Skills */}
      <MainStack />
      {/* Top Projects */}
      <TopProjects />
    </div>
  );
};

export default Home;
