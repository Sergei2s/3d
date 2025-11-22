import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MousePointerClick } from 'lucide-react';

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="hero" ref={targetRef} className="relative min-h-screen flex items-center justify-center pt-40 pb-24 overflow-hidden">
      {/* Ambient Background Flow - Blue/Cyan Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <motion.div style={{ y: yBg, opacity: opacityBg }} className="w-full h-full">
            <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30rem] h-[30rem] bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-[80px]" />
         </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left flex flex-col justify-center"
        >
          {/* Heading with better leading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Лучшие</span> интерактивные <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">3D-панорамы</span>
          </h1>
          
          {/* Description with relaxed leading and more bottom margin */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
            Интерактивный 3D-тур с ощущением полного присутствия. Люди сами управляют просмотром: открывают двери шкафов, знакомятся с техникой, рассматривают детали. Все ключевые преимущества вашего объекта.
          </p>
          
          {/* Tagline - Isolated with vertical margin */}
          <div className="mb-10 flex justify-center lg:justify-start">
            <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-300 text-sm font-semibold tracking-wide uppercase border border-blue-100 dark:border-blue-800/50">
              Новое представление недвижимости
            </span>
          </div>
          
          {/* Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <a 
              href="#contacts"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-lg font-semibold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              Заказать съемку
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

        {/* Visual/Interactive Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-1/2 relative w-full"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 aspect-video group cursor-pointer transform hover:scale-[1.02] transition-transform duration-500">
            <img 
              src="/Image/hero-bg.jpg" 
              alt="Interior 3D Tour" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Fallback if user hasn't created the folder yet
                e.currentTarget.src = "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop"
              }}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <div className="bg-white/20 backdrop-blur-sm p-5 rounded-full border border-white/50 animate-pulse hover:animate-none hover:scale-110 transition-transform">
                  <MousePointerClick className="text-white w-14 h-14" />
                </div>
            </div>
            
            {/* Floating Feature Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg text-sm font-bold text-primary"
            >
              HDR 360°
            </motion.div>
             <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute bottom-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg text-sm font-bold text-accent-dark"
            >
              Интерактив
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;