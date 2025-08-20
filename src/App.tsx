import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import WhyEdHub from './components/WhyEdHub';
import CTASection from './components/CTASection';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Footer from './components/Footer';

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <ProblemSolution />
    <WhyEdHub />
    <CTASection />
  </>
);

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;