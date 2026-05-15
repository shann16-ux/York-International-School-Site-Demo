/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import WhyYork from './components/WhyYork';
import AcademicJourney from './components/AcademicJourney';
import BranchNetwork from './components/BranchNetwork';
import LifeAtYork from './components/LifeAtYork';
import Facilities from './components/Facilities';
import AdmissionsCTA from './components/AdmissionsCTA';
import NewsEvents from './components/NewsEvents';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-white">
      <Header />
      <main>
        <Hero />
        <WhyYork />
        <AcademicJourney />
        <BranchNetwork />
        <LifeAtYork />
        <Facilities />
        <AdmissionsCTA />
        <NewsEvents />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

