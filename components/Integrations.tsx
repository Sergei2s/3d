import React from 'react';
import { motion } from 'framer-motion';
import { Map, ExternalLink, TrendingUp, MousePointer2 } from 'lucide-react';

const Integrations: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Warm Background Flow - Orange/Red for Ad Heatmap feel */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-orange-200/40 dark:bg-orange-900/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-red-200/30 dark:bg-red-900/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Decorative Dashed Lines */}
      <svg className="absolute top-20 left-20 w-64 h-64 opacity-20 dark:opacity-10 pointer-events-none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden border border-white/50 dark:border-gray-700 group">
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-sm font-bold mb-6 border border-green-200 dark:border-green-800"
              >
                <TrendingUp size={16} />
                <span>Рост просмотров до +40%</span>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                Выделите объявление на <span className="text-[#04b9e6]">Циан</span>, <span className="text-[#fc3f1d]">Яндекс</span> и Картах
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Мы адаптируем туры для размещения на агрегаторах недвижимости. Карточки объектов с 3D-туром получают специальный бейдж, ранжируются выше и удерживают внимание покупателя в 3 раза дольше.
              </p>

              <div className="flex flex-col gap-4 mb-10">
                 {[
                    "Специальный значок «3D-тур» в поиске",
                    "Интеграция в Яндекс.Карты и Google Maps",
                    "Виртуальная прогулка без ухода с сайта"
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">✓</div>
                        {item}
                    </div>
                 ))}
              </div>

              <motion.a 
                href="#contacts"
                whileHover={{ scale: 1.02, backgroundColor: "#111827" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
              >
                Улучшить объявления <ExternalLink size={20} />
              </motion.a>
            </div>

            {/* Visual */}
            <div className="relative order-1 lg:order-2 perspective-1000">
               <motion.div
                  initial={{ opacity: 0, rotateX: 10, y: 50 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                  whileHover={{ rotateX: 2, scale: 1.02 }}
                  className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
               >
                  {/* Browser Header */}
                  <div className="h-10 bg-gray-100 dark:bg-gray-800 flex items-center px-4 gap-2 border-b border-gray-200 dark:border-gray-700">
                     <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                     </div>
                     <div className="ml-4 flex-1 h-5 bg-white dark:bg-gray-700 rounded-md text-[10px] text-gray-400 flex items-center px-2 truncate">
                        cian.ru/sale/flat/2938471
                     </div>
                  </div>

                  {/* Body */}
                  <div className="p-4">
                     <div className="flex gap-4 mb-4">
                        <div className="w-2/3 relative group cursor-pointer">
                            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden relative">
                                <img 
                                    src="/Image/cian-ad.jpg" 
                                    alt="Пример объявления с 3D-туром" 
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop"
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                
                                {/* 3D Badge */}
                                <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1.5 shadow-lg">
                                    <span className="w-2 h-2 bg-[#04b9e6] rounded-full animate-pulse"></span>
                                    3D-тур
                                </div>

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform shadow-lg">
                                        <MousePointer2 className="text-white w-6 h-6 fill-current" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3 space-y-2">
                            <div className="h-full bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                     </div>
                  </div>

                  {/* Floating Elements */}
                   <motion.div 
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 z-20"
                   >
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        <Map className="text-yellow-600 w-6 h-6" />
                      </div>
                      <div>
                          <div className="text-xs text-gray-500">Яндекс.Карты</div>
                          <div className="font-bold text-gray-900 dark:text-white">Подтверждено</div>
                      </div>
                   </motion.div>

               </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;