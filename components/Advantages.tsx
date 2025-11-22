import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Smartphone, Layers } from 'lucide-react';

const Advantages: React.FC = () => {
  const advantagesList = [
    {
      icon: <Layers className="text-white" />,
      title: "Лучшее качество",
      desc: "Дайте людям увидеть больше. Ваша недвижимость заслуживает внимания и справедливой цены.",
      color: "bg-blue-500"
    },
    {
      icon: <Smartphone className="text-white" />,
      title: "Полная адаптивность",
      desc: "Сайт одинаково хорошо выглядит на любом экране: десктоп, планшет или смартфон.",
      color: "bg-purple-500"
    },
    {
      icon: <Zap className="text-white" />,
      title: "Скорость и SEO",
      desc: "Каждый 3D-тур работает плавно и эффективно. Мгновенная загрузка.",
      color: "bg-yellow-500"
    },
    {
      icon: <CheckCircle2 className="text-white" />,
      title: "Интерактивность",
      desc: "Отметки, ссылки, возможность открывать дверцы или перемещать мебель.",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="advantages" className="py-32 relative overflow-hidden">
      {/* Rich Background - Teal/Green Flow */}
      <div className="absolute top-1/4 left-[-10%] w-[700px] h-[700px] bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Grid Pattern Decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 opacity-10 dark:opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-12 bg-accent"></div>
              <span className="text-accent-dark dark:text-accent font-bold uppercase tracking-wider text-sm">Преимущества</span>
              <div className="h-1 w-12 bg-accent"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              Ваш <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">маяк</span> в мире <br/> недвижимости
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Мы создаем визуальный контент, который продает. Забудьте о скучных фото — дайте клиентам возможность прожить момент.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantagesList.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Inner glow effect */}
              <div className={`absolute -right-10 -top-10 w-40 h-40 ${adv.color} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity`}></div>

              <div className="relative flex items-start gap-6">
                <div className={`flex-shrink-0 w-16 h-16 ${adv.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                  {React.cloneElement(adv.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {adv.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;