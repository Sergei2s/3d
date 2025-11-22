import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Monitor } from 'lucide-react';

const Team: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="team" ref={containerRef} className="py-20 relative overflow-hidden">
       {/* Varied Background Shureshki */}
       <div className="absolute top-10 left-[-100px] w-[500px] h-[500px] bg-gray-200/40 dark:bg-gray-700/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
       <div className="absolute bottom-10 right-[-100px] w-[500px] h-[500px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
       
       {/* Floating Accent Dots */}
       <div className="absolute top-20 right-20 w-4 h-4 bg-accent rounded-full opacity-50 animate-bounce"></div>
       <div className="absolute bottom-20 left-1/3 w-6 h-6 bg-primary rounded-full opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Команда</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Профессионалы, которые делают вашу недвижимость привлекательной.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Specialist 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="flex flex-col items-center text-center max-w-sm group cursor-default"
          >
            <div className="relative w-80 h-80 mb-6 transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-accent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
              <img 
                src="/Image/team-1.jpg" 
                alt="Галина - Главный оператор" 
                className="relative w-full h-full rounded-3xl object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                }}
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-700 p-3 rounded-xl shadow-lg text-primary z-10 transition-transform group-hover:scale-110 group-hover:rotate-12">
                <Camera size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Галина
            </h3>
            <span className="text-primary font-medium mb-2">Главный оператор</span>
            <p className="text-gray-600 dark:text-gray-400">
              Представьте свою жизнь в этой квартире. Когда человек мысленно расставляет вещи и видит утро на этой кухне, он уже эмоционально готов стать счастливым владельцем этой недвижимости.
            </p>
          </motion.div>

          {/* Specialist 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="flex flex-col items-center text-center max-w-sm group cursor-default"
          >
            <div className="relative w-80 h-80 mb-6 transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-primary rounded-3xl transform -rotate-2 group-hover:-rotate-6 transition-transform"></div>
              <img 
                src="/Image/team-2.jpg" 
                alt="Сергей - Ведущий разработчик" 
                className="relative w-full h-full rounded-3xl object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                }}
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-700 p-3 rounded-xl shadow-lg text-primary z-10 transition-transform group-hover:scale-110 group-hover:-rotate-12">
                <Monitor size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Сергей
            </h3>
            <span className="text-primary font-medium mb-2">Ведущий разработчик</span>
            <p className="text-gray-600 dark:text-gray-400">
              Моя цель — чтобы после просмотра вашей квартиры через наш 3D-тур человек не смог отказаться от неё, просто потому что уже влюбился.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;