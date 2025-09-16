import React from 'react';

import WelcomeSection from '../components/WelcomeSection';
import GeneralInfoSection from '../components/GeneralInfoSection';
import FAQSection from '../components/FAQSection';
import CustomerServiceSection from '../components/ServiceSection';
import OfficePreviewSection from '../components/OfficePreviewSection';
import AboutUsSection from '../components/AboutUsSection';
// import ServicesSection from '../components/ServicesSection';
// import FinalCTASection from '../components/FinalCTASection';

const LandingScreen: React.FC = () => (
  <>
    <WelcomeSection />
    <GeneralInfoSection />
    <CustomerServiceSection />
    <OfficePreviewSection />
    <AboutUsSection />
    <FAQSection />
    {/*<ServicesSection />*/}
    {/*<ServicesSection />*/}
    {/*<FinalCTASection />*/}
  </>
);

export default LandingScreen;
