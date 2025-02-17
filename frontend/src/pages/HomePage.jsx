import React from 'react';
import AboutSection from '../components/AboutSection';
import LandingPage from '../components/LandingPage';
import FeaturesPage from '../components/FeaturesPage';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <div>
        <main>
          <div id="home">
            <LandingPage />
          </div>
          <div id="about">
            <AboutSection />
          </div>
          <div id="features">
            <FeaturesPage />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
