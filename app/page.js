import Navbar from "@/components/navbar";
import AboutPage from "./about/page";
import ProgramPage from "./program/page";
import ReviewPage from "./Review/page";
import Whypage from "./WhyUs/page";
import BonusPage from "./bonuses/page";

export default function Home() {
  return (
    <>
  <Navbar />
  <AboutPage />
  <ProgramPage />
  <ReviewPage />
  <Whypage />
  <BonusPage />
  </>
  );
}
