import React from 'react';

import WelcomeSection from '../components/WelcomeSection';
import GeneralInfoSection from '../components/GeneralInfoSection';
import FAQSection from '../components/FAQSection';
import CustomerServiceSection from '../components/CustomerServiceSection';
import OfficePreviewSection from '../components/OfficePreviewSection';
import NewsSection from '../components/NewsSection';
import AboutUsSection from '../components/AboutUsSection';
// import ClientsSection from '../components/ClientsSection';
// import FinalCTASection from '../components/FinalCTASection';

const LandingScreen: React.FC = () => (
  <>
    <WelcomeSection />
    <GeneralInfoSection />
    <CustomerServiceSection />
    <OfficePreviewSection />
    <AboutUsSection />
    <NewsSection />
    <FAQSection />
    {/*< />*/}
    {/*<FinalCTASection />*/}
  </>
);

export default LandingScreen;
