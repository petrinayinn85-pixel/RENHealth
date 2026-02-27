import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Clock, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Star,
  Coffee,
  Moon,
  Sun,
  Droplets,
  Globe
} from 'lucide-react';
import { translations, Language } from './translations';

// --- Types ---

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'confinement' | 'tea';
  features?: string[];
}

// --- Constants ---

const LOGOS = {
  motherhoodChoice: "/Motherh Choice.jpg",
  lyc: "/LYC Confinement.png",
  cozzi: "/Cozzi Confinement.png",
  itsHerbs: "/itsHerbs.png",
  motherhood: "/Motherhood.com.my.png",
  kelabmama: "/Kelabmama.com.png",
  gracie: "/Gracie Confinement.png",
  byond: "/Byond28 Confinement.png",
};

const CONFINEMENT_PACKAGES: Product[] = [
  {
    id: 'conf-14',
    name: '14-Day Essentials',
    description: 'A focused recovery package for the initial healing phase.',
    price: 'RM 888',
    image: '/14-Day Essentials.jpg',
    category: 'confinement',
    features: ['Uterus Recovery', 'Blood Replenishment', 'Basic Vitality Boost']
  },
  {
    id: 'conf-28',
    name: '28-Day Signature',
    description: 'Our most popular choice for comprehensive postpartum restoration.',
    price: 'RM 1,688',
    image: '/28-Day Signature.jpg',
    category: 'confinement',
    features: ['Full Body Restoration', 'Lactation Support', 'Hormonal Balance', 'Immunity Strengthening']
  },
  {
    id: 'conf-56',
    name: '56-Day Premium',
    description: 'The ultimate care package for long-term health and deep rejuvenation.',
    price: 'RM 2,488',
    image: '/56-Day Premium.jpg',
    category: 'confinement',
    features: ['Deep Tissue Repair', 'Bone & Joint Health', 'Premium Herbal Grade', 'Extended Wellness Support']
  }
];

const MISCARRIAGE_PACKAGE: Product = {
  id: 'conf-7',
  name: '7-Day Recovery',
  description: 'Specialized care for miscarriage recovery and gentle body restoration.',
  price: 'RM 488',
  image: '/Miscarriage Recovery Care.jpg',
  category: 'confinement',
  features: ['Gentle Uterus Care', 'Emotional Balance Support', 'Basic Vitality Replenishment']
};

const TEA_SERIES: Product[] = [
  {
    id: 'tea-damp',
    name: 'Dampness Removing Tea',
    description: 'Balance your body and reduce bloating naturally.',
    price: 'RM 48',
    image: '/Dampness Removing Tea.jpg',
    category: 'tea'
  },
  {
    id: 'tea-date',
    name: 'Red Date Longan Tea',
    description: 'Classic nourishment for blood health and vitality.',
    price: 'RM 42',
    image: '/Red Date Longan Tea.jpg',
    category: 'tea'
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Lim",
    role: "Mother of two",
    content: "The 28-day confinement package was a lifesaver. The herbs were so easy to prepare, and I felt my energy returning much faster than my first pregnancy.",
    image: ""
  },
  {
    id: 2,
    name: "Aishah Rahman",
    role: "New Mother",
    content: "I love the Herbal Tea series! It's my daily ritual now. The Red Date Longan tea is so soothing and tastes amazing. Highly recommend to all busy moms.",
    image: ""
  },
  {
    id: 3,
    name: "Jessica Wong",
    role: "Professional",
    content: "Convenience without compromising quality. REN Health truly understands the needs of modern women. The packaging is beautiful and the instructions are clear.",
    image: ""
  }
];

// --- Components ---

