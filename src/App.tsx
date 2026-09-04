import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Architecture from './components/Architecture';
import Screenshots from './components/Screenshots';
import Maturity from './components/Maturity';
import TechnicalHighlights from './components/TechnicalHighlights';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <Problem />
        <Solution />
        <Features />
        <Workflow />
        <Architecture />
        <Screenshots />
        <Maturity />
        <TechnicalHighlights />
      </main>
      <Footer />
    </>
  );
}
