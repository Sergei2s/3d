import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, CheckCircle2, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="pricing" ref={containerRef} className="py-24 relative overflow-hidden">
        {/* Unified Flow - Deep Cosmic Background Blob that fades in */}
        <div className="absolute inset-0 pointer-events-none">
            {/* Large gradient to mimic the previous solid background but blended */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0f172a]/50 to-transparent blur-3xl -z-10"></div>
        </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-sm text-gray-900 dark:text-white">
            Прозрачное ценообразование
          </h2>
          <p className="text-gray-600 dark:text-blue-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Никаких скрытых платежей. Стоимость зависит от площади и количества точек съемки.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-gray-900">
            {/* Card 1: Standard */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col items-center"
            >
                <h3 className="text-gray-500 dark:text-gray-400 font-bold text-sm uppercase tracking-widest mb-4">Базовый</h3>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Интерьерная съемка</div>
                <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-2xl text-gray-500 font-medium">от</span>
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">10 000</span>
                    <span className="text-xl text-gray-500">₽</span>
                </div>
                
                <ul className="text-left space-y-4 mb-8 w-full px-2 text-gray-600 dark:text-gray-300 flex-grow">
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" /> 
                        <span>Профессиональная ретушь</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" /> 
                        <span>Широкоугольная оптика</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" /> 
                        <span>Готовность за 48 часов</span>
                    </li>
                </ul>

                <a href="tel:+79022123438" className="w-full py-4 rounded-xl font-bold bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-gray-900 transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg">
                    Заказать съемку <ArrowRight size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
            </motion.div>

            {/* Card 2: Premium */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/95 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl p-1 shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]"
            >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <div className="relative h-full bg-white dark:bg-gray-900 rounded-[1.3rem] p-7 flex flex-col items-center overflow-hidden">
                    {/* Hit Badge */}
                    <div className="absolute top-0 right-0 bg-gradient-to-bl from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-bl-2xl font-bold text-xs tracking-wider shadow-lg flex items-center gap-1">
                        <Star size={12} fill="currentColor" /> ХИТ
                    </div>

                    <h3 className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-4 mt-2">Максимальный</h3>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">3D Тур "Под ключ"</div>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-2xl text-gray-500 font-medium">от</span>
                        <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">10 000</span>
                        <span className="text-xl text-gray-500">₽</span>
                    </div>

                    <ul className="text-left space-y-4 mb-8 w-full px-2 text-gray-600 dark:text-gray-300 flex-grow">
                        <li className="flex items-start gap-3">
                            <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="font-medium">HDR Панорамы 360°</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="font-medium">Хостинг в подарок</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="font-medium">Адаптация под VR очки</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="font-medium">Публикация в картах</span>
                        </li>
                    </ul>

                    <a href="tel:+79022123438" className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transform group-hover:scale-[1.02] active:scale-95">
                        Заказать 3D-тур <ArrowRight size={18} />
                    </a>
                </div>
            </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium border border-gray-200 dark:border-white/10 hover:bg-white/10 transition-colors cursor-default text-gray-500 dark:text-blue-100"
        >
            <div className="bg-blue-500/10 p-1.5 rounded-full">
                <Calculator size={16} className="text-blue-500 dark:text-blue-300" />
            </div>
            <span>Окончательный расчёт — после бесплатного осмотра объекта.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;