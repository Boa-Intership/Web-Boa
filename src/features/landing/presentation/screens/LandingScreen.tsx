import React from 'react';

import WelcomeSection from '../components/WelcomeSection';
import GeneralInfoSection from '../components/GeneralInfoSection';
import FAQSection from '../components/FAQSection';
import CustomerServiceSection from '../components/CustomerServiceSection';
import OfficePreviewSection from '../components/OfficePreviewSection';
import NewsSection from '../components/NewsSection';
import AboutUsSection from '../components/AboutUsSection';
import { useCorporateProfile } from '../hooks/useCorporateProfile';

const LandingScreen: React.FC = () => {
  const { data: corporateProfile } = useCorporateProfile();

  return (
    <>
      <WelcomeSection />
      <GeneralInfoSection />
      <CustomerServiceSection />
      <OfficePreviewSection />
      {corporateProfile?.activo && <AboutUsSection />}
      <NewsSection />
      <FAQSection />
      {/*<FinalCTASection />*/}
    </>
  );
};

export default LandingScreen;
