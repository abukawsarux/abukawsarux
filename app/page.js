import AboutMe from "@/components/home/AboutMe";
import HeroSection from "@/components/home/HeroSection";
import LetsTalk from "@/components/home/LetsTalk";
import MyPortfolio from "@/components/home/MyPortfolio";
import MySkills from "@/components/home/MySkills";
import MySpecialties from "@/components/home/MySpecialties";
import NewsSection from "@/components/home/NewsSection";

// import ClinetLogoList from "@/components/shared/ClientLogoList";

export const metadata = {
  title: "Abu Kawsar | UI/UX Designer | Portfolio",
  description:
    "Explore the portfolio of Abu Kawsar, a passionate User Experience Engineer skilled in building seamless, innovative, and scalable web applications using modern design and frontend development technologies.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <MySpecialties />
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      {/* <ClinetLogoList /> */}
      <NewsSection />
      <LetsTalk />
    </div>
  );
}
