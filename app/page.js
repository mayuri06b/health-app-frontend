import Navbar from "@/components/navbar";
import AboutPage from "./about/page";
import ProgramPage from "./program/page";
import ReviewPage from "./Review/page";
import Whypage from "./WhyUs/page";
import BonusPage from "./bonuses/page";
import HowItWorksPage from "./howItWorks/page";
import HomePage from "./home/page";

export default function Home() {
  return (
    <>
    <div className='p-6'>
    <HomePage />
    <AboutPage />
    </div>
  <ProgramPage />
  <ReviewPage />
  <Whypage />
  <BonusPage />
  <HowItWorksPage />
  </>
  );
}
