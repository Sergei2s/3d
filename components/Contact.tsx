import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, MessageCircle, Send, MapPin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <footer id="contacts" ref={containerRef} className="bg-gray-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
      <motion.div style={{ rotate }} className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rounded-xl pointer-events-none" />
      <motion.div style={{ rotate: rotate, x: 100 }} className="absolute bottom-20 right-20 w-32 h-32 border border-white/5 rounded-full pointer-events-none border-dashed" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-4 border border-white/20">Контакты</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Готовы показать ваш объект <span className="text-primary-light">миру?</span></h2>
            <p className="text-gray-400 mb-8 text-lg max-w-md">
              Закажите выезд специалиста бесплатно. Мы работаем по всей России. Позвоните нам или напишите в мессенджеры.
            </p>
            
            <div className="space-y-6">
              <a href="tel:+79022123438" className="flex items-center gap-4 text-2xl font-bold hover:text-accent transition-colors w-fit group">
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-primary transition-colors">
                    <Phone className="text-white" size={24} />
                </div>
                +7 (902) 212-34-38
              </a>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://t.me/+79022123438" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#2AABEE] hover:bg-[#2AABEE]/80 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all font-medium transform hover:scale-105 shadow-lg shadow-blue-400/20"
                >
                  <Send size={20} /> Telegram
                </a>
                <a 
                  href="https://wa.me/79022123438" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#25D366]/80 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all font-medium transform hover:scale-105 shadow-lg shadow-green-400/20"
                >
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="bg-gray-800/50 backdrop-blur-md p-8 rounded-3xl border border-gray-700 shadow-2xl text-center relative overflow-hidden group"
          >
             {/* Subtle glow on hover */}
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="flex flex-col items-center justify-center h-full py-10 relative z-10">
                <div className="w-20 h-20 bg-gray-700/50 rounded-full flex items-center justify-center mb-6 animate-bounce shadow-inner border border-gray-600">
                  <MapPin className="text-accent w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Работаем по всей России</h3>
                <p className="text-gray-400 mb-6">
                   Москва, Санкт-Петербург, Сочи, Екатеринбург и другие города.
                </p>
                <a href="tel:+79022123438" className="text-accent hover:text-white font-semibold flex items-center gap-2 transition-colors">
                    Обсудить проект <ArrowRight size={16} />
                </a>
             </div>
          </motion.div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0 flex flex-col md:flex-row gap-2 items-center">
            <span>© {new Date().getFullYear()} gallamarin. Все права защищены.</span>
          </div>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
             <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
          </div>
        </div>

        {/* Extra Mobile Action Bar at very bottom if needed, or just repeat links */}
        <div className="mt-8 flex justify-center md:hidden gap-4 pb-8">
             <a href="https://t.me/+79022123438" target="_blank" rel="noreferrer" className="p-4 bg-[#2AABEE] rounded-full text-white shadow-lg hover:scale-110 transition-transform">
                <Send size={24} />
             </a>
             <a href="https://wa.me/79022123438" target="_blank" rel="noreferrer" className="p-4 bg-[#25D366] rounded-full text-white shadow-lg hover:scale-110 transition-transform">
                <MessageCircle size={24} />
             </a>
             <a href="tel:+79022123438" className="p-4 bg-primary rounded-full text-white shadow-lg hover:scale-110 transition-transform">
                <Phone size={24} />
             </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;