const Navbar = ({ language, setLanguage }: { language: Language, setLanguage: (l: Language) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language].nav;

  return (
    <nav className="fixed w-full z-50 bg-ren-cream/80 backdrop-blur-md border-b border-ren-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-3xl font-light tracking-tight text-ren-ink">rén</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#confinement" className="text-[10px] font-bold hover:text-ren-gold transition-colors uppercase tracking-[0.2em]">{t.confinement}</a>
            <a href="#teas" className="text-[10px] font-bold hover:text-ren-gold transition-colors uppercase tracking-[0.2em]">{t.teas}</a>
            <a href="#about" className="text-[10px] font-bold hover:text-ren-gold transition-colors uppercase tracking-[0.2em]">{t.story}</a>
            <a href="#contact" className="text-[10px] font-bold hover:text-ren-gold transition-colors uppercase tracking-[0.2em]">{t.contact}</a>
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-ren-gold/20">
              <button 
                onClick={() => setLanguage('en')}
                className={`text-[10px] font-bold transition-colors ${language === 'en' ? 'text-ren-gold' : 'text-ren-ink/40 hover:text-ren-gold'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('zh')}
                className={`text-[10px] font-bold transition-colors ${language === 'zh' ? 'text-ren-gold' : 'text-ren-ink/40 hover:text-ren-gold'}`}
              >
                中文
              </button>
            </div>

            <button className="bg-ren-ink text-white px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-ren-gold transition-all">
              {t.shop}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="p-2 text-ren-ink/60"
            >
              <Globe size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ren-cream border-b border-ren-gold/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#confinement" onClick={() => setIsOpen(false)} className="block text-lg font-serif">{t.confinement}</a>
              <a href="#teas" onClick={() => setIsOpen(false)} className="block text-lg font-serif">{t.teas}</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-serif">{t.story}</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block text-lg font-serif">{t.contact}</a>
              <div className="flex gap-4 pt-4 border-t border-ren-gold/10">
                <button 
                  onClick={() => { setLanguage('en'); setIsOpen(false); }}
                  className={`text-sm font-bold ${language === 'en' ? 'text-ren-gold' : 'text-ren-ink/40'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => { setLanguage('zh'); setIsOpen(false); }}
                  className={`text-sm font-bold ${language === 'zh' ? 'text-ren-gold' : 'text-ren-ink/40'}`}
                >
                  简体中文
                </button>
              </div>
              <button className="w-full bg-ren-ink text-white py-3 rounded-full font-bold uppercase tracking-widest text-xs">{t.shop}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ language }: { language: Language }) => {
  const t = translations[language].hero;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/OurStory.jpg" 
          className="w-full h-full object-cover opacity-20 blur-sm"
          alt="Wellness Background"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block px-4 py-1 rounded-full border border-ren-gold/30 text-ren-gold text-[10px] font-bold tracking-[0.2em] uppercase">
                {t.badge}
              </span>
              <div className="flex items-center gap-2 bg-ren-gold/5 px-3 py-1 rounded-full border border-ren-gold/10">
                <img 
                  src={LOGOS.motherhoodChoice} 
                  className="w-4 h-4 rounded-full object-contain grayscale opacity-70" 
                  alt="Award"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[9px] font-bold text-ren-gold uppercase tracking-widest">{t.award}</span>
              </div>
            </div>
            <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] mb-10 text-ren-ink">
              {t.title1} <br />
              <span className="italic text-ren-rose font-light">{t.title2}</span>, <br />
              {t.title3}
            </h1>
            <p className="text-lg text-ren-ink/60 max-w-md mb-12 leading-relaxed font-light">
              {t.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-ren-ink text-white px-12 py-5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-ren-gold transition-all shadow-xl shadow-ren-ink/10">
                {t.ctaPrimary}
              </button>
              <button className="border border-ren-ink/20 text-ren-ink px-12 py-5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-ren-ink hover:text-white transition-all">
                {t.ctaSecondary}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.instagram.com/reel/DHx5jUlTfwI/embed/" 
                className="w-full h-full border-none"
                scrolling="no"
                allowTransparency={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <div className="flex items-center gap-2 text-ren-gold mb-2">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-xs font-medium italic">"{t.testimonial}"</p>
              <p className="text-[10px] uppercase tracking-widest mt-2 opacity-50">— {t.author}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = ({ language }: { language: Language }) => {
  const t = translations[language].features;
  const icons = [<Leaf className="text-ren-gold" />, <Clock className="text-ren-gold" />, <Heart className="text-ren-gold" />];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {t.map((item, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-ren-sand rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-ren-gold/10 transition-colors">
                {icons[idx]}
              </div>
              <h3 className="text-2xl font-serif mb-4 text-ren-ink">{item.title}</h3>
              <p className="text-ren-ink/50 text-sm leading-relaxed max-w-xs mx-auto font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConfinementSection = ({ language }: { language: Language }) => {
  const t = translations[language].confinement;

  return (
    <section id="confinement" className="py-32 bg-ren-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-ren-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">{t.label}</span>
          <h2 className="text-6xl font-serif mb-6 text-ren-ink">{t.title}</h2>
          <p className="text-ren-ink/50 max-w-xl mx-auto font-light">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CONFINEMENT_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-ren-gold/5 group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={pkg.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={pkg.name} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-ren-ink/5 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-serif mb-3 text-ren-ink">{t.packages[idx].name}</h3>
                <p className="text-ren-ink/50 text-sm mb-8 font-light leading-relaxed">{t.packages[idx].desc}</p>
                <ul className="space-y-4 mb-10">
                  {t.packages[idx].features?.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] text-ren-ink/70 font-medium uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 rounded-full bg-ren-gold/40" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-8 border-t border-ren-gold/10">
                  <span className="text-2xl font-serif text-ren-gold">{pkg.price}</span>
                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ren-ink hover:text-ren-gold transition-colors">
                    {t.addToCart} <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = ({ language }: { language: Language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = translations[language].testimonials;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % t.items.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + t.items.length) % t.items.length);
  };

  return (
    <section className="py-32 bg-ren-sand/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-ren-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">{t.label}</span>
          <h2 className="text-5xl font-serif text-ren-ink">{t.title}</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-full text-center px-8 md:px-24"
              >
                <div className="mb-10 flex justify-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-ren-sand flex items-center justify-center">
                    {TESTIMONIALS[currentIndex].image ? (
                      <img 
                        src={TESTIMONIALS[currentIndex].image} 
                        alt={t.items[currentIndex].name}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <Heart className="text-ren-gold w-10 h-10 opacity-40" />
                    )}
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-serif italic text-ren-ink/80 mb-10 leading-relaxed font-light">
                  "{t.items[currentIndex].content}"
                </p>
                <div>
                  <h4 className="text-xl font-serif text-ren-ink mb-1">{t.items[currentIndex].name}</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ren-gold font-bold">{t.items[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-12 mt-16">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-ren-gold/20 flex items-center justify-center text-ren-gold hover:bg-ren-gold hover:text-white transition-all duration-500"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
            <div className="flex gap-3">
              {t.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    currentIndex === i ? 'w-12 bg-ren-gold' : 'w-4 bg-ren-gold/20'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-ren-gold/20 flex items-center justify-center text-ren-gold hover:bg-ren-gold hover:text-white transition-all duration-500"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const MiscarriageSection = ({ language }: { language: Language }) => {
  const t = translations[language].miscarriage;

  return (
    <section id="miscarriage" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-ren-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">{t.label}</span>
            <h2 className="text-6xl font-serif mb-8 text-ren-ink">{t.title}</h2>
            <p className="text-ren-ink/50 mb-12 leading-relaxed font-light text-lg">
              {t.desc}
            </p>
            <div className="bg-ren-sand p-12 rounded-[60px] border border-ren-gold/5 shadow-sm">
              <h3 className="text-3xl font-serif mb-6 text-ren-ink">{t.pkgName}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {t.features?.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-ren-ink/70 font-medium uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-ren-gold/40" /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-10 border-t border-ren-gold/10">
                <span className="text-3xl font-serif text-ren-gold">{MISCARRIAGE_PACKAGE.price}</span>
                <button className="bg-ren-ink text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-ren-gold transition-all shadow-xl shadow-ren-ink/10">
                  {t.addToCart}
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative">
              <img 
                src={MISCARRIAGE_PACKAGE.image} 
                className="w-full h-full object-cover"
                alt="Miscarriage Recovery Care"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ren-gold/5 mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TeaSection = ({ language }: { language: Language }) => {
  const t = translations[language].teas;

  return (
    <section id="teas" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-ren-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">{t.label}</span>
            <h2 className="text-6xl font-serif mb-6 text-ren-ink">{t.title}</h2>
            <p className="text-ren-ink/50 max-w-md font-light">{t.desc}</p>
          </div>
          <button className="text-ren-ink font-bold uppercase tracking-[0.2em] text-[10px] border-b border-ren-gold/30 pb-2 hover:text-ren-gold hover:border-ren-gold transition-all">
            {t.viewFull}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEA_SERIES.map((tea, idx) => (
            <motion.div
              key={tea.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-[40px] overflow-hidden mb-8 relative shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img 
                  src={tea.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt={t.items[idx].name} 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ren-ink/5 group-hover:bg-transparent transition-colors" />
              </div>
              <h4 className="text-xl font-serif mb-2 text-ren-ink group-hover:text-ren-gold transition-colors">{t.items[idx].name}</h4>
              <p className="text-ren-ink/40 text-xs mb-4 line-clamp-1 font-light tracking-wide">{t.items[idx].desc}</p>
              <span className="text-sm font-medium text-ren-gold tracking-widest">{tea.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ language }: { language: Language }) => {
  const t = translations[language].about;

  return (
    <section id="about" className="py-32 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-ren-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-ren-rose/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Vertical Rail & Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="flex gap-8 items-start">
              {/* Vertical Rail Text */}
              <div className="hidden sm:block pt-12">
                <span className="rail-text text-[10px] font-bold uppercase tracking-[0.4em] text-ren-gold/40 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  {language === 'en' ? 'ESTABLISHED 2024 • HERITAGE & HEART' : '始于 2024 • 传承与初心'}
                </span>
              </div>
              
              <div className="relative flex-1">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="rounded-[60px] overflow-hidden aspect-video shadow-2xl relative z-10"
                >
                  <img 
                    src="/OurStory.jpg" 
                    className="w-full h-full object-cover"
                    alt="Our Story"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-8 -right-8 bg-ren-gold text-white p-8 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-xl z-20 border-4 border-white"
                >
                  <span className="text-2xl font-serif leading-none">{t.statValue}</span>
                  <span className="text-[8px] uppercase tracking-widest font-bold mt-1">{t.statLabel}</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-ren-gold/30" />
                <span className="text-ren-gold font-bold uppercase tracking-[0.2em] text-[10px]">{t.label}</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-serif mb-10 leading-[0.9] text-ren-ink">
                {t.title1} <br />
                <span className="italic text-ren-rose font-light">{t.title2}</span>
              </h2>
              
              <div className="space-y-8 text-lg text-ren-ink/70 leading-relaxed max-w-2xl">
                <p>
                  {t.p1}
                </p>
                <p>
                  {t.p2}
                </p>
                
                <div className="relative py-10 my-12">
                  <div className="absolute inset-0 bg-ren-sand/50 rounded-[40px] -rotate-1" />
                  <div className="relative px-10">
                    <Star className="text-ren-gold mb-6" size={24} fill="currentColor" />
                    <p className="text-xl font-serif italic text-ren-ink leading-relaxed">
                      "{t.quote.split(t.expert)[0]}<span className="text-ren-gold font-bold not-italic">{t.expert}</span>{t.quote.split(t.expert)[1]}"
                    </p>
                  </div>
                </div>

                <p className="font-serif italic text-2xl text-ren-ink/90">
                  {t.footer}
                </p>
              </div>

              <div className="mt-16 pt-12 border-t border-ren-gold/10 flex flex-wrap gap-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-ren-gold/10 flex items-center justify-center">
                    <Leaf className="text-ren-gold" size={20} />
                  </div>
                  <div>
                    <span className="block text-xl font-serif text-ren-ink">{t.feature1Title}</span>
                    <span className="text-[10px] uppercase tracking-widest text-ren-ink/40 font-bold">{t.feature1Desc}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-ren-gold/10 flex items-center justify-center">
                    <Heart className="text-ren-gold" size={20} />
                  </div>
                  <div>
                    <span className="block text-xl font-serif text-ren-ink">{t.feature2Title}</span>
                    <span className="text-[10px] uppercase tracking-widest text-ren-ink/40 font-bold">{t.feature2Desc}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const Footer = ({ language }: { language: Language }) => {
  const t = translations[language].footer;

  return (
    <footer className="bg-white pt-32 pb-16 border-t border-ren-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <span className="font-serif text-4xl font-light tracking-tight text-ren-ink mb-8 block">rén</span>
            <p className="text-ren-ink/40 text-sm leading-relaxed mb-8 font-light">
              {t.desc}
            </p>
            <div className="flex space-x-6">
              <div className="w-10 h-10 rounded-full border border-ren-gold/20 flex items-center justify-center text-ren-gold hover:bg-ren-gold hover:text-white transition-all cursor-pointer">
                <Heart size={16} />
              </div>
              <div className="w-10 h-10 rounded-full border border-ren-gold/20 flex items-center justify-center text-ren-gold hover:bg-ren-gold hover:text-white transition-all cursor-pointer">
                <Leaf size={16} />
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold uppercase tracking-[0.3em] text-[10px] mb-8 text-ren-ink">{t.shop}</h5>
            <ul className="space-y-5 text-sm text-ren-ink/50 font-light">
              {t.shopLinks.map((link, i) => (
                <li key={i}><a href="#" className="hover:text-ren-gold transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-[0.3em] text-[10px] mb-8 text-ren-ink">{t.support}</h5>
            <ul className="space-y-5 text-sm text-ren-ink/50 font-light">
              {t.supportLinks.map((link, i) => (
                <li key={i}><a href="#" className="hover:text-ren-gold transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-[0.3em] text-[10px] mb-8 text-ren-ink">{t.newsletter}</h5>
            <p className="text-sm text-ren-ink/40 mb-8 font-light leading-relaxed">{t.newsletterDesc}</p>
            <div className="flex border-b border-ren-gold/20 pb-2">
              <input 
                type="email" 
                placeholder={t.emailPlaceholder} 
                className="bg-transparent border-none px-0 py-2 text-sm w-full outline-none font-light"
              />
              <button className="text-ren-ink text-[10px] font-bold uppercase tracking-widest hover:text-ren-gold transition-colors">{t.join}</button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-ren-gold/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.4em] text-ren-ink/30 font-bold">
            {t.rights}
          </p>
          <div className="flex space-x-8 text-[9px] uppercase tracking-[0.4em] text-ren-ink/30 font-bold">
            <a href="#" className="hover:text-ren-gold transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-ren-gold transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const PartnersSection = ({ language }: { language: Language }) => {
  const t = translations[language].partners;
  const centres = [
    { name: "Cozzi Confinement Centre", image: LOGOS.cozzi },
    { name: "LYC Confinement Centre", image: LOGOS.lyc },
    { name: "Byond28 Confinement Centre", image: LOGOS.byond },
    { name: "Gracie Confinement Centre", image: LOGOS.gracie }
  ];
  const partners = [
    { name: "itsHerbs", image: LOGOS.itsHerbs },
    { name: "Motherhood.com.my", image: LOGOS.motherhood },
    { name: "Kelabmama.com", image: LOGOS.kelabmama }
  ];

  return (
    <section className="py-24 bg-ren-sand/50 border-y border-ren-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-ren-gold font-bold mb-4 block">{t.label}</span>
          <h2 className="text-4xl font-serif text-ren-ink">{t.title}</h2>
        </div>
        
        <div className="mb-24">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-ren-ink/30 mb-12 font-bold">{t.centresLabel}</p>
          <div className="flex flex-wrap justify-center gap-16 md:gap-24 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {centres.map((centre, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-ren-gold/10 bg-white p-3 group-hover:border-ren-gold/30 transition-all duration-500">
                  <img 
                    src={centre.image} 
                    className="w-full h-full object-contain" 
                    alt={centre.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-ren-ink text-center max-w-[120px] leading-tight group-hover:text-ren-gold transition-colors">{centre.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-12 rounded-[60px] shadow-sm border border-ren-gold/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-ren-gold/5 rounded-bl-full -mr-20 -mt-20 group-hover:bg-ren-gold/10 transition-all duration-700" />
            <div className="flex items-center gap-8 mb-10">
              <div className="w-24 h-24 bg-ren-sand p-4 rounded-3xl flex-shrink-0">
                <img 
                  src={LOGOS.motherhoodChoice} 
                  className="w-full h-full object-contain grayscale opacity-80" 
                  alt={t.awardTitle}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-3xl font-serif text-ren-ink">{t.awardTitle}</h3>
                <div className="flex items-center gap-1 text-ren-gold mt-2">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
            </div>
            <p className="text-ren-ink/50 text-sm leading-relaxed mb-8 font-light">
              {t.awardDesc.split(t.awardHighlight)[0]}<span className="font-medium text-ren-ink">{t.awardHighlight}</span>{t.awardDesc.split(t.awardHighlight)[1]}
            </p>
            <div className="flex items-center gap-3 text-ren-gold font-bold text-[10px] uppercase tracking-[0.3em]">
              <span>{t.verified}</span>
              <div className="h-[1px] w-16 bg-ren-gold/20" />
            </div>
          </div>

          <div className="space-y-12">
            <p className="text-[10px] uppercase tracking-[0.4em] text-ren-ink/30 font-bold">{t.strategic}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {partners.map((partner, i) => (
                <div key={i} className="flex flex-col items-center gap-5 group cursor-pointer">
                  <div className="w-full aspect-video bg-white rounded-3xl border border-ren-gold/10 flex items-center justify-center p-6 group-hover:border-ren-gold/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-ren-gold/5">
                    <img 
                      src={partner.image} 
                      className="w-full h-full object-contain opacity-40 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500" 
                      alt={partner.name}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[9px] font-bold text-ren-ink/40 uppercase tracking-[0.2em] group-hover:text-ren-gold transition-colors">{partner.name}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-ren-ink/40 italic leading-relaxed font-light">
              {t.collab}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = ({ language }: { language: Language }) => {
  const t = translations[language].contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: [] as string[]
  });

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message || !formData.email) {
      alert(language === 'en' ? "Please fill in all required fields (Name, Email, and Message)." : "请填写所有必填字段（姓名、电子邮件和留言）。");
      return;
    }

    const whatsappNumber = "60124238768"; 
    const servicesText = formData.services.length > 0 ? formData.services.join(", ") : (language === 'en' ? "None selected" : "未选择");
    
    const text = `${language === 'en' ? 'NEW INQUIRY' : '新咨询'}
${language === 'en' ? 'Name' : '姓名'}: ${formData.name}
${language === 'en' ? 'Email' : '电子邮件'}: ${formData.email}
${language === 'en' ? 'Services' : '服务'}: ${servicesText}
${language === 'en' ? 'Message' : '留言'}: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-32 bg-ren-sand/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-ren-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">{t.label}</span>
          <h2 className="text-6xl font-serif mb-6 text-ren-ink">{t.title}</h2>
          <p className="text-ren-ink/50 font-light">{t.desc}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-10 md:p-16 rounded-[60px] shadow-sm border border-ren-gold/5">
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-ren-ink/40 mb-4">{t.form.name}</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-ren-sand/50 border-b border-ren-gold/10 px-0 py-4 outline-none focus:border-ren-gold transition-all font-light"
                  placeholder={t.form.namePlaceholder}
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-ren-ink/40 mb-4">{t.form.email}</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-ren-sand/50 border-b border-ren-gold/10 px-0 py-4 outline-none focus:border-ren-gold transition-all font-light"
                  placeholder={t.form.emailPlaceholder}
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-ren-ink/40 mb-6">{t.form.help}</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.form.services.map(service => (
                  <label key={service} className="flex items-center gap-4 cursor-pointer group">
                    <div 
                      onClick={() => handleServiceChange(service)}
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        formData.services.includes(service) 
                          ? 'bg-ren-gold border-ren-gold text-white' 
                          : 'border-ren-gold/20 group-hover:border-ren-gold/40'
                      }`}
                    >
                      {formData.services.includes(service) && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>
                    <span className={`text-sm transition-colors duration-500 ${formData.services.includes(service) ? 'text-ren-ink' : 'text-ren-ink/50'}`}>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-ren-ink/40 mb-4">{t.form.message}</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-ren-sand/50 border-b border-ren-gold/10 px-0 py-4 outline-none focus:border-ren-gold transition-all resize-none font-light"
                placeholder={t.form.messagePlaceholder}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-ren-ink text-white py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-ren-gold transition-all shadow-2xl shadow-ren-ink/20 flex items-center justify-center gap-4"
            >
              {t.form.submit} <ChevronRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen selection:bg-ren-gold/20">
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <PartnersSection language={language} />
        <Features language={language} />
        <ConfinementSection language={language} />
        <TestimonialsSection language={language} />
        <MiscarriageSection language={language} />
        <TeaSection language={language} />
        <AboutSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
