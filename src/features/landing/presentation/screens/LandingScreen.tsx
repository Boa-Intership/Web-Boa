import React from 'react';

import WelcomeSection from '../components/WelcomeSection';
import GeneralInfoSection from '../components/GeneralInfoSection';
import FAQSection from '../components/FAQSection';
import CustomerServiceSection from '../components/CustomerServiceSection';
import OfficePreviewSection from '../components/OfficePreviewSection';
import NewsSection from '../components/NewsSection';
import AboutUsSection from '../components/AboutUsSection';
import { useCorporateProfile } from '../hooks/useCorporateProfile';
import { useFAQ } from '../hooks/useFAQ';
import { useNews } from '../hooks/useNews';

const LandingScreen: React.FC = () => {
  const { data: corporateProfile } = useCorporateProfile();
  const { data: faqData } = useFAQ();
  const { data: newsData } = useNews();

  return (
    <>
      <WelcomeSection />
      <GeneralInfoSection />
      <CustomerServiceSection />
      <OfficePreviewSection />
      {corporateProfile?.activo && <AboutUsSection />}
      {newsData?.activo && <NewsSection />}
      {faqData?.activo && <FAQSection />}
      {/*<FinalCTASection />*/}
    </>
  );
};

export default LandingScreen;
