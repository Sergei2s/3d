import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ImageOff } from 'lucide-react';

const projects = [
  { title: 'Квартира в ЖК "Триколор"', category: "3D Тур" },
  { title: "Лофт на Маяковской", category: "Интерьер" },
  { title: "Загородный дом 450м²", category: "3D Тур" },
  { title: "Ресторан 'Панорама'", category: "Коммерция" },
  { title: "Студия 35м²", category: "Аренда" },
  { title: "Бутик-отель", category: "HDR Панорамы" },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Subtle Background - Indigo/Gray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">Портфолио</h2>
            <p className="text-gray-500 dark:text-gray-400">Примеры работ, которые продают недвижимость</p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center gap-2"
          >
            Смотреть все работы &rarr;
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700"
            >
              {/* No Image State - "Error" Simulation */}
              <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-600">
                <ImageOff size={48} className="mb-2 opacity-50" />
                <span className="text-xs font-mono uppercase tracking-widest opacity-50">Image Not Found</span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center backdrop-blur-sm">
                <Eye size={32} className="mb-2 drop-shadow-md" />
                <h3 className="font-bold text-lg drop-shadow-md">{item.title}</h3>
                <span className="text-sm text-blue-100 drop-shadow-md">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;