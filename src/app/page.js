import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import SuccessStories from '../components/SuccessStories'
import Packages from '../components/Packages'
import FeaturedBooks from '../components/FeaturedBooks'
import CallToAction from '../components/CallToAction'
import ContactUs from '../components/ContactUs'


export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <SuccessStories />
      <Packages />
      <FeaturedBooks />
      <CallToAction />
      <ContactUs />
    </>
  )
}