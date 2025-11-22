import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Contact from './components/Contact';
import Integrations from './components/Integrations';
import Portfolio from './components/Portfolio';
import { ThemeProvider } from './components/ThemeContext';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms
  const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotateShape = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col overflow-x-hidden relative">
        {/* Global Background Layer */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
           {/* Base Color */}
           <div className="absolute inset-0 bg-white dark:bg-[#020617] transition-colors duration-500"></div>
           
           {/* Noise Texture */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 dark:opacity-10"></div>

           {/* Parallax Moving Elements */}
           <motion.div 
             style={{ y: yBlob1 }}
             className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-blue-200/10 dark:bg-blue-900/5 rounded-full blur-[150px]" 
           />
           <motion.div 
             style={{ y: yBlob2 }}
             className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-purple-200/10 dark:bg-purple-900/5 rounded-full blur-[150px]" 
           />
           
           {/* Static & Subtle Geometric Elements */}
           <div className="absolute top-[20%] right-[10%] w-64 h-64 border border-gray-200/20 dark:border-white/5 rounded-full opacity-20" />
           <div className="absolute top-[40%] left-[5%] w-32 h-32 border border-gray-200/20 dark:border-white/5 rounded-lg rotate-12 opacity-20" />
           <div className="absolute bottom-[30%] right-[20%] w-96 h-96 border border-gray-200/20 dark:border-white/5 rounded-full opacity-10" />
           
           {/* Rotating Element */}
           <motion.div 
             style={{ rotate: rotateShape }}
             className="absolute top-[60%] left-[50%] w-[40rem] h-[40rem] border border-dashed border-gray-300/10 dark:border-white/5 rounded-full -translate-x-1/2 opacity-30"
           />
        </div>

        <Navbar />
        <main className="flex-grow relative">
          <Hero />
          <Services />
          <Advantages />
          <Integrations />
          <Pricing />
          <Team />
          <Portfolio />
        </main>
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;