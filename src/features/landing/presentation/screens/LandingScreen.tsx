import React from 'react';

import WelcomeSection from '../components/WelcomeSection';
import GeneralInfoSection from '../components/GeneralInfoSection';
import FAQSection from '../components/FAQSection';
import CustomerServiceSection from '../components/CustomerServiceSection';
import OfficePreviewSection from '../components/OfficePreviewSection';

const LandingScreen: React.FC = () => (
  <>
    <WelcomeSection />
    <GeneralInfoSection />
    <CustomerServiceSection />
    <OfficePreviewSection />
    <FAQSection />
  </>
);

export default LandingScreen;
