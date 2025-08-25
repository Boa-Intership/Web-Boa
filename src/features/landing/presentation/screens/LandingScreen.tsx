import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import GeneralInfoSection from '../components/GeneralInfoSection';
import FAQSection from '../components/FAQSection';

const LandingScreen: React.FC = () => (
  <>
    <WelcomeSection />
    <GeneralInfoSection />
    <FAQSection />
  </>
);

export default LandingScreen;
