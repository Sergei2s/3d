import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Scan, Camera, Server, Aperture } from 'lucide-react';

const services = [
  {
    title: "Интерактивные 3D-туры",
    description: "Полное погружение. Перемещение по точкам, открытие дверей, всплывающие подсказки и инфо-теги.",
    icon: <Scan size={40} />,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    title: "Панорамная HDR фотосъёмка",
    description: "Идеальный баланс света и тени. Никакого «мыла» или пересвеченных окон. Кристальная четкость.",
    icon: <Aperture size={40} />,
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
  },
  {
    title: "Размещение на хостинге",
    description: "Вам не нужен свой сервер. Мы размещаем туры на наших быстрых серверах. Ссылка работает мгновенно.",
    icon: <Server size={40} />,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
  },
  {
    title: "Интерьерная съёмка",
    description: "Профессиональные фотографии для объявлений. Подчеркиваем объем, стиль и преимущества объекта.",
    icon: <Camera size={40} />,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
  }
];

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Rich Background Elements (Shureshki) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-300/20 dark:bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-300/20 dark:bg-blue-900/20 rounded-full blur-[100px] pointer-events-none -z-10 -translate-x-1/3 translate-y-1/4"></div>
      
      {/* Decorative floating geometric shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 border-4 border-purple-200/30 dark:border-purple-700/20 rounded-full blur-sm pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-16 h-16 bg-yellow-200/40 dark:bg-yellow-600/20 rounded-lg rotate-45 blur-md pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Комплексный подход к визуализации недвижимости. От съемки до публикации.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row p-10 rounded-[2rem] border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all bg-white/40 dark:bg-gray-800/40 backdrop-blur-md group hover:border-primary/30 relative overflow-hidden"
            >
              {/* Subtle gradient overlay inside card */}
              <div className={`absolute top-0 right-0 w-40 h-40 ${service.color.split(' ')[0]} opacity-10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150`}></div>
              
              <div className={`flex-shrink-0 mb-6 sm:mb-0 sm:mr-8 w-20 h-20 rounded-2xl flex items-center justify-center ${service.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10`}>
                {service.icon}
              </div>
              <div className="relative z-10 flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